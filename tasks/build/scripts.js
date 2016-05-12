import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

export default done => {
  webpack(Object.create(webpackConfig), (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log(`[${gutil.colors.gray('webpack')}] `, stats.toString({
      colors: true,
    }));

    done();
  });
};
