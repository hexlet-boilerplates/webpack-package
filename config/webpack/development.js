import webpackMerge from 'webpack-merge';
import getBaseConfig from './base';

export default () => webpackMerge(getBaseConfig(), {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
});
