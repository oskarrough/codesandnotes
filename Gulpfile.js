var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var exec = require('child_process').exec;
var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var compression = require('compression');
// var remarkable = require('gulp-remarkable'); // this doesn't seem to work with gulp-load-plugins
// var header = require('gulp-header');

var base = 'app/';

// Builds all content
gulp.task('hugo', function (cb) {
	return exec('hugo --verbose=true', function (err, stdout, stderr) {
		console.log(stdout); // Hugo output
		console.log(stderr); // Debugging feedback
		cb(err);
	});
});

// Builds and deploys to dev domain
// (as specified in app/static/CNAME)
gulp.task('deploy', ['default'], function (cb) {
	exec('surge dist', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

// Sass, sourcemaps and autoprefixer
gulp.task('styles', function () {
	return gulp.src(base + 'styles/*.scss')
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
		.pipe($.filter('**/*.css'))
		.pipe(reload({ stream: true }));
});

gulp.task('scripts', function () {
	return gulp.src(base + 'scripts/**/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		// .pipe($.concat('main.js'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

// starts a server for development
gulp.task('serve', ['hugo', 'styles', 'scripts'], function () {
	browserSync({
		server: {
			baseDir: ['.tmp', 'app', 'dist'],
			middleware: compression()
		}
	});

	// watch for changes and run tasks
	// gulp.watch(['app/*.html', 'app/templates/*.html'], ['html', reload]);
	gulp.watch('content/**/*.md', ['hugo', reload]);
	gulp.watch(base + 'layouts/**/*.html', ['hugo', reload]);
	gulp.watch(base + 'scripts/**/*.js', ['scripts', reload]);
	gulp.watch(base + 'styles/**/*.scss', ['styles']); // 'styles' does reload
});

// shortcut for serve
gulp.task('s', ['serve']);

// this builds content, styles and scripts
gulp.task('build', ['hugo', 'styles', 'scripts'], function() {
	return gulp.src('.tmp/**/*')
		.pipe(gulp.dest('dist'))
		.pipe($.size({ title: 'build', gzip: true }));
});

// cleans, then builds - use this
gulp.task('default', ['clean'], function () {
	gulp.start('build');
});

// gulp.task('markdown', function() {
// 	return gulp.src('content/**/*.md')

// 		// convert to html
// 		.pipe(remarkable({
// 			preset: 'commonmark',
// 			typographer: true
// 		}))

// 		// insert toc
// 		.pipe($.insert.prepend('<!-- toc -->\n'))
// 		.pipe(toc())

// 		// wrap layout
// 		.pipe($.wrap({ src: 'app/templates/layout.html' }))
// 		.pipe(gulp.dest('.tmp'));
// });
//

// gulp.task('minify-css', ['styles'], function() {
//   return gulp.src(dist.assets)
//     .pipe(plugins.minifyCss())
//     .pipe(gulp.dest(dist.assets))
// })

// gulp.task('minify-js', ['js'], function() {
//   return gulp.src(dist.assets)
//     .pipe(plugins.uglify())
//     .pipe(gulp.dest(dist.assets))
// })

// Continously builds all content and starts a server
// gulp.task('hugo:server', function (cb) {
// 	exec('hugo server --watch --config=./app/config.yaml --source=./app', function (err, stdout, stderr) {
// 		console.log(stdout);
// 		console.log(stderr);
// 		cb(err);
// 	});
// });
