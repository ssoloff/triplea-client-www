import config from './config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const clientConfig = {
  entry: `${config.dirs.clientSrc}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.global\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /^((?!\.global).)*\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(svg|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      },
      {
        test: /\.(eot|ttf)$/,
        use: 'file-loader'
      }
    ]
  },
  output: {
    filename: 'client.js',
    path: path.resolve(config.dirs.publicDist)
  },
  plugins: [
    new HtmlWebpackPlugin({
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
