const express = require('express');
const next = require('next');
const { join } = require('path');
const { parse } = require('url');
// const helmet = require('helmet');
const LRUCache = require('lru-cache');

const siteRoutes = require('../src/site-routes/routes.js');
const siteRedirects = require('../src/site-routes/redirects.js');
const msiteRoutes = require('../src/site-routes/mroutes.js');

const port = process.env.PORT || 3070;

var compression = require('compression');

let dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const defaultRequestHandler = siteRoutes.getRequestHandler(nextApp);
const mdefaultRequestHandler = msiteRoutes.getRequestHandler(nextApp);

const ssrCache = new LRUCache({
    size: 1000,
    maxSize: 500 * 1024 * 1024, /* cache size will be 500 MB using `return n.length` as length() function */
    sizeCalculation: function (n, key) {
        return n.length
    },
    ttl: 1000 * 60 * 2

});


nextApp
    .prepare()
    .then(() => {
        const server = express();
        // server.use(helmet.noSniff());
        // server.use(helmet.hsts({ preload: true }));
        // server.use(helmet.hidePoweredBy());
        // server.use(helmet({ frameguard: false }));
        server.use(compression());

        server.use(function (err, req, res, next) {
            console.error(err.stack);
            res.status(500);
            res.render('error', { error: err });
        });

        siteRedirects.forEach(({ from, to, type = 301, method = 'get' }) => {
            server[method](from, (req, res) => {
                res.redirect(type, to);
            });
        });

        const reqHandler = (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname } = parsedUrl;
            if (
                pathname === '/service-worker.js' ||
                pathname === '/sw.js' ||
                pathname.startsWith('/workbox-') ||
                pathname.startsWith('/manifest') ||
                pathname.startsWith('/worker-')
            ) {
                const filePath = join(__dirname, '../public', pathname);
                nextApp.serveStatic(req, res, filePath);
            } else {
                if(req.headers['x-akamai-device-characteristics'] == 'is_mobile=true') {
                    mdefaultRequestHandler(req, res, parsedUrl);
                } else {
                    defaultRequestHandler(req, res, parsedUrl);
                }
            }
        };

        // server.get('/', (req, res) => reqHandler);
        server.get('/testpage/', (req, res) => renderAndCache(req, res));
        server.get('*', reqHandler);
        server.post('*', reqHandler);
        //  xml files

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });

        server.keepAliveTimeout = (60 * 1000) + 1000;
        server.headersTimeout = (60 * 1000) + 2000;
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });

function getCacheKey(req) {
    let desktopCacheKeys = {
        "/": { cacheKey: "/", cachePage: "/home" },
    }

    return desktopCacheKeys[req.path];

}

async function renderAndCache(req, res) {
    const key = getCacheKey(req);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key.cacheKey)) {
        //console.log(`serving from cache ${key}`);
        res.setHeader('x-cache', 'HIT');
        res.send(ssrCache.get(key.cacheKey));
        return
    }

    try {
        //console.log(`key ${key} not found, rendering`);
        // If not let's render the page into HTML
        //const html = await nextApp.renderToHTML(req, res, req.path, req.query);
        const html = await nextApp.renderToHTML(req, res, key.cachePage, req.query);

        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html);
            return
        }

        // Let's cache this page
        ssrCache.set(key.cacheKey, html);

        res.setHeader('x-cache', 'MISS');
        res.send(html);
    } catch (err) {
        nextApp.renderError(err, req, res, req.path, req.query)
    }
}