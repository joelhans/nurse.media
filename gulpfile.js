var
  // Modules
  gulp        = require('gulp'),
  postcss     = require('gulp-postcss'),
  tailwindcss = require('tailwindcss'),

  // Directories
  dir = {
    css: {
      src: 'source/css/main.css',
      dest: 'static/css/'
    },
    js: {
      src: 'source/js/main.js',
      dest: 'static/js/'
    }
  }
;

// CSS processing
gulp.task('style', function () {
  return gulp.src(dir.css.src)
    .pipe(postcss([
      tailwindcss('./tailwind.js'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest(dir.css.dest));
});

// JS processing
gulp.task('script', function() {
  function createErrorHandler(name) {
    return function (err) {
      console.error('Error from ' + name + ' in compress task', err.toString());
    };
  }
  return gulp.src(dir.js.src)
    // .pipe(uglify())
    // .on('error', createErrorHandler('uglify'))
    .pipe(gulp.dest(dir.js.dest))
    // .pipe(reload({stream: true}))
});

// Default (watch) task
gulp.task('default', [], function() {

  gulp.watch(dir.css.src, ['style']);
  gulp.watch(dir.js.src, ['script']);

});
