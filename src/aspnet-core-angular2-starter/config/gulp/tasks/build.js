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

/* Watch changed typescripts file and compile it */
gulp.task('watch.assets', function () {
    return gulp.watch(assetFiles, function (file) {
        util.log('Copying asset ' + file.path + '...');
        return copyAssets(file.path, true);
    });
});

function copyAssets(files, watchMode) {
    watchMode = watchMode || false;

    var allFiles = [].concat(files, assetFiles);
    return gulp.src(allFiles, { base: config.src.app })
        .on('error', function () {
            if (watchMode) {
                return;
            }
            process.exit(1);
        })
        .pipe(gulp.dest(config.dest.app));
}

gulp.task('watch', ['watch.ts', 'watch.less', 'watch.assets']);