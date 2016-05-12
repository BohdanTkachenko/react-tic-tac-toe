import gulp from 'gulp';

export default () => gulp
  .src('app/resources/static/**/*')
  .pipe(gulp.dest('dist'));
