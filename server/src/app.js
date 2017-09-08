console.log('Hello!')
// import //
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// express server //
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// http request //
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

// overwrite port and set to 8081 //
app.listen(process.env.PORT || 8081)
