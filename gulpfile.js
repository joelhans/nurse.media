var
  // Modules
  gulp = require('gulp'),
  sass = require('gulp-sass'),

  // Directories
  dir = {
    scss: {
      src: 'source/scss/**/*.scss',
      dest: 'static/css'
    }
  }
;

// SCSS processing

gulp.task('style', function() {

  return gulp.src(dir.scss.src)
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest(dir.scss.dest))

});

// Default (watch) task
gulp.task('default', [], function() {

  gulp.watch(dir.scss.src, ['style']);

});
