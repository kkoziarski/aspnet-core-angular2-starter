var gulp = require('gulp');
var config = require('../config')();
var clean = require('gulp-clean');
var del = require('del');
var gulpprint = require('gulp-print');
var util = require('gulp-util');

//remove ./wwwroot content except /libs
gulp.task('clean', function(cb) {
    return del([
        config.dest.root + '**/*',
        '!' + config.dest.root + 'libs',
        '!' + config.dest.npmLibs,
        config.dest.ignoreDestNpmLibs
    ], { force: true }, cb)
    .then(paths => {
        util.log(util.colors.green('Deleted files and folders in webroot'));
        util.log(util.colors.magenta(paths.join('\n')));
    });
});

//remove ./wwwroot
gulp.task('clean-all', function() {
    return gulp.src(config.dest.root)
        .pipe(clean({force: true}))
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
        .pipe(clean({force: true}))
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Cleanup app: " + filepath);
        }));
});

// Delete the styles directory
gulp.task('clean-styles', function() {
    return gulp.src(config.dest.assets.styles)
        .pipe(clean({force: true}))
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Cleanup styles: " + filepath);
        }));
});

// Delete the libs directory
gulp.task('clean-libs', function() {
    return gulp.src(config.dest.npmLibs)
        .pipe(clean({force: true}))
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Cleanup libs: " + filepath);
        }));
});

// Private functions 
function log(message) {
    return util.log(util.colors.green(message));
}