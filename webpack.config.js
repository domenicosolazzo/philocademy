var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  cache: true,
  stats: {
    colors: true,
    reasons: true
  },
  entry: {
    main:  ['webpack/hot/dev-server', './src/root']
  },
  resolve: {
    root: __dirname + '/src',
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: 'public/build',
    publicPath: 'http://localhost:9090/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'babel-loader'},
      {test: /\.js$/ , loader: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};