let isEnv = 'development';

if (process.env.APP_ENV != undefined) {
    isEnv = process.env.APP_ENV;
}

let siteUrl = 'http://localhost:3070/';
let siteEnv = 'stg';

isEnv='development';

switch (isEnv) {
    case 'production':
        siteUrl = 'https://hindi.news18.com/';
        siteEnv = '';
        break;
    case 'development':
        siteUrl = 'http://localhost:3070/';
        siteEnv = 'dev';
        break;
    case 'default':
        siteUrl = 'http://localhost:3070/';
        siteEnv = 'dev';
        break;
}

const SITE_CONFIG = {
    siteUrl,
    siteEnv,
    lang: 'english',
}

if (isEnv === 'production') {
    console.log = function no_console() { };
}

module.exports = SITE_CONFIG;