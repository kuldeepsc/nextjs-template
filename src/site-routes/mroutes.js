const routes = (module.exports = require('next-routes')());

routes.add("/kul/:section/", "equity");
routes.add("/eq", "equity");