import config from './config'
import del from 'del'

async function clean () {
  await del([config.dirs.build])
}

export default clean
