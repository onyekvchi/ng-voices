<!-- eslint-ignore -->
<template>
  <div class="c-language">
    <div class="container">
      <!-- POSTERS -->
      <div class="c-section c-section--posters">
        <div class="c-section__title">Posters</div>
        <div class="c-columns">
          <div class="c-column">
            <div class="c-column__image">
              <img src="~/assets/images/posters/dummy/poster1.jpeg" alt />
            </div>
            <div class="c-column__action">
              <c-button
                :href="require('assets/images/posters/dummy/poster1.jpeg')"
                text="Download"
                icon="download"
                :link-out="true"
                download="poster1.jpeg"
              />
            </div>
          </div>
          <div class="c-column">
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
          </div>
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
      <!-- BROADCASTS -->
      <div class="c-section c-section--broadcasts">
        <div class="c-section__title">Broadcast Messages</div>
        <div class="c-columns">
          <div
            v-for="(broadcast, index) in language.broadcasts"
            :key="index"
            class="c-column"
          >
            <div class="c-column__text">{{ broadcast }}</div>
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
      this.language = languageData.find((language) => {
        return languageParam === language.name.toLowerCase()
      })
    },
  },
}
</script>

<style lang="scss">
.c-language {
  padding: 100px 0;
}

.c-columns {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @include small {
    flex-flow: row wrap;
  }
}

.c-column {
  width: 32%;
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

    audio {
      height: 100%;
      width: 100%;
      margin-top: -2px;
      outline: none;
    }
  }

  &__text {
    border: 2px solid $color-gray;
    background-color: white;
    cursor: pointer;
    transition: all 300ms;
    border-radius: $radius-md;
    padding: 15px;
    font-size: 15px;
    line-height: 24px;
    font-family: Inter;
    white-space: pre-wrap;
    &:hover {
      background: $color-gray;
    }
  }

  &__action {
    margin-top: 15px;
  }
}

.c-section {
  padding: 60px 0;

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
}
</style>
