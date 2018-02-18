const Main = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: Main.hello,
    config: {
      description: "At the start says hello to user.",
      notes: "usage : this is the home page.",
      tags: ["hello", "startpage", "route"]
    }
  },
  {
    method: "GET",
    path: "/hello/{name}",
    handler: Main.helloToYou,
    config: {
      description: "Says Hello to user by the specified address.",
      notes: "usage : GET/hellp/{name}",
      tags: ["route", "method"]
    }
  },
  {
    method: "GET",
    path: "/{name}",
    handler: Main.helloToYouFromFile,
    config: {
      description: "Says hello to user by the loading html file.",
      notes: "usage : GET/{name}",
      tags: ["view", "route", "html"]
    }
  }
];
module.exports = routes;
