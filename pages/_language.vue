<!-- eslint-ignore -->
<template>
  <div class="c-language">
    <div class="container">
      <!-- POSTERS -->
      <div v-if="language.posters" class="c-section c-section--posters">
        <div class="c-section__title">Posters</div>
        <div class="c-columns">
          <div
            v-for="(poster, index) in language.posters"
            :key="index"
            class="c-column"
          >
            <div class="c-column__image">
              <img
                :src="
                  require(`assets/data/posters/${language.name.toLowerCase()}/${poster}`)
                "
                :alt="poster"
              />
            </div>
            <div class="c-column__action">
              <c-button
                :href="
                  require(`assets/data/posters/${language.name.toLowerCase()}/${poster}`)
                "
                text="Download"
                icon="download"
                :link-out="true"
                :download="poster"
              />
            </div>
          </div>
          <!-- <div class="c-column">
            <div class="c-column__image">
              <img src="~/assets/images/posters/dummy/poster2.jpeg" alt />
            </div>
            <div class="c-column__action">
              <c-button
                :href="require('assets/images/posters/dummy/poster2.jpeg')"
                text="Download"
                icon="download"
                :link-out="true"
                download="poster2.jpeg"
              />
            </div>
          </div>
          <div class="c-column">
            <div class="c-column__image">
              <img src="~/assets/images/posters/dummy/poster3.jpeg" alt />
            </div>
            <div class="c-column__action">
              <c-button
                :href="require('assets/images/posters/dummy/poster3.jpeg')"
                text="Download"
                icon="download"
                download="poster3.jpeg"
              />
            </div>
          </div> -->
        </div>
      </div>
      <!-- VOICE NOTES -->
      <div class="c-section c-section--voicenotes">
        <div class="c-section__title">Voice notes</div>
        <div class="c-columns">
          <div
            v-for="(voicenote, index) in language.voicenotes"
            :key="index"
            class="c-column"
            :class="isPSA(voicenote) && 'c-column--psa'"
          >
            <div class="c-column__audio">
              <audio
                controls
                :src="
                  require(`assets/data/audio/${language.name.toLowerCase()}/${voicenote}`)
                "
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
            <div class="c-column__action">
              <c-button
                :href="
                  require(`assets/data/audio/${language.name.toLowerCase()}/${voicenote}`)
                "
                text="Download"
                icon="download"
                :download="voicenote"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- VIDEOS -->
      <div
        v-if="language.videos && language.videos.length > 0"
        class="c-section c-section--voicenotes"
      >
        <div class="c-section__title">Videos</div>
        <div class="c-columns">
          <div
            v-for="(video, index) in language.videos"
            :key="index"
            class="c-column"
          >
            <div class="c-column__video">
              <VideoPlayer
                :src="
                  require(`assets/data/videos/${language.name.toLowerCase()}/${video}`)
                "
              />
            </div>
            <div class="c-column__action">
              <c-button
                :href="
                  require(`assets/data/videos/${language.name.toLowerCase()}/${video}`)
                "
                text="Download"
                icon="download"
                :download="video"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- BROADCASTS -->
      <div class="c-section c-section--broadcasts">
        <div class="c-section__title">Broadcast Messages</div>
        <div class="c-columns">
          <div
            v-for="(broadcast, index) in language.broadcasts"
            :key="index"
            class="c-column"
          >
            <div
              v-clipboard="broadcast"
              class="c-column__text"
              @click="showCopyAlert($event)"
            >
              <pre>{{ broadcast }}</pre>
            </div>
            <div class="c-column__action">
              <c-button
                :href="`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  broadcast
                )}`"
                text="Share on Whatsapp"
                icon="whatsapp"
                :link-out="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languageData from '~/assets/data/languages.json'

export default {
  name: 'Language',
  data() {
    return {
      language: {},
    }
  },
  mounted() {
    this.setLanguage()
  },
  methods: {
    setLanguage() {
      const languageParam = this.$route.params.language
      const language = languageData.find((language) => {
        return languageParam === language.name.toLowerCase()
      })
      if (language) {
        this.language = language
      } else {
        this.$router.push({ path: '/' })
      }
    },
    showCopyAlert(e) {
      const node = e.target.parentNode
      node.classList.add('show-copy')
      setTimeout(() => {
        node.classList.remove('show-copy')
      }, 1000)
    },
    isPSA(fileName) {
      return fileName.includes('PSA')
    },
  },
}
</script>

<style lang="scss">
.c-language {
  padding: 100px 0;

  @include small {
    padding: 120px 0 60px;
  }
}

.c-columns {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @include small {
    flex-flow: row wrap;
  }
}

.c-column {
  width: 32%;
  margin-bottom: 30px;
  position: relative;

  &--psa:after {
    content: 'PSA!';
    position: absolute;
    left: -8px;
    top: -8px;
    height: 20px;
    // width: 40px;
    padding: 0 5px;
    background-color: #f10028;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
    line-height: 20px;
    color: white;
    font-weight: 700;
    transform: rotate(-15deg);
  }

  @include small {
    width: 100%;
    margin-bottom: 45px;
  }

  &__image {
    background-color: $color-gray;
    border-radius: $radius-lg;

    img {
      border-radius: $radius-lg;
    }
  }

  &__audio {
    height: 60px;
    background-color: $color-gray;
    border-radius: $radius-md;
    padding: 10px;
    display: flex;
    align-items: center;

    audio {
      width: 100%;
      outline: none;
    }
  }

  &__video {
    background-color: $color-gray;
    border-radius: $radius-md;
    padding: 10px;
    display: flex;
    align-items: center;

    video {
      width: 100%;
      outline: none;
    }
    .video-js {
      width: 100%;
      height: 250px;
      .vjs-big-play-button {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        top: 100px;
      }
    }
  }
  &__text {
    border: 2px solid $color-gray;
    background-color: white;
    cursor: pointer;
    transition: all 600ms;
    border-radius: $radius-md;
    padding: 15px;
    font-size: 15px;
    line-height: 24px;
    font-family: Inter;
    position: relative;

    &:after {
      content: 'Copied!';
      height: 100%;
      width: 100%;
      background-color: rgba($color-gray, 0.95);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font: 1.4rem;
      opacity: 0;
      pointer-events: none;
      transition: all 600ms;
    }

    pre {
      white-space: pre-wrap;
    }
    &:hover {
      background: $color-gray;
    }
  }

  &__action {
    margin-top: 15px;
  }
}

.c-column__text.show-copy:after {
  opacity: 1;
}

.c-section {
  padding: 30px 0;

  &__title {
    text-transform: uppercase;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 700;
    display: block;
    position: relative;
    letter-spacing: 0.2px;
    padding-left: 5px;
    &:after {
      z-index: -1;
      position: absolute;
      bottom: -2px;
      left: 0;
      content: '';
      height: 6px;
      width: 100%;
      background-color: rgba($color-green, 0.12);
      border-radius: $radius-sm;
    }
  }

  @include small {
    padding: 30px 0;
  }
}
</style>
