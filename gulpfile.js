var gulp  = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	minifyCSS = require('gulp-minify-css'),
    prefixer  = require('gulp-autoprefixer'),
    del = require('del');

var paths = {
	css: 'public/styles/css',
	sass: 'public/styles/scss/app.scss'
};

gulp.task('compileSass', function(){
	return gulp.src(paths.sass)
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

gulp.task('watchSass', function(){
	gulp.watch('public/styles/scss/**/*.scss', ['compileSass']);
});

gulp.task('clean', function(){
	del(['dist', paths.css + '/app.css*']);
});

gulp.task('build', ['compileSass'], function(){
	return gulp.src([paths.css + '/app.css', 'views/index.html'], { base: '.'})
		.pipe(gulp.dest('dist'));
	});

gulp.task('default', ['clean'], function(){
	gulp.start('build');
});
