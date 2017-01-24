import webpackMerge from 'webpack-merge';
import getBaseConfig from './base';

export default () => webpackMerge(getBaseConfig(), {
  devtool: '#cheap-module-eval-source-map',
});
