'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('default', function () {
  return gulp.src('./styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('watch', function () {
  gulp.watch('./styles/sass/**/*.scss', ['default']);
  return gulp.src('./styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
