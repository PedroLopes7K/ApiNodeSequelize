const bodyParser = require('body-parser')
// const users = require('./userRoute')
const users = require('./userRoute')
const classes = require('./classeRoute')
const levels = require('./levelRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(users)
  app.use(classes)
  app.use(levels)

  app.get('/', (req, res) => {
    res.send('Ok')
  })
}
