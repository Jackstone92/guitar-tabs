<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
        <v-btn
          @click="navigateTo({name: 'songs-create'})"
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
                  @click="navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id
                    }
                  })">
                    View
                </v-btn>
              </v-flex>

              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" />
              </v-flex>
            </v-layout>


          </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>


<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
