var gulp = require('gulp');
var config = require('../config')();
var clean = require('gulp-clean');
var gulpprint = require('gulp-print');
var util = require('gulp-util');

gulp.task('clean-all', ["clean-libs"], function() {
    var files = [
        config.dest.webroot + 'favicon.ico'
    ];
    return gulp.src(files, { base: config.dest.webroot })
        .pipe(clean())
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Removing file in webroot: " + filepath);
        }));
});

// Delete the libs directory
gulp.task('clean-libs', function() {
    return gulp.src(config.dest.npmLibs)
        .pipe(clean())
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Cleanup libs: " + filepath);
        }));
});