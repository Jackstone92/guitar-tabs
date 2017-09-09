// configurations //
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabular',
    user: process.env.DB_USER || 'tabular',
    password: process.env.DB_PASS || 'tabular',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabular.sqlite'

    }
  },
  // authentication key to sign jwt token //
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
