var gulp =require('gulp'),
    plumber = require('gulp-plumber'),
    livereload=require('gulp-livereload'),
    sass = require('gulp-sass'),
    uglyfly = require('gulp-uglyfly'),
    st=require('st');

gulp.task('sass', function () {
  gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('uglyfly', function() {
  return gulp.src('javaScript/*.js')
    .pipe(plumber())
    .pipe(uglyfly())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/*.scss', ['sass','uglyfly']);
});
