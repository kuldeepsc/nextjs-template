const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());

routes.add('/home/', 'index');
routes.add('/', 'index');
routes.add('/kul/:section/', 'equity');
routes.add('/eq', 'equity');
