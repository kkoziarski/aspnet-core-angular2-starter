var gulp = require('gulp');
var config = require('../config')();
var runSequence = require('run-sequence');
var util = require('gulp-util');
var gulpprint = require('gulp-print');

var assetFiles = config.src.assetFiles; //[].concat(config.tsFiles, tsUnitFiles, tsE2EFiles);

gulp.task('rebuild', function (done) {
    runSequence('clean-all', 'copy-libs', 'ts', 'less', 'build-assets', done);
});

gulp.task('build', function (done) {
    runSequence('clean', 'ts', 'less', 'build-assets', done);
});

gulp.task('build-assets', function () {
    var staticFiles = [
        config.src.root + 'favicon.ico',
        config.src.root + 'systemjs.config.js',
        config.src.root + 'index.html'
    ];

    gulp.src(staticFiles, { base: config.src.root })
        .pipe(gulp.dest(config.dest.root))
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Copying static file: " + filepath);
        }));

    copyAssets(assetFiles);    
});

/* Compiles less, creates sourcemaps, creates .css and .min.css */
gulp.task('css-min', ['less'], function () {
    util.log(util.colors.green('CSS minifying (css->min)'));
    // styles to minify as output from less
    var destCssFilesToMinify = [
        config.dest.root + '**/*.css',
        '!' + config.dest.root + '**/*.min.css',
        config.dest.ignoreDestNpmLibs
    ];

    return gulp.src(destCssFilesToMinify, { base: "./src/" })
        .pipe(plumber())
        .pipe(cleanCss({ compatibility: 'ie8', sourceMap: true }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('.'))
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Dest css->min: " + filepath);
        }));
});

/* Watch changed typescripts file and compile it */
gulp.task('watch.assets', function () {
    return gulp.watch(assetFiles, { cwd : config.src.app }, function (file) {
        util.log('Copying asset ' + file.path + '...');
        return copyAssets(file.path, true);
    });
});

function copyAssets(files, watchMode) {
    watchMode = watchMode || false;
    var srcOptions = {};
    //a fix, because it works in different way when ('gulp build', 'gulp rebuild') and 'gulp watch'
    if (watchMode === true) {
        srcOptions.base = config.src.app;     
    }
    else {
        srcOptions.cwd = config.src.app;
    }

    var allFiles =files; //[].concat(files, assetFiles);
    return gulp.src(allFiles, srcOptions)
        .on('error', function () {
            if (watchMode) {
                return;
            }
            process.exit(1);
        })
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Copy assets: " + filepath);
        }))
        .pipe(gulp.dest(config.dest.app));
}

gulp.task('watch', ['watch.ts', 'watch.less', 'watch.assets']);