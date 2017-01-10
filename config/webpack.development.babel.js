import path from 'path';
import config from './webpack.base.babel';

export default {
  ...config,
  output: {
    library: 'WebpackPackage',
    path: path.join(__dirname, '..', 'assets'),
    filename: 'webpack-package.js',
    // publicPath: '/assets/',
  },
  devtool: '#cheap-module-eval-source-map',
};
