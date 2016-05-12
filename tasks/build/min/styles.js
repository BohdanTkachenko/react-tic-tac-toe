import gulp from 'gulp';
import minifyCSS from 'gulp-minify-css';

export default () => gulp
  .src('dist/assets/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/assets'));

export const dependencies = ['build:styles'];
