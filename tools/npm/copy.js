import config from './config'
import fse from 'fs-extra'

async function copy () {
  await fse.copy(`${config.dirs.serverSrc}/public`, config.dirs.clientDist)
}

export default copy
