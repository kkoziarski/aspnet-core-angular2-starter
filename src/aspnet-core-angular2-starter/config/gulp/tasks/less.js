var gulp = require('gulp');
var config = require('../config')();
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css'); // minify css
var rename = require('gulp-rename');
var plumber = require('gulp-plumber'); // error handling plugin
var autoprefixer = require('gulp-autoprefixer');
var gulpprint = require('gulp-print');
var util = require('gulp-util');

// styles to minify as output from less
var destCssFilesToMinify = [
    config.dest.root + '**/*.css',
    '!' + config.dest.root + '**/*.min.css',
    config.dest.ignoreDestNpmLibs
];

/* Compiles less, creates sourcemaps, creates .css */
gulp.task('less:compile', ['clean-styles'], function () {
    util.log(util.colors.green('Running Less to CSS conversion (less->css)'));
    return gulp.src(config.src.lessFiles, { base: config.src.root })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
		.pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest.root))
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Dest less->css: " + filepath);
        }));
});

/* Compiles less, creates sourcemaps, creates .css and .min.css */
gulp.task('less', ['clean-styles', 'less:compile'], function () {
    util.log(util.colors.green('CSS minifying (css->min)'));
    return gulp.src(destCssFilesToMinify, { base: "./" })
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

gulp.task('watch.less', function () {
    gulp.watch(config.src.lessFiles, ['less']);
});