<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <SongsBookmarks />
      <RecentlyViewedSongs class="mt-2" />
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <SongsSearchPanel />
      <SongsPanel class="mt-2" />
    </v-flex>
  </v-layout>
</template>


<script>
import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },

  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },

  data () {
    return {
      songs: null
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
