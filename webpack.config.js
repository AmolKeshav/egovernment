const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ]
}
