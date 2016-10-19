var gulp = require('gulp');
var config = require('../config')();

gulp.task("copy-libs", [
    'copy-libs:@angular'
    , 'copy-libs:systemjs'
    , 'copy-libs:angular-in-memory-web-api'
    , 'copy-libs:core-js'
    , 'copy-libs:es6-shim'
    , 'copy-libs:es6-promise'
    , 'copy-libs:rxjs'
    , 'copy-libs:zone-js'
    , 'copy-libs:reflect-metadata'
    , 'copy-libs:bower-components'
]);

gulp.task("copy-libs:systemjs", function () {
    return gulp.src(config.src.npmLibs + '/systemjs/dist/**/*.*', { base: config.src.npmLibs + '/systemjs/dist/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/systemjs/'));
});

gulp.task("copy-libs:es6-shim", function () {
    return gulp.src(config.src.npmLibs + '/es6-shim/es6-sh*', { base: config.src.npmLibs + '/es6-shim/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/es6-shim/'));
});

gulp.task("copy-libs:es6-promise", function () {
    return gulp.src(config.src.npmLibs + '/es6-promise/dist/**/*.*', { base: config.src.npmLibs + '/es6-promise/dist/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/es6-promise/'));
});

gulp.task("copy-libs:core-js", function () {
    return gulp.src(config.src.npmLibs + '/core-js/client/*.min.js', { base: config.src.npmLibs + '/core-js/client/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/core-js/'));
});

gulp.task("copy-libs:angular-in-memory-web-api", function () {
    return gulp.src(config.src.npmLibs + '/angular-in-memory-web-api/*.js', { base: config.src.npmLibs + '/angular-in-memory-web-api/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/angular-in-memory-web-api/'));
});

gulp.task("copy-libs:rxjs", function () {
    return gulp.src(config.src.npmLibs + '/rxjs/**', { base: config.src.npmLibs + '/rxjs/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/rxjs/'));
});

gulp.task("copy-libs:zone-js", function () {
    return gulp.src(config.src.npmLibs + '/zone.js/dist/*.js', { base: config.src.npmLibs + '/zone.js/dist/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/zone.js/'));
});

gulp.task("copy-libs:reflect-metadata", function () {
    return gulp.src(config.src.npmLibs + '/reflect-metadata/*.js', { base: config.src.npmLibs + '/reflect-metadata/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/reflect-metadata/'));
});

gulp.task("copy-libs:@angular", function () {
    return gulp.src(config.src.npmLibs + '/@angular/**/*', { base: config.src.npmLibs + '/@angular/' })
         .pipe(gulp.dest(config.dest.npmLibs + '/@angular/'));
});

gulp.task("copy-libs:bower-components", function () {
    return gulp.src('bower_components' + '/**/*', { base: 'bower_components' + '/' })
         .pipe(gulp.dest(config.dest.npmLibs));
});