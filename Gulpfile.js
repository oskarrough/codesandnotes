// Before using, we have to require gulp itself
var gulp = require('gulp');

// Automatically require all dependencies listed in package.json that start with "gulp-"
// Example: gulp-minify-css turns into plugins.minifyCss()
var plugins = require('gulp-load-plugins')();

// Clean
gulp.task('clean', function () {
	return gulp.src(['dist'], {read: false})
		.pipe(plugins.clean());
});

// Styles
gulp.task('styles', function() {
	return gulp.src('design/styles/codesandnotes.scss')
		.pipe(plugins.sass())
		.pipe(plugins.autoprefixer('last 2 versions'))
		// .pipe(plugins.csso())
		.pipe(gulp.dest('design/styles/'));
});

// Default task
gulp.task('default', ['clean'], function() {
	return gulp.start('styles');
});

// Watch task
gulp.task('watch', function() {
	gulp.watch('design/styles/*.scss', ['styles']);
});
