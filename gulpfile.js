'use strict';

var gulp = require('gulp'); // Gulp
var minifyCSS = require('gulp-clean-css'); // CSS
var imagemin = require('gulp-imagemin'); // Optimize Image

// CSS Task
// Minify
gulp.task('minify-css', function(){
  gulp.src('./css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))

});

// Image Task
// Compress
gulp.task('compress-image', function(){
	gulp.src([
			  'views/images/*',
			  'img/*'
			 ])
		.pipe(imagemin([
    		  imagemin.gifsicle({interlaced: true}),
    		  imagemin.jpegtran({progressive: true}),
    		  imagemin.optipng({optimizationLevel: 5}),
    		  imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
		.pipe(gulp.dest('dist/images'))
});
