function hello(request, reply) {
  reply('Hello to you my friend.');
}

function helloToYou(request, reply) {
  reply(`Hello, ${encodeURIComponent(request.params.name)} .`);
}

function helloToYouFromFile(request, reply) {
  reply.view('index.html', {
    hello: 'Hello, ',
    name: `${encodeURIComponent(request.params.name)}.`,
  });
}

module.exports = { hello, helloToYou, helloToYouFromFile };
