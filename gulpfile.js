'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('test', function() {
    return gulp.src('test/index.js')
        .pipe($.mocha());
});

gulp.task('watch', function() {
    gulp.watch('./**/*.js', ['test']);
});
