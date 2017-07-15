import del from 'del'

import config from './config'

async function cleanDist () {
  await del([config.dirs.dist])
}

cleanDist.displayName = 'clean:dist'

export default cleanDist
