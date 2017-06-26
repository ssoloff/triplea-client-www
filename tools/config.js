const BUILD_DIR = '.build'
const COVERAGE_DIR = `${BUILD_DIR}/coverage`

export default {
  dirs: {
    build: BUILD_DIR,
    coverage: COVERAGE_DIR
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
