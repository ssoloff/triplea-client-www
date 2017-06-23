import del from 'del'

async function clean () {
  await del(['coverage'])
}

export default clean
