import config from './config'
import express from 'express'
import httpStatus from 'http-status-codes'

const app = express()

app.get('/', (req, res) => {
  res.status(httpStatus.OK).send('Welcome to TripleA')
})

app.listen(config.port, () => {
  console.log(`The server is running at http://localhost:${config.port}/`) // eslint-disable-line no-console
})
