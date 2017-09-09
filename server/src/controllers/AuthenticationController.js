const {User} = require('../models')
// use jsonwebtokens for authentication //
const jwt = require('jsonwebtoken')
const config = require('../config/config')



// jwt helper function //
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}


// register callback function //
module.exports = {
  // register method //
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      // send user object if successful //
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      // email already exists //
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },

  // login method //
  async login (req, res) {
    try {
      // check email and password are in body //
      const {email, password} = req.body
      // check that email matches email in database //
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if(!user) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      // password validation //
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      // send user object if successful //
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })

    } catch (err) {
      // email already exists //
      res.status(500).send({
        error: 'An error has occured trying to log in.'
      })
    }
  }
}
