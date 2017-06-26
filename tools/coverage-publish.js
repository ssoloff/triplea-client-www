import config from './config'
import coveralls from 'coveralls'
import fs from 'fs'
import util from 'util'

async function publishCoverage () {
  const input = await util.promisify(fs.readFile)(config.paths.coverage.info, config.encodings.coverage.info)
  await util.promisify(coveralls.handleInput)(input)
}

publishCoverage.displayName = 'coverage:publish'

export default publishCoverage
