gulp = require('gulp')
plumber = require('gulp-plumber')
rename = require('gulp-rename')
autoprefixer = require('gulp-autoprefixer')
concat = require('gulp-concat')
uglify = require('gulp-uglify')
imagemin = require('gulp-imagemin')
cache = require('gulp-cache')
cssnano = require('gulp-cssnano')
sass = require('gulp-sass')
browserSync  = require('browser-sync').create()

coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
gutil   = require 'gulp-util'

params =
  scripts :
    src : 'src/scripts/**/*.coffee'
    dist : 'dist/scripts/'
  styles :
    src : 'src/styles/**/*.sass'
    dist : 'dist/styles/'
  images :
    src : 'src/images/**/*'
    dist : 'src/styles/'

sassPaths = [
  'bower_components/foundation-sites/scss'
  'bower_components/motion-ui/src'
  'bower_components/normalize-scss/sass'
  'node_modules/susy/sass' ]

onError = (err) ->
  console.log err.message
  this.emit 'end'

## SCRIPTS

gulp.task 'scripts', ->
  gulp.src params.scripts.src
    .pipe plumber { errorHandler: onError }
    .pipe coffee bare: true
    .pipe gulp.dest params.scripts.dist
    .pipe rename { suffix: '.min' }
    .pipe uglify()
    .pipe gulp.dest params.scripts.dist
    .pipe browserSync.reload { stream: true }

## STYLES

gulp.task 'styles', ->
  gulp.src params.styles.src
    .pipe plumber { errorHandler: onError }
    .pipe sass { includePaths: sassPaths }
    .pipe autoprefixer 'last 2 versions'
    .pipe rename { suffix: '.min' }
    .pipe cssnano()
    .pipe gulp.dest params.styles.dist
    .pipe browserSync.reload { stream: true }

## IMAGES

gulp.task 'images', ->
  gulp.src params.images.src
    .pipe cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe gulp.dest params.images.dist

## DEFAULT

gulp.task 'default', ->
  browserSync.init {
    files: ['{templates}/**/*.twig', '*.yaml', '*.js']
    proxy: 'http://localhost/nurse.media'
  }
  gulp.watch params.styles.src, ['styles']
  gulp.watch params.images.src, ['images']
  gulp.watch params.scripts.src, ['scripts']
