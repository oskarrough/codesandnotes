var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var exec = require('child_process').exec;
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var rsync = require('rsyncwrapper').rsync;
var del = require('del');
var runSequence = require('run-sequence');
var path = require('path');
const atImport = require('postcss-import');

// Deletes the two folders containing compiled output.
gulp.task('clean', () => {
	return del(['.tmp', 'dist']);
});

// Builds all content
gulp.task('hugo', function (callback) {
	return exec('hugo --verbose=true', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		callback(err);
	});
});

// gulp.task('hugo', $.shell.task(['hugo']));

// Sass, sourcemaps and autoprefixer
gulp.task('styles', function () {
	gulp.src(['app/styles/*.scss'])
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			outputStyle: 'expanded',
			precision: 10,
			includePaths: [
				'.',
				path.join(__dirname, '../node_modules'),
				path.join(__dirname, '../bower_components')
			]
		}).on('error', $.sass.logError))
		.pipe($.postcss([
			atImport(),
			autoprefixer({browsers: ['last 2 versions']})
		]))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('.tmp/styles'))
		.pipe(browserSync.stream());
});

// Babel and sourcemaps
gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		// .pipe($.concat('codesandnotes.js'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/scripts/'))
		.pipe(browserSync.stream({once: true}));
});

// Development server
gulp.task('serve', ['hugo', 'styles', 'scripts'], function () {
	browserSync.init({
		notify: false,
		// 'dist' and 'static' are needed because hugo builds all content here
		server: {baseDir: ['.tmp', 'app', 'static', 'dist']}
	});

	// watch for changes
	// gulp.watch([
	// 	// 'app/*.html',
	// 	'app/scripts/**/*.js',
	// 	'app/images/**/*',
	// 	'.tmp/fonts/**/*'
	// ]).on('change', browserSync.reload);

	// watch for changes and run tasks
	gulp.watch(['content/**/*.md', 'app/templates/**/*.html'], ['hugo']);
	gulp.watch('app/styles/**/*', ['styles']);
	gulp.watch('app/scripts/**/*.js', ['scripts']);
});

// shortcut for serve
gulp.task('s', ['serve']);

/**
 * Starts a server from the `dist` folder, which is
 * useful for testing `gulp build`.
 */
gulp.task('serve:dist', () => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: ['dist']
		}
	});
});

// First cleans, then starts the building sequence
gulp.task('build', function (callback) {
	runSequence(
		'clean',
		// ['hugo', 'styles', 'scripts'],
		['styles'],
		'copyAssets',
		// 'minify',
		callback);
});

// Copies all assets after they are built
gulp.task('copyAssets', function () {
	return gulp.src('.tmp/**/*')
		.pipe(gulp.dest('dist/'))
		.pipe($.size({title: 'build', gzip: true}));
});

// 4. then minify
gulp.task('minify', function () {
	return gulp.src(['dist/styles/*.css', 'dist/scripts/*.js'], {base: 'dist'})
		.pipe($.if('*.js', $.uglify()))
		.pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
		.pipe(gulp.dest('dist'));
});

// Upload dist to dev
gulp.task('deploy', function () {
	rsync({
		src: 'dist/',
		dest: 'oskarrough@wf-139-162-206-154.webfaction.com:/home/oskarrough/webapps/codesandnotes_static',
		ssh: true,
		recursive: true
	}, function (error) {
		if (error) {
			console.log(error.message);
		} else {
			console.log('Successfully deployed to codesandnotes.com');
		}
	});
});

// Deploys whatever is in `dist` to dev domain
// (as specified in app/static/CNAME)
gulp.task('deploy-dev', function (callback) {
	exec('surge dist', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		callback(err);
	});
});
