/**
 * Created by michael.wibmer on 04.02.2015.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
    return gulp.src('./test/**-test.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('lint', function() {
    return gulp.src('./lib/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('dev', ['lint'], function() {
    gulp.watch(['lib/*.js', 'test/*.js'], ['test']);
});