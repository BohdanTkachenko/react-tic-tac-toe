import gulp from 'gulp';

export default () => gulp.watch(['app/resources/styles/**/*.scss'], ['build:styles']);
export const dependencies = ['build:styles'];
