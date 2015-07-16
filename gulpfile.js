var gulp  = require('gulp'),
	watch = require('gulp-watch'),
	less  = require("gulp-less"),
	minifyCSS = require('gulp-minify-css');



gulp.task('mini-less', function() {
    var files = 'public/styles/less/*.less';
    return gulp.src(files)
        .pipe(watch(files))
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/styles/css'));
});

gulp.task('default', ['mini-less']);
