var gulp = require("gulp"),
  path = require("path"),
  paths = require("./task/gulp/paths"),
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  cssmin = require("gulp-cssnano"),
  prefix = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  sassPath = path.join(paths.sass_path, "**/*.scss");

sass.compiler = require("node-sass");

gulp.task("GB::update::style", () => {
  return gulp
    .src(sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.css_dev_path))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.css_prod_path));
});

gulp.task("GB::sass::watch", () => {
  gulp
    .watch(sassPath, ["GB::update::style"])
    .on("error", (error) => {
      console.log(error);
    })
    .on("change", (event) => {
      console.log("\n\tFile " + event.path + " was " + event.type + "\n");
    });
});
