import config from './config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const clientConfig = {
  entry: `${config.dirs.clientSrc}/index.jsx`,
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.jsx?$/
      }
    ]
  },
  output: {
    filename: 'client.js',
    path: path.resolve(`${config.dirs.dist}/public`)
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: `${config.dirs.clientSrc}/index.html`
    })
  ]
}

const serverConfig = {
  entry: `${config.dirs.serverSrc}/server.js`,
  externals: [
    /^[a-z\-0-9]+$/ // every non-relative module is external
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __dirname: false,
    __filename: false
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(config.dirs.dist)
  },
  target: 'node'
}

export default [clientConfig, serverConfig]
