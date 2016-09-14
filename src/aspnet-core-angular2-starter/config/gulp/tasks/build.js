var gulp = require('gulp');
var config = require('../config')();
var runSequence = require('run-sequence');
var util = require('gulp-util');

var assetFiles = config.src.assetFiles; //[].concat(config.tsFiles, tsUnitFiles, tsE2EFiles);

gulp.task('rebuild', function (done) {
    runSequence('clean-all', 'copy-libs', 'ts', 'less', 'build-assets', done);
});

gulp.task('build', function (done) {
    runSequence('clean', 'ts', 'less', 'build-assets', done);
});

gulp.task('build-assets', function () {
    // copy config.src.app + '**/*.html' --> dest(config.dest.app)
    // copy config.src.root + 'styles/**/*.css' --> dest(config.dest.assets.styles)
    // copy config.src.root + 'images/**/*.* --> dest(config.dest.app.assets.images)
    //     runSequence('clean', ['less'/*, 'fonts'*/], function () {
        
    // gulp.src(config.src.root + 'favicon.ico')
    //    .pipe(gulp.dest(config.dest.webroot))
    //    .on('finish', done);
    // });

    gulp.src(config.src.root + 'favicon.ico')
        .pipe(gulp.dest(config.dest.webroot));
    // gulp.src(config.src.app +  '**/*.html')
    //     .pipe(gulp.dest(config.dest.app));
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