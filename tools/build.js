import bundle from './bundle'
import clean from './clean'
import run from './run'

async function build () {
  await run(clean)
  await run(bundle)
}

export default build
