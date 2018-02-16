module.exports = (server, options) => {
  return {
    main: {
       hello (request, reply) {
        reply("Hello to you my friend.")
      },
      helloToYou (request, reply) {
        reply(`Hello, ${encodeURIComponent(request.params.name)} .`)
      },
      helloToYouFromFile (request, reply) {
        reply.view('index.html', {
          hello: 'Hello, ',
          name: `${encodeURIComponent(request.params.name)}.`
        })
      }
    }
  }
}
