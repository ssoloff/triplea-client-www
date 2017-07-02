import config from './config'
import fse from 'fs-extra'

async function copy () {
  await fse.copy(config.dirs.publicSrc, config.dirs.publicDist)
}

export default copy
