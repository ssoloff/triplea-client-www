import config from './config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const clientConfig = {
  entry: `${config.dirs.clientSrc}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'client.js',
    path: path.resolve(config.dirs.publicDist)
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
  entry: `${config.dirs.serverSrc}/index.js`,
  externals: [
    /^[a-z\-0-9]+$/ // every non-relative module is external
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
    path: path.resolve(config.dirs.serverDist)
  },
  target: 'node'
}

export default [clientConfig, serverConfig]
