var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./config/gulp/tasks'),
    taskListing = require('gulp-task-listing');
    
/* Default task */
gulp.task('default', ['help']);

//don't show all tasks
gulp.task('help', taskListing.withFilters(null, function(task) {
    var exclude = task.indexOf('copy-libs:') > -1 || task.indexOf("x-") > -1; 
    return exclude;
}));