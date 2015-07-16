var gulp  = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	minifyCSS = require('gulp-minify-css'),
    prefixer  = require('gulp-autoprefixer');

var paths = {
	css: 'public/styles/css',
	sass: 'public/styles/scss/app.scss'
};

gulp.task('compileSass', function(){
	gulp.src(paths.sass)
		.pipe(maps.init())
		.pipe(sass())
		.pipe(prefixer({
			browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
		// Path for source maps to dest relative to the sass dest directory. This puts its in the same css dir
		.pipe(maps.write('./'))
		.pipe(gulp.dest(paths.css));
});

gulp.task('default', ['compileSass']);
