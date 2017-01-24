import webpack from 'webpack';
import path from 'path';

export default () => ({
  entry: './src/index.js',
  output: {
    library: 'WebpackPackage',
    path: path.join(__dirname, '../..', 'assets'),
    filename: 'webpack-package.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  // plugins: [
  //   new webpack.EnvironmentPlugin(['NODE_ENV']),
  // ],
});
