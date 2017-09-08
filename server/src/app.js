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
app.post('/register', (req, res) => {
  // return message with email provided in payload //
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

// overwrite port and set to 8081 //
app.listen(process.env.PORT || 8081)
