var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var exec = require('child_process').exec;
var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var compression = require('compression');
var remarkable = require('gulp-remarkable'); // this doesn't seem to work with gulp-load-plugins
// var header = require('gulp-header');
var toc = require('gulp-toc');

gulp.task('markdown', function() {
	return gulp.src('content/**/*.md')

		// convert to html
		.pipe(remarkable({
			preset: 'commonmark',
			typographer: true
		}))

		// insert toc
		.pipe($.insert.prepend('<!-- toc -->\n'))
		.pipe(toc())

		// wrap layout
		.pipe($.wrap({ src: 'app/templates/layout.html' }))
		.pipe(gulp.dest('.tmp'));
});

gulp.task('html', function() {
	return gulp.src('app/*.html')
		.pipe($.wrap({ src: 'app/templates/layout.html' }))
		.pipe(gulp.dest('.tmp'));
});

// http://emberjs.jsbin.com/nakukoweme/1/edit?html,output
gulp.task('tree', function () {
	return gulp.src('content/**/*.md')
		.pipe($.fileTree())
		// .pipe($.rename({
		// 	extname: '.jade'
		// }))
		.pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
	return gulp.src('app/styles/*.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			outputStyle: 'expanded',
			precision: 10,
			includePaths: ['.'],
		}).on('error', $.sass.logError))
		.pipe($.postcss([
			autoprefixer({ browsers: ['last 2 version', 'android 4', 'ios 7', 'ie 10']})
		]))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/styles'))
		.pipe($.filter('**/*.css')) // Filtering stream to only css files. Needed for browser-sync css injection
		.pipe(reload({ stream: true }));
});

gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		// .pipe($.concat('main.js'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/scripts/'));
});

// moves images to dist (no optimization because I do it manually)
gulp.task('images', function () {
	return gulp.src('app/images/**/*')
		.pipe($.cache())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

// starts a server for development
gulp.task('serve', ['html', 'markdown', 'styles', 'scripts'], function () {
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir: ['.tmp', 'app'],
			routes: {
				'/bower_components': 'bower_components'
			},
			middleware: compression()
		}
	});

	// watch for changes and run tasks
	gulp.watch(['app/*.html', 'app/templates/*.html'], ['html', reload]);
	gulp.watch('content/**/*.md', ['markdown', reload]);
	gulp.watch('app/scripts/**/*.js', ['scripts', reload]);
	gulp.watch('app/styles/**/*.scss', ['styles']); // 'styles' does reload
});

// shortcut for serve
gulp.task('s', ['serve']);

gulp.task('build', ['markdown', 'styles', 'scripts'], function() {
	return gulp.src('.tmp/**/*')
		.pipe(gulp.dest('dist'))
		.pipe($.size({ title: 'build', gzip: true }));
});

gulp.task('default', ['clean'], function () {
	gulp.start('build');
});
