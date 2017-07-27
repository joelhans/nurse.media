// VARIABLES AND SETUP

var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    imagemin      = require('gulp-imagemin'),
    cache         = require('gulp-cache'),
    cssnano       = require('gulp-cssnano'),
    sass          = require('gulp-sass'),
    merge         = require('merge-stream'),
    browserSync   = require('browser-sync').create();

params = {
  'scripts' : {
    'src' : 'src/scripts/**/*.coffee',
    'dist' : 'dist/scripts/'
  },
  'styles' : {
    'src' : 'src/styles/**/*.sass',
    'dist' : 'dist/styles/',
    'vendor' : [
      'node_modules/normalize.css/normalize.css',
      'node_modules/wingcss/dist/wing.css'
    ]
  },
  'images' : {
    'src' : [
      'src/images/**/*',
      '!src/images/**/*.gvdesign',
      '!src/images/old/**/*'
    ],
    'dist' : 'dist/images/'
  }
};

// ERROR HANDLING

onError = function(err) {
  console.log(err.message);
  this.emit('end');
};

// SCRIPTS

// gulp.task 'scripts', ->
//   gulp.src params.scripts.src
//     .pipe plumber { errorHandler: onError }
//     .pipe coffee bare: true
//     .pipe gulp.dest params.scripts.dist
//     .pipe rename { suffix: '.min' }
//     .pipe uglify()
//     .pipe gulp.dest params.scripts.dist
//     .pipe browserSync.reload { stream: true }

// STYLES

gulp.task('styles', function() {
  var sassStream, cssStream;

  sassStream = gulp.src(params.styles.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      errLogToConsole: true
    }))

  cssStream = gulp.src(params.styles.vendor);

  return merge(cssStream, sassStream)
    .pipe(concat('app.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest(params.styles.dist))
    .pipe(browserSync.reload({
      stream: true
    }));

});

// ## IMAGES

gulp.task('images', function() {
  gulp.src(params.images.src)
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: false}]
    })))
    .pipe(gulp.dest(params.images.dist))
});

// DEFAULT

gulp.task('default', function() {
  browserSync.init({
    files: ['{templates}/**/*.twig'],
    proxy: 'http://localhost:5000',
    port: 5001,
    open: false
  });
  gulp.watch(params.styles.src, ['styles']);
  gulp.watch(params.images.src, ['images']);
  // gulp.watch params.scripts.src, ['scripts']
});
