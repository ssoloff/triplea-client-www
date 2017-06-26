import del from 'del'

async function clean () {
  await del(['.build'])
}

export default clean
