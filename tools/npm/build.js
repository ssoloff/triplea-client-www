import bundle from './bundle'
import clean from './clean'
import copy from './copy'
import run from './run'

async function build () {
  await run(clean)
  await run(copy)
  await run(bundle)
}

export default build
