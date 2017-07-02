import config from './config'
import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(config.port, () => {
  console.log(`The server is running at http://localhost:${config.port}/`) // eslint-disable-line no-console
})
