var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var browserSync  = require('browser-sync').create();


gulp.task('images', function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('scripts', function(){
  return gulp.src('src/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'));
});

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src',
  'bower_components/normalize-scss/sass',
  'node_modules/susy/sass'
];

gulp.task('styles', function(){
  gulp.src(['src/styles/**/*.sass'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({
      includePaths: sassPaths
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('default', function(){
  browserSync.init({
    files: ['{templates}/**/*.twig', '*.yaml', '*.js'],
    proxy: 'http://localhost/nurse.media'
  });
  gulp.watch(["src/styles/**/*.sass", "src/images/**/*"], ['styles', 'images']);
});
