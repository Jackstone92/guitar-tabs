<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title">
        </v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist">
        </v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre">
        </v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album">
        </v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl">
        </v-text-field>

        <v-text-field
          label="Youtube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId">
        </v-text-field>
      </Panel>
    </v-flex>
    <v-flex xs8>
      <Panel title="Song Structure" class="ml-4">
        <v-text-field
          label="Lyrics"
          required
          :rules="[required]"
          multi-line
          v-model="song.lyrics">
        </v-text-field>

        <v-text-field
          label="Tab"
          required
          :rules="[required]"
          multi-line
          v-model="song.tab">
        </v-text-field>
      </Panel>

      <span class="danger-alert" v-if="error">
        {{error}}
      </span>

      <v-btn
        class="blue darken-4"
        dark
        @click="create">
          Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      this.error = null
      // make sure all fields are filled in //
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }

      // call API //
      try {
        await SongsService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
