import config from './webpack.base.babel';

export default {
  ...config,
  output: {
    filename: 'dist/webpack-package.min.js',
  },
};
