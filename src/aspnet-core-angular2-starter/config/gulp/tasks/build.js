var gulp = require('gulp');
var config = require('../config')();
var runSequence = require('run-sequence');

gulp.task('rebuild', function (done) {
    runSequence('clean-all', 'copy-libs', 'ts', 'less', 'build-assets', done);
});

gulp.task('build-app', function (done) {
    runSequence('clean', 'ts', 'less', 'build-assets', done);
});

gulp.task('build-assets', function () {
    // copy config.src.app + '**/*.html' --> dest(config.dest.app)
    // copy config.src.root + 'styles/**/*.css' --> dest(config.dest.assets.styles)
    // copy config.src.root + 'images/**/*.* --> dest(config.dest.app.assets.images)

    gulp.src(config.src.root + 'favicon.ico')
        .pipe(gulp.dest(config.dest.webroot));
});

gulp.task('watch', ['watch.ts', 'watch.less']);

// gulp.task('build-assets', function (done) {
//     runSequence('clean', ['less'/*, 'fonts'*/], function () {
    
//         gulp.src(config.src.root + 'favicon.ico')
//             .pipe(gulp.dest(config.dest.webroot))
//             .on('finish', done);
//     });
// });