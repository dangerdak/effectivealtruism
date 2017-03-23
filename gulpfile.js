var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Add CSS prefixes
gulp.task('styles', function() {
  var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');

  return gulp.src('css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
});

// Concatenate and minify JS
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/*.css', ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
