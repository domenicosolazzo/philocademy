var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common','common.js', Infinity);


module.exports = {
  cache: true,
  stats: {
    colors: true,
    reasons: true
  },
  entry: {
    main:  './src/index.jsx'
  },
  output: {
    path: 'public/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
      {test: /\.js$/ , loader: 'jsx-loader?harmony'}
    ]
  },
  plugins: [
    definePlugin,
    commonsPlugin
  ]
};