const BUILD_DIR = './.build'
const COVERAGE_DIR = `${BUILD_DIR}/coverage`

const SRC_DIR = './src'

export default {
  dirs: {
    build: BUILD_DIR,
    clientSrc: `${SRC_DIR}/client`,
    coverage: COVERAGE_DIR,
    dist: `${BUILD_DIR}/dist`,
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
