const BUILD_DIR = './.build'
const DIST_DIR = `${BUILD_DIR}/dist`

const SRC_DIR = './src'

export default {
  dirs: {
    build: BUILD_DIR,
    clientDist: `${DIST_DIR}/public`,
    clientSrc: `${SRC_DIR}/client`,
    dist: DIST_DIR,
    serverDist: DIST_DIR,
    serverSrc: `${SRC_DIR}/server`
  }
}
