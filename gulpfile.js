const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const autoprefixer = require('autoprefixer')
const atImport = require('postcss-import')
const browserSync = require('browser-sync').create()
const del = require('del')
const exec = require('child_process').exec
const path = require('path')

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

// Development server
gulp.task('serve', gulp.series('styles', 'hugo', function () {
	// watch for changes and run tasks
	gulp.watch(['content/**/*.md', 'app/templates/**/*.html']).on('change',  gulp.series('hugo'))
	gulp.watch('app/styles/**/*', gulp.series('styles'))

	browserSync.init({
		notify: false,
		// 'dist' and 'static' are needed because hugo builds all content here
		server: {baseDir: ['.tmp', 'app', 'static', 'dist']}
	})
}))

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

// First cleans, then starts the building sequence
gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('hugo', 'styles'),
	'copy-from-tmp',
	gulp.parallel('minify-styles', 'minify-templates')
))

