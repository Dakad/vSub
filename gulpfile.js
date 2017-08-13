'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const input = './styles/sass/**/*.scss';
const output ='./dist';
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};


gulp.task('default', ['dev', 'prod']);
 

gulp.task('prod', function () {
  return gulp.src(input)
    .pipe(sass(sassOptions)
      .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});

gulp.task('dev', function () {
  return gulp.src(input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
  gulp.watch(input, ['dev'])
      .on('change', e => console.log(`File ${e.path} was ${e.type}, running tasks...`))
});
