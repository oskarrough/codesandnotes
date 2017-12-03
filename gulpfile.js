var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var autoprefixer = require('autoprefixer')
var atImport = require('postcss-import')
var browserSync = require('browser-sync').create()
var del = require('del')
var exec = require('child_process').exec
var path = require('path')
var runSequence = require('run-sequence')

// Deletes folders containing compiled output.
gulp.task('clean', () => {
	return del(['.tmp', 'dist'])
})

// Builds all content
gulp.task('hugo', function (callback) {
	return exec('hugo', function (err, stdout, stderr) {
		console.log(stdout)
		console.log(stderr)
		callback(err)
	})
})

// Sass, sourcemaps, postcss-import and autoprefixer
gulp.task('styles', function () {
	return gulp.src(['app/styles/*.scss'])
		.pipe($.sourcemaps.init())
		.pipe($.sass.sync({
			precision: 10,
			includePaths: [
				'.',
				path.join(__dirname, '../node_modules')
			]
		}).on('error', $.sass.logError))
		.pipe($.postcss([
			atImport(),
			autoprefixer()
		]))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('.tmp/styles'))
		.pipe(browserSync.stream())
})

// Scripts
gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('.tmp/scripts/'))
		.pipe(browserSync.stream({once: true}))
})

// Development server
gulp.task('serve', ['hugo', 'styles', 'scripts'], function () {
	browserSync.init({
		notify: false,
		// 'dist' and 'static' are needed because hugo builds all content here
		server: {baseDir: ['.tmp', 'app', 'static', 'dist']}
	})

	// watch for changes
	// gulp.watch([
	// 	// 'app/*.html',
	// 	'app/scripts/**/*.js',
	// 	'app/images/**/*',
	// 	'.tmp/fonts/**/*'
	// ]).on('change', browserSync.reload)

	// watch for changes and run tasks
	gulp.watch(['content/**/*.md', 'app/templates/**/*.html'], ['hugo'])
	gulp.watch('app/styles/**/*', ['styles'])
	gulp.watch('app/scripts/**/*.js', ['scripts'])
})

// shortcut for serve
gulp.task('s', ['serve'])

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
	})
})

// First cleans, then starts the building sequence
gulp.task('build', function (callback) {
	runSequence('clean',
		['hugo', 'styles', 'scripts'],
		'copy-from-tmp',
		['minify-styles', 'minify-templates']
	)
})

// Copies all assets after they are built
gulp.task('copy-from-tmp', function () {
	return gulp.src('.tmp/**/*')
		.pipe(gulp.dest('dist/'))
		.pipe($.size({title: 'build', gzip: true}))
})

gulp.task('minify-templates', () => {
	return gulp.src('dist/**/*.html', {base: 'dist'})
		.pipe($.htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
})

gulp.task('minify-styles', () => {
	return gulp.src('dist/styles/*.css', {base: 'dist'})
		// Don't remove vendor-prefixes.
		.pipe($.cssnano({autoprefixer: false}))
		.pipe(gulp.dest('dist'))
})

