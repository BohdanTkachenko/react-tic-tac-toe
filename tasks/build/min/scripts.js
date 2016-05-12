import gulp from 'gulp';
import uglify from 'gulp-uglify';

export default () => gulp
  .src('dist/assets/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/assets'));

export const dependencies = ['build:scripts'];
