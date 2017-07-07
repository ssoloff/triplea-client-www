const BUILD_DIR = './.build'
const COVERAGE_DIR = `${BUILD_DIR}/coverage`
const DIST_DIR = `${BUILD_DIR}/dist`

const SRC_DIR = './src'

export default {
  dirs: {
    build: BUILD_DIR,
    clientDist: `${DIST_DIR}/public`,
    clientSrc: `${SRC_DIR}/client`,
    coverage: COVERAGE_DIR,
    dist: DIST_DIR,
    serverDist: DIST_DIR,
    serverSrc: `${SRC_DIR}/server`
  },
  encodings: {
    coverage: {
      info: 'utf-8'
    }
  },
  paths: {
    coverage: {
      info: `${COVERAGE_DIR}/lcov.info`
    }
  }
}
