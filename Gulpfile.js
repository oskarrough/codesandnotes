'use strict';

// Load gulp and all gulp plugins automatically
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Clean
gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

// Compile SCSS to CSS
gulp.task('styles', function() {
	return gulp.src('design/styles/*.scss')
		.pipe($.sass())
		.pipe($.autoprefixer('last 1 versions'))
		// .pipe($.csso())
		.pipe(gulp.dest('design/styles'));
});

// Default task
gulp.task('default', ['clean'], function() {
	return gulp.start('styles');
});

// Watch task
gulp.task('watch', function() {
	gulp.watch('design/styles/*.scss', ['styles']);
});
