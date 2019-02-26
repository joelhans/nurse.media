var
  // Modules
  gulp        = require('gulp'),
  plumber     = require('gulp-plumber'),
  postcss     = require('gulp-postcss'),
  tailwindcss = require('tailwindcss'),
  cssimport   = require('postcss-import'),
  cssnext     = require('postcss-cssnext'),
  cssnano     = require('gulp-cssnano'),
  imagemin    = require('gulp-imagemin'),
  uglify      = require('gulp-uglify'),

  // Directories
  dir = {
    css: {
      files: 'source/css/**/*.css',
      src: 'source/css/main.css',
      dest: 'static/css/'
    },
    js: {
      src: 'source/js/main.js',
      dest: 'static/js/'
    },
    img: {
      src: 'source/img/**/**.*',
      dest: 'static/img/'
    }
  }
;

// CSS processing
gulp.task('style', function () {
  var plugins = [
    cssimport(),
    tailwindcss('./tailwind.js'),
    cssnext(),
  ];
  return gulp.src(dir.css.src)
    .pipe(plumber())
    .pipe(postcss(plugins))
    .pipe(cssnano())
    .pipe(gulp.dest(dir.css.dest))
});

// JS processing
gulp.task('script', function() {
  return gulp.src(dir.js.src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(dir.js.dest))
});

gulp.task('image', function () {
  return gulp.src(dir.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(dir.img.dest));
});

// Default (watch) task
gulp.task('default', [], function() {

  gulp.watch(dir.css.files, ['style']);
  gulp.watch(dir.js.src, ['script']);
  gulp.watch(dir.img.src, ['image']);

});
