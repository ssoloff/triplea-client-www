import coveralls from 'coveralls'
import fs from 'fs'
import util from 'util'

async function publishCoverage () {
  const input = await util.promisify(fs.readFile)('.build/coverage/lcov.info', 'utf-8')
  await util.promisify(coveralls.handleInput)(input)
}

publishCoverage.displayName = 'coverage:publish'

export default publishCoverage
