import webpack from 'webpack'
import webpackConfig from './webpack.config'

function bundle () {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err)
      }

      console.log(stats.toString('minimal'))
      return resolve()
    })
  })
}

export default bundle
