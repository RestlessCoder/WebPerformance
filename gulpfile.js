'use strict';

var gulp = require('gulp'); // Gulp
var minifyCSS = require('gulp-clean-css'); // CSS

gulp.task('minify-css', function(){
  gulp.src('./css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))

});

