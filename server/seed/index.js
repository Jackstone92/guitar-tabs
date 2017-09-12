// populates database //

const {
  sequelize,
  Song,
  User,
  Bookmark,
  History
} = require('../src/models')

const Promise = require('bluebird')
// load in json files with collection of users and songs //
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./histories.json')



sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )

    // make sure song exists before association! - place bookmarks after songs //
    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )

    await Promise.all(
      histories.map(history => {
        History.create(history)
      })
    )
  })
