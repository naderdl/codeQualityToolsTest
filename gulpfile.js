const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const eslint = require("gulp-eslint");

gulp.task("default", () => {
  console.log("nothing here");
});
gulp.task("start", () => {
  nodemon({
    script: "build/server.js",
    ext: "js html",
    env: { NODE_ENV: "development" }
  });
});
gulp.task("lint", () =>
  gulp
    .src(["src/*.js", "!node_modules/**"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);
