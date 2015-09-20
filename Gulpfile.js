var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var exec = require('child_process').exec;
var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var compression = require('compression');
var rsync = require('rsyncwrapper').rsync;

// Builds all content
gulp.task('hugo', function (cb) {
	return exec('hugo --verbose=true', function (err, stdout, stderr) {
		console.log(stdout); // Hugo output
		console.log(stderr); // Debugging feedback
		cb(err);
	});
});

// Sass, sourcemaps and autoprefixer
gulp.task('styles', function () {
	gulp.src(['app/styles/*.scss'])
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

// Babel and sourcemaps
gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		// .pipe($.concat('main.js'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

// starts a server for development
gulp.task('serve', ['hugo', 'styles', 'scripts'], function () {

	// server, livereload + gzip
	browserSync({
		notify: false,
		server: {
			baseDir: ['.tmp', 'app', 'static', 'dist'], // 'dist' and 'static' are needed because hugo builds all content here
			middleware: compression()
		}
	});

	// watch for changes
	// gulp.watch([
	// 	// 'app/*.html',
	// 	'app/scripts/**/*.js',
	// 	'app/images/**/*',
	// 	'.tmp/fonts/**/*'
	// ]).on('change', reload);

	// watch for changes and run tasks
	gulp.watch(['content/**/*.md', 'app/templates/**/*.html'], ['hugo']);
	gulp.watch('app/styles/**/*', ['styles']); // 'styles' does reload
	gulp.watch('app/scripts/**/*.js', ['scripts', reload]);
});

// shortcut for serve
gulp.task('s', ['serve']);

// 1. first clean
gulp.task('default', ['clean'], function () {
	gulp.start('build-assets');
});

// 2. then build assets
gulp.task('build-assets', ['hugo', 'styles', 'scripts'], function() {
	gulp.start('minify');
});

// 3. then move them (called by minify)
gulp.task('build-move', function() {
	return gulp.src('.tmp/**/*')
		.pipe(gulp.dest('dist'))
		.pipe($.size({ title: 'build', gzip: true }));
});

// 4. then minify
gulp.task('minify', ['build-move'], function() {
  return gulp.src(['dist/styles/*.css', 'dist/scripts/*.js'], { base: 'dist' })
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({ compatibility: '*' })))
    .pipe(gulp.dest('dist'));
});

// Upload dist to dev
gulp.task('deploy-ftp', function() {
	rsync({
		src: 'dist/',
		dest: 'oskarrough@web461.webfaction.com:/home/oskarrough/webapps/codesandnotes_static',
		ssh: true,
		recursive: true
		// deleteAll: true // Careful, this could cause data loss
	}, function(error, stdout, stderr, cmd) {
		if (error) {
			console.log(error.message);
		} else { // success
			console.log('Successfully deployed to codesandnotes.com');
		}
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
