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
              <button class="button">
                <span class="button__text">Download</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
          <div class="c-column">
            <div class="c-column__image">
              <img src="~/assets/images/posters/dummy/poster2.jpeg" alt />
            </div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Download</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
          <div class="c-column">
            <div class="c-column__image">
              <img src="~/assets/images/posters/dummy/poster3.jpeg" alt />
            </div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Download</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- VOICE NOTES -->
      <div class="c-section c-section--voicenotes">
        <div class="c-section__title">Voice notes</div>
        <div class="c-columns">
          <div class="c-column">
            <div class="c-column__audio">
              <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Download</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
          <div class="c-column">
            <div class="c-column__audio">
              <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Download</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
          <div class="c-column">
            <div class="c-column__audio">
              <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Download</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- BROADCASTS -->
      <div class="c-section c-section--broadcasts">
        <div class="c-section__title">Whatsapp Broadcasts</div>
        <div class="c-columns">
          <div class="c-column">
            <div class="c-column__text">{{ broadcast }}</div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Share on Whatsapp</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
          <div class="c-column">
            <div class="c-column__text">{{ broadcast }}</div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Share on Whatsapp</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
          <div class="c-column">
            <div class="c-column__text">{{ broadcast }}</div>
            <div class="c-column__action">
              <button class="button">
                <span class="button__text">Share on Whatsapp</span>
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data() {
    return {
      broadcast: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Fuga modi veniam doloribus eum? 
        Nihil in provident sunt quas exercitationem vero blanditiis, error 
        cumque doloribus fuga, asperiores mollitia iste laboriosam architecto!`,
    }
  },
}
</script>

<style lang="scss" scoped>
.c-language {
  padding: 100px 0;
}

.c-columns {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.c-column {
  width: 32%;
  &__image {
    // height: 300px;
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
    }
  }

  &__text {
    // height: 500px;
    border: 2px solid $color-gray;
    background-color: white;
    cursor: pointer;
    transition: all 300ms;
    border-radius: $radius-md;
    padding: 15px;
    font-size: 15px;
    line-height: 24px;
    font-family: Inter;
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
    display: inline-block;
    position: relative;
    letter-spacing: 0.2px;
    &:after {
      z-index: -1;
      position: absolute;
      bottom: 1px;
      left: 0;
      content: '';
      height: 6px;
      width: 100%;
      background-color: $color-yellow;
      border-radius: 2px;
    }
  }
}

.button {
  border: none;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: transparent;
  cursor: pointer;

  &__text {
    font-size: 14px;
    font-weight: bold;
  }

  &__icon {
    margin-left: 10px;
    height: 16px;
    width: 16px;
    background: $color-yellow;
    border-radius: 100%;
  }
}
</style>
