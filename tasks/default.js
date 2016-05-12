import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import gutil from 'gulp-util';
import webpackConfig from '../webpack.config';

export default () => {
  const myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';

  const server = new WebpackDevServer(webpack(myConfig), {
    contentBase: 'dist',
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    filename: 'main.js',
    watchOptions: {
      aggregateTimeout: 300,
    },
    publicPath: '/assets/',
    historyApiFallback: false,

    stats: {
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: true,
      chunkModules: false,
      modules: false,
      cached: true,
      reasons: false,
      source: false,
      errorDetails: true,
      chunkOrigins: false,
      modulesSort: false,
      chunksSort: false,
      assetsSort: false,
      colors: true,
    },
  });

  server.listen(3000, 'localhost', err => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');
  });
};

export const dependencies = ['watch:styles', 'watch:static'];
