import bundle from './bundle'
import cleanDist from './clean-dist'
import copy from './copy'
import run from './run'

async function build () {
  await run(cleanDist)
  await run(copy)
  await run(bundle)
}

export default build
