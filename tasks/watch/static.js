import gulp from 'gulp';

export default () => gulp.watch(['app/resources/static/**/*'], ['build:copy']);
export const dependencies = ['build:copy'];
