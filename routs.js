module.exports = (server, options) => {
  const hander = require('./hander')
  return [
    {
      method: 'GET',
      path: '/',
      handler: hander.main.hello,
      config: {
        description: 'At the start says hello to user.',
        notes: 'usage : this is the home page.',
        tags: ['hello', 'startpage', 'route']
      }
    }
    {
      method: 'GET',
      path: '/hello/{name}',
      handler: hander.main.helloToYou,
      config: {
        description: 'Says Hello to user by the specified address.',
        notes: 'usage : GET/hellp/{name}',
        tags: ['route', 'method']
      }
    },
    {
      method: 'GET',
      path: '/{name}',
      handler: hander.main.helloToYouFromFile,
      config: {
        description: 'Says hello to user by the loading html file.',
        notes: 'usage : GET/{name}',
        tags: ['view', 'route', 'html']
      }
    }
  ]
}
