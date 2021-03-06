// import //
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

// express server //
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')



require('./routes')(app)

// use sequelize //
sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  })
