const bodyParser = require('body-parser')
// const users = require('./userRoute')
const users = require('./userRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(users)

  app.get('/', (req, res) => {
    res.send('Ok')
  })
}
