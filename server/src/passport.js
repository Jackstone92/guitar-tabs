// Passport Logic //
const passport = require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')

passport.use(
  // decode and verify that token that comes in from header is valid //
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret
  }, async function (jwtPayload, done) {
    // callback //
    try {
      const user = await User.findOne({
        where: {
          id: jwtPayload.id
        }
      })
      if (!user) {
        return done(new Error(), false)
      }

      // if successful, return user object //
      // will set it to req.user in isAuthenticated.js //
      return done(null, user)
    } catch (err) {
      return done(new Error(), false)
    }
  })
)

// don't export anything! //
module.exports = null
