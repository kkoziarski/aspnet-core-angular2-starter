var gulp = require('gulp');
var util = require('gulp-util');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var gulpprint = require('gulp-print');
var config = require('../config')();

var tsProject = ts.createProject('Frontend/tsconfig.json');

var tsFiles = config.src.tsFiles; //[].concat(config.tsFiles, tsUnitFiles, tsE2EFiles);

// TypeScript compile
gulp.task('ts', ['clean-ts'], function () {
    return compileTs(tsFiles);
});

/* Watch changed typescripts file and compile it */
gulp.task('watch.ts', function () {
    return gulp.watch(tsFiles, function (file) {
        util.log('Compiling ' + file.path + '...');
        return compileTs(file.path, true);
    });
});

function compileTs(files, watchMode) {
    watchMode = watchMode || false;

    var allFiles = files; //[].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
            base: config.src.app,
            outDir: config.dest.app
        })
        // .pipe(tslint({
        //     formatter: 'verbose'
        // }))
        // .pipe(tslint.report())
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .on('error', function () {
            if (watchMode) {
                return;
            }
            process.exit(1);
        });
    return res.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest.app));
}
