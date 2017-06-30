import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve('.build/dist/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
