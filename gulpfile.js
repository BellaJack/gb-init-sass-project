const gulp = require("gulp"),
  paths = require("./tasks/gulp/paths"),
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  cssmin = require("gulp-cssnano"),
  prefix = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  browsersync = require("browser-sync").create(),
  sassPath = "./dev/sass/**/*.scss";

sass.compiler = require("node-sass")

function browserSync(done) {
  browsersync.init({
    server: paths.proj_path+"/",
    files: [
      "./"+paths.css_prod_path+"/*.css",
    ],
    port: 3000,
    open: false,
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function updateStyle() {
  return gulp
    .src(sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.css_dev_path))
    .pipe(prefix())
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.css_prod_path))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp
    .watch(sassPath, updateStyle);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
