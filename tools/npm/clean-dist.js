import config from './config'
import del from 'del'

async function cleanDist () {
  await del([config.dirs.dist])
}

cleanDist.displayName = 'clean:dist'

export default cleanDist
