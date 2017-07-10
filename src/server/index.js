import config from './config'
import express from 'express'
import path from 'path'
import sum from './lib/sum'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/sum', (req, res) => {
  res.json({
    sum: sum(parseInt(req.query.augend, 10), parseInt(req.query.addend, 10))
  })
})

app.listen(config.port, () => {
  console.log(`The server is running at http://localhost:${config.port}/`) // eslint-disable-line no-console
})
