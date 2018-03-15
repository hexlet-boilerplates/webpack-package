// import webpack from 'webpack';
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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              'flow',
              ['env', {
                modules: false,
                targets: {
                  browsers: '> 0%',
                  uglify: true,
                },
                useBuiltIns: true,
              }],
            ],

            plugins: [
              'syntax-dynamic-import',
            ],
          },
        },
      },
    ],
  },
  // plugins: [
  //   new webpack.EnvironmentPlugin(['NODE_ENV']),
  // ],
});
