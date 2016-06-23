var gulp = require('gulp')
var requireDir = require('require-dir')
requireDir('./gulp')
var runSequence = require('run-sequence').use(gulp)

gulp.task('build', function(cb) {
  runSequence('clean', ['styles', 'scripts', 'wp_functions', 'wp_pages'], cb)
})

gulp.task('default', function(cb) {
  runSequence('build', 'watch', cb)
})