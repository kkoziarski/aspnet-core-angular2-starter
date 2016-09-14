var gulp = require('gulp');
var config = require('../config')();
var clean = require('gulp-clean');
var gulpprint = require('gulp-print');
var util = require('gulp-util');

//gulp.task('clean', ["clean-ts", "clean-styles"]);

//remove ./wwwroot
gulp.task('clean', function() {
    var srcFiles = [
        config.dest.root + '**',
        config.dest.ignoreDestnpmLibs
    ];

    return gulp.src(srcFiles)
        .pipe(clean())
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Removing file in webroot: " + filepath);
        }));
});

//remove ./wwwroot
gulp.task('clean-all', function() {
    return gulp.src(config.dest.root)
        .pipe(clean())
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Removing all files in webroot: " + filepath);
        }));
});

// Delete the app directory
gulp.task('clean-ts', function() {
    var srcFiles = [
        config.dest.app + '**/*.js',
        config.dest.app + '**/*.js.map'
    ];

    return gulp.src(srcFiles)
        .pipe(clean())
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Cleanup app: " + filepath);
        }));
});

// Delete the styles directory
gulp.task('clean-styles', function() {
    return gulp.src(config.dest.assets.styles)
        .pipe(clean())
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Cleanup styles: " + filepath);
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