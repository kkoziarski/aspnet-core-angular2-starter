var gulp = require('gulp'),
    util = require('gulp-util'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    gulpprint = require('gulp-print'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpprint = require('gulp-print');

var config = require('../config')();

var tsProject = ts.createProject('Frontend/tsconfig.json');
var tsFiles = config.src.tsFiles; //[].concat(config.tsFiles, tsUnitFiles, tsE2EFiles);

// TypeScript compile
gulp.task('ts', ['clean-ts'], function () {
    return compileTs(tsFiles);
});

gulp.task('tslint', function () {
    util.log('Running tslint...');
    
    return gulp.src(tsFiles, { cwd: config.src.app })
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(gulpprint())        
        .pipe(tslint.report({
            summarizeFailureOutput: true,
            emitError: true
        }));
});

/* Watch changed typescripts file and compile it */
gulp.task('watch.ts', function () {
    return gulp.watch(tsFiles, { cwd: config.src.app }, function (file) {
        util.log('Compiling ' + file.path + '...');
        return compileTs(file.path, true);
    });
});

function compileTs(files, watchMode) {
    watchMode = watchMode || false;

    var allFiles = files; //[].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
            cwd: config.src.app,
            outDir: config.dest.app
        })
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(gulpprint())        
        .pipe(tslint.report({
            summarizeFailureOutput: true,
            emitError: false
        }))
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
