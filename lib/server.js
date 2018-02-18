const Hapi = require("hapi");
const Hoek = require("hoek");
const routes = require("./routes");
const Vision = require("vision");
const Inert = require("inert");
const Lout = require("lout");
const Handlebars = require("handlebars");

const server = new Hapi.Server();

server.connection({
  port: 8080,
  host: "localhost"
});

server.register([Vision, Inert, Lout], err => {
  Hoek.assert(!err, err);
  server.views({
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname,
    path: "./"
  });
});
server.route(routes);

server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});