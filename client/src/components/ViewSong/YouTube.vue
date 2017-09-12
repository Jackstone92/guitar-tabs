<template>
  <Panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="640"
      :player-height="333">
    </youtube>
  </Panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    VueYouTubeEmbed
  }
}
</script>

<style scoped>

</style>
