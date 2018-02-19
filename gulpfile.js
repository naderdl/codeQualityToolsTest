const gulp = require("gulp");
const nodemon = require("gulp-nodemon");

gulp.task("default", () => {
  console.log("nothing here");
});
gulp.task("start", () => {
  nodemon({
    script: "src/server.js",
    ext: "js html",
    env: { NODE_ENV: "development" }
  });
});
