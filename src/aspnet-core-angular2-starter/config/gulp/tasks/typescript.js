var gulp = require('gulp');
var util = require('gulp-util');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var gulpprint = require('gulp-print');
var config = require('../config')();

/*
gulp-typescript: ts(tsProject) has been deprecated - use .pipe(tsProject(reporter)) instead
  As of gulp-typescript 3.0, .pipe(ts(tsProject)) should be written as .pipe(tsProject()).
  More information: http://dev.ivogabe.com/gulp-typescript-3/
*/

var tsProject = ts.createProject('Frontend/tsconfig.json');
// /* Initialize TS Project */
var typingFiles = [
    'Frontend/typings/index.d.ts'
    // config.src + 'manual_typings/**/*.d.ts'
];
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

    var allFiles = [].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
            base: config.src.app,
            outDir: config.dest.app
        })
        // .pipe(tslint({
        //     formatter: 'verbose'
        // }))
        // .pipe(tslint.report())
        .pipe(sourcemaps.init())
        //.pipe(ts(tsProject))
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

// gulp.task('tsc-app', ['clean-ts-app', 'env'], function () {
//     return compileTs(config.tsFiles);
// });

// // TypeScript compile
// // ts - simple non-config - task to transpile TypeScript files to JavaScript using Gulp-TypeScript 
// var tscConfig = require('../../../tsconfig.json');
// gulp.task('ts', function () {
//     return tsProject.src()
//         .pipe(sourcemaps.init()) 
//         .pipe(ts(tsProject))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(config.dest.app))
//         // .pipe(gulp.dest(tscConfig.compilerOptions.outDir))
//         .pipe(gulpprint(function (filepath) {
//             return util.colors.green("Compiling: " + filepath);
//         }));
// });
// gulp.task('x-watch.ts', function() {
//     return gulp.watch(tsFiles, ['ts']);
// });
