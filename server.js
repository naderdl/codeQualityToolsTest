const Path = require('path')
const Hapi = require('hapi')
const Hoek = require('hoek')
const routes = require('./route')
const registerations = [
  require('vision'),
  require('inert'),
  require('lout')
]
const server = new Hapi.Server()

server.connection({
  port: 8080,
  host: 'localhost'
})

server.register(registerations, (err) => {
  Hoek.assert(!err, err)
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './'
  })
})

server.route(routes)

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`);
})
