var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var exec = require('child_process').exec;
var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var compression = require('compression');
var matter = require('jade-var-matter');


// Styles with Libsass
gulp.task('styles', function () {
	return gulp.src('app/styles/*.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			outputStyle: 'nested',
			precision: 10,
			includePaths: ['.'],
			require: 'susy',
			onError: function(err) {
				$.notify().write(err);
				// console.error.bind(console, 'Sass error:')
			}
		}))
		.pipe($.postcss([
			autoprefixer({ browsers: ['last 2 version', 'android 4', 'ios 7', 'ie 10']})
		]))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/styles'))
		.pipe($.filter('**/*.css')) // Filtering stream to only css files. Needed for browser-sync css injection
		.pipe(reload({stream: true}));
});

// Lint all scripts except those inside scripts/vendor
gulp.task('jshint', function () {
	return gulp.src(['app/scripts/**/*.js', '!app/scripts/vendor/**/*.js'])
		.pipe(reload({stream: true, once: true}))
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Compile .jade into .html in the .tmp dir
// gulp.task('views', function () {
// 	return gulp.src('app/*.jade')
// 		.pipe($.jade({pretty: true}))
// 		.on('error', $.notify.onError(function (error) {
// 			return 'An error occurred while compiling jade.\nLook in the console for details.\n' + error;
// 		}))
// 		.pipe(gulp.dest('.tmp'));
// });

gulp.task('views', function() {
	return gulp.src([
		'app/templates/**/*.jade',
		'!app/templates/partials/**/*.jade'
	])
		/* the jade file can define title or order; put those at file.data */
		.pipe($.data(function(file) { return matter(String(file.contents)); }))
		.pipe($.nav())
		.pipe($.jade({ pretty: true }))
		.pipe(gulp.dest('.tmp'));
});

gulp.task('html', ['views', 'styles'], function () {
	var assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});
	return gulp.src(['.tmp/*.html'])
		.pipe(assets)
		.pipe($.if('*.js', $.uglify()))
		.pipe($.if('*.css', $.csso()))
		.pipe(assets.restore())
		.pipe($.useref())
		.pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
	return gulp.src('app/images/**/*')
		.pipe($.cache())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('extras', function () {
	return gulp.src([
		'app/*.*',
		'!app/*.html',
		'!app/*.jade'
	], {
		dot: true
	}).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('s', ['serve']);
gulp.task('serve', ['views', 'styles'], function () {
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

	// watch for changes
	gulp.watch([
		// 'app/*.html',
		'app/scripts/**/*.js',
		'app/images/**/*'
	]).on('change', reload);

	gulp.watch('app/templates/**/*.jade', ['views', reload]);
	gulp.watch('app/styles/**/*.scss', ['styles']);
});

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
	return gulp.src('dist/**/*')
		.pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
	gulp.start('build');
});
