<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      player: null,
    }
  },
  computed: {
    options() {
      return {
        preload: 'auto',
        controls: true,
        sources: [
          {
            src: this.src,
            type: 'video/mp4',
          },
        ],
      }
    },
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        // console.log('onPlayerReady', this)
      }
    )
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
