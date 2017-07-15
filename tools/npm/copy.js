import fse from 'fs-extra'

import config from './config'

async function copy () {
  await fse.copy(`${config.dirs.serverSrc}/public`, config.dirs.clientDist)
}

export default copy
