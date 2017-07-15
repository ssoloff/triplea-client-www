import del from 'del'

import config from './config'

async function clean () {
  await del([config.dirs.build])
}

export default clean
