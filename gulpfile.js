var srcPath = './src'
var buildPath = './build'
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var del = require('del');


var sourceFiles = {
  js: 'src/assets/js/*.js',
  scss: 'src/assets/scss/*.scss',
  html: 'src/*.html',
  meta: ['src/robots.txt', 'src/favicon.ico']
}

var buildTargets = {
  js: 'build/assets/js',
  css: 'build/assets/css',
  html: 'build',
  meta: 'build'
}

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('sass', function() {
  return gulp.src(sourceFiles.scss)
    .pipe(plumber({ errorHandler: notify.onError("Error <%= error.message %>")}))
    .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(buildTargets.css))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src(sourceFiles.js)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(buildTargets.js));
});

gulp.task('html', function() {
  return gulp.src(sourceFiles.html)
    .pipe(gulp.dest(buildTargets.html));
});

gulp.task('meta', function() {
  return gulp.src(sourceFiles.meta)
    .pipe(gulp.dest(buildTargets.meta));
});


gulp.task('build', ['clean','sass','js','html','meta']);

gulp.task('serve', ['sass','js','html'], function() {
  browserSync.init({
    server: 'build',
    notify: false
  });

  gulp.watch(sourceFiles.scss, ['sass']);
  gulp.watch(sourceFiles.js, ['js']);
  gulp.watch(sourceFiles.html, ['html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
