// put in front of routes //
// make sure to authenticate //
const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'You do not have access to this resource!'
      })
    } else {
      // user is logged in and token is validated - set req.user //
      req.user = user
      next()
    }
  })(req, res, next)
}
