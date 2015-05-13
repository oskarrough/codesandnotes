var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var exec = require('child_process').exec;
var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var compression = require('compression');

// Builds all content
gulp.task('hugo', function (cb) {
	return exec('hugo --verbose=true', function (err, stdout, stderr) {
		console.log(stdout); // Hugo output
		console.log(stderr); // Debugging feedback
		cb(err);
	});
});

// Deploys whatever is in `dist` to dev domain
// (as specified in app/static/CNAME)
gulp.task('deploy', function (cb) {
	exec('surge dist', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

// Sass, sourcemaps and autoprefixer
gulp.task('styles', function () {
	return gulp.src('app/styles/*.scss')
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.sass({
			outputStyle: 'expanded',
			precision: 10,
			includePaths: ['.'],
		}).on('error', plugin.sass.logError))
		.pipe(plugin.postcss([
			autoprefixer({ browsers: ['last 2 version', 'android 4', 'ios 7', 'ie 10']})
		]))
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/styles'))
		.pipe(plugin.filter('**/*.css'))
		.pipe(reload({ stream: true }));
});

// Babel and sourcemaps
gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.babel())
		// .pipe(plugin.concat('main.js'))
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

// starts a server for development
gulp.task('serve', ['hugo', 'styles', 'scripts'], function () {

	// server, livereload + gzip
	browserSync({
		server: {
			baseDir: ['.tmp', 'app', 'static', 'dist'],
			middleware: compression()
		}
	});

	// watch for changes and run tasks
	gulp.watch('content/**/*.md', ['hugo', reload]);
	gulp.watch('app/layouts/**/*.html', ['hugo', reload]);
	gulp.watch('app/scripts/**/*.js', ['scripts', reload]);
	gulp.watch('app/styles/**/*.scss', ['styles']); // 'styles' does reload
});

// shortcut for serve
gulp.task('s', ['serve']);

// this builds content, styles and scripts
gulp.task('build', ['hugo', 'styles', 'scripts'], function() {
	return gulp.src('.tmp/**/*')
		.pipe(gulp.dest('dist'))
		.pipe(plugin.size({ title: 'build', gzip: true }));
});

// cleans, then builds - use this
gulp.task('default', ['clean'], function () {
	gulp.start('build');
});
