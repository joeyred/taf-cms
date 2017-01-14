'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({
  rename: {
    'gulp-merge-media-queries': 'mmq'
  }
});
var	browserSync = require('browser-sync').create();
var	sequence    = require('run-sequence');
var	del         = require('del');
var yargs       = require('yargs');
var config      = require('./config.js');

var DEPLOY = Boolean(yargs.argv.production);

/* browserSync */
gulp.task('browserSync', function() {
  return browserSync.init(config.browserSync);
});

/* Clean */
gulp.task('clean', function() {
  return del($.if(DEPLOY, './app', './build'));
});

/* Compile SCSS */
gulp.task('scss', function() {
  return gulp.src('src/assets/scss/app.scss')
	.pipe($.sourcemaps.init())
	.pipe(
    $.sass({
      includePaths: config.scss.paths.src,
      percision:    10
    })
    .on('error', $.sass.logError)
	)
	.pipe(
    $.mmq({
      log: true
    })
  )
	.pipe(
    $.autoprefixer({
      browsers: config.scss.compatability
    })
  )
  .pipe($.pixrem())
  .pipe($.if(DEPLOY, $.cssnano()))
	.pipe($.sourcemaps.write('./'))
	.pipe(
    $.if(DEPLOY,
      gulp.dest(config.scss.paths.dist),
      gulp.dest(config.scss.paths.build)
    )
  )
	.pipe(
    browserSync.stream({ // Inject Styles
    // Force source map exclusion
    // *This fixes reloading issue on each file change*
      match: '**/*.css'
    })
  );
});

/* Handle Icon Font */
gulp.task('icons', function() {
  return gulp.src(config.icons.paths.src)
  .pipe(
    $.if(DEPLOY,
      gulp.dest(config.icons.paths.dist),
      gulp.dest(config.icons.paths.build)
    )
  );
});

/* Handle App JS Files */
gulp.task('angular', function() {
  return gulp.src(config.js.angular.src)
  .pipe(
    $.if(DEPLOY,
      gulp.dest(config.js.angular.dist),
      gulp.dest(config.js.angular.build)
    )
  );
});

gulp.task('angularScripts', function() {
  return gulp.src(config.js.angular.scripts)
  .pipe($.sourcemaps.init())
	.pipe($.concat('app.js'))
  .pipe($.if(DEPLOY, $.uglify()))
	.pipe($.sourcemaps.write('./'))
	.pipe(
    $.if(DEPLOY,
      gulp.dest(config.js.angular.dist),
      gulp.dest(config.js.angular.build)
    )
  );
});

// BrowserSync
gulp.task('browserSyncReload', function(done) {
  browserSync.reload();
  done();
});

// JavaScript
gulp.task('scriptsReload', function(cb) {
  sequence(
    'scripts',
    // 'jekyll',
    'browserSyncReload',
    cb
  );
});

// JavaScript
gulp.task('angularReload', function(cb) {
  sequence(
    'angular',
    'angularScripts',
    'browserSyncReload',
    cb
  );
});

/**
 * Watch Task
 */
gulp.task('watch', function() {
  // Watch SCSS
  gulp.watch(['src/assets/scss/**/*.scss', 'src/assets/scss/components/*.scss'], ['scss']);
  // Watch JS
  gulp.watch('src/assets/js/**/*.js', ['scriptsReload']);
  gulp.watch('src/app/**/*', ['angularReload']);
});

gulp.task('default', function(cb) {
  sequence(
    'clean',
    ['scss', 'icons', 'angular', 'angularScripts'],
    'browserSync',
    'watch',
    cb
  );
});
