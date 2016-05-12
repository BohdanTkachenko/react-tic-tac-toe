import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

export default () => gulp
  .src('app/resources/styles/main.scss')
  .pipe(sass())
  .pipe(postcss([autoprefixer({ browsers: ['> 1%', 'ie 8'] })]))
  .pipe(gulp.dest('dist/assets'));
