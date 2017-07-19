var path = require('path');
var glob_entries = require('webpack-glob-entries')

module.exports = {
  entry: './src/response.ts',
  output: {
    libraryTarget: 'commonjs',
    filename: './dist/index.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [
      {
          test: /\.tsx?$/,
          loader: 'ts-loader'
      }
    ]
  }
}
