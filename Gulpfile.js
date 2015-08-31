'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('./_sass/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
      .pipe(sass({
        //outputStyle: 'expanded',
        outputStyle: 'compressed',
        includePaths: ['bower_components/foundation/scss']
      })
        .on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./_sass/**/*.{scss,sass}', ['sass']);
});

gulp.task('shell:build', shell.task('bundle exec jekyll build'));

gulp.task('shell:serve', shell.task('bundle exec jekyll serve'));

gulp.task('default', ['build']);

gulp.task('build', ['sass', 'shell:build']);

gulp.task('serve', ['sass', 'watch', 'shell:serve']);
