const express = require('express')
// const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const port = 3000

// app.use(bodyParser.json())
routes(app)

// app.get('/teste', (req, res) => {
//   res.status(200).send({ msg: 'Ok' })
// })

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

module.exports = app
