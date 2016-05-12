import gulp from 'gulp';
import webserver from 'gulp-webserver';

export default () => gulp
  .src('dist')
  .pipe(webserver({
    host: '0.0.0.0',
    port: 8080,
    fallback: 'index.html',
  }));
