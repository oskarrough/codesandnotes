'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Run a command in a shell
var exec = require('child_process').exec;

gulp.task('styles', function () {
	return gulp.src('design/styles/*.scss')
		.pipe($.plumber())
		.pipe($.rubySass({
			style: 'expanded',
			precision: 5,
			bundleExec: true
		}))
		.pipe($.autoprefixer('last 1 version'))
		.pipe($.csso())
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('jshint', function () {
	return gulp.src(['design/scripts/**/*.js', '!design/scripts/vendor/**/*.js'])
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'));
		// .pipe($.jshint.reporter('fail'));
});

gulp.task('images', function () {
	return gulp.src('design/images/**/*')
		// .pipe($.cache($.imagemin({
		// 	progressive: true,
		// 	interlaced: true
		// })))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('extras', function () {
	return gulp.src(['design/*.*', '!design/*.html', '!design/**/*.jade'], { dot: true })
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('connect', function () {
	var serveStatic = require('serve-static');
	var serveIndex = require('serve-index');
	var app = require('connect')()
		.use(require('connect-livereload')({port: 35729}))
		.use(serveStatic('app'))
		.use(serveStatic('.tmp'))
		// paths to bower_components should be relative to the current file
		// e.g. in design/index.html you should use ../bower_components
		.use('/bower_components', serveStatic('bower_components'))
		.use(serveIndex('app'));

	require('http').createServer(app)
		.listen(9000)
		.on('listening', function () {
			console.log('Started connect web server on http://0.0.0.0:9000');
		});
});

gulp.task('serve', ['connect', 'jade', 'styles'], function () {
	require('opn')('http://0.0.0.0:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
	$.livereload.listen();

	// watch for changes
	gulp.watch([
		'design/*.html',
		// '.tmp/*.html',
		'design/templates/*.jade',
		'.tmp/styles/**/*.css',
		'design/scripts/**/*.js',
		'design/images/**/*'
	]).on('change', $.livereload.changed);

	gulp.watch('design/*.jade', ['jade']);
	gulp.watch('design/styles/**/*.scss', ['styles']);
});

gulp.task("middleman:server", function() {
	$.run('bundle exec middleman server --verbose').exec()
});

gulp.task('default', ['clean'], function () {
	gulp.start('build:middleman');
});

gulp.task('build:middleman', ['middleman:templates'], function () {
	gulp.start('build');
});

gulp.task('middleman:templates', function (cb) {
  exec('middleman build', function(err) {
    if (err) return cb(err); //return error
    cb(); // finished task
  });
});

gulp.task('build', ['styles', 'images', 'extras'], function () {
	return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});
