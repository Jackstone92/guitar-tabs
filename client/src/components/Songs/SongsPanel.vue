<template>
  <Panel title="Songs">
    <v-btn
      :to="{
        name: 'songs-create'
      }"
      slot="action"
      class="blue accent-3"
      light
      medium
      absolute
      right
      middle
      fab>
        <v-icon>add</v-icon>
      </v-btn>

      <div v-for="song in songs"
        class="song"
        :key="song.id">

        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>

            <div class="song-artist">
              {{song.artist}}
            </div>

            <div class="song-genre">
              {{song.genre}}
            </div>

            <v-btn
              class="blue darken-4"
              dark
              :to="{
                name: 'song',
                params: {
                  songId: song.id
                }
              }">
                View
            </v-btn>
          </v-flex>

          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" />
          </v-flex>
        </v-layout>
      </div>
  </Panel>
</template>


<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  },

  async mounted () {
    // do a request to the backend for all the songs //
    // axios returns .data //
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
