import gulp from 'gulp';
import mocha from 'gulp-mocha';

export default done => {
  gulp
    .src(['test/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      timeout: 100,
    }))
    .once('end', () => {
      done();
    });
};
