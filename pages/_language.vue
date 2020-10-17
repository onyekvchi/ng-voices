<template>
  <div class="container">
    <!-- POSTERS -->
    <div class="c-section c-section--posters">
      <h2 class="c-section__title">Posters</h2>
      <div class="c-columns">
        <div class="c-column">
          <div class="c-column__image u-radius-md"></div>
          <div class="c-column__action">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-column">
          <div class="c-column__image u-radius-md"></div>
          <div class="c-column__action">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-column">
          <div class="c-column__image u-radius-md"></div>
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
      <h2 class="c-section__title">Voice notes</h2>
      <div class="c-columns">
        <div class="c-column">
          <div class="c-column__audio u-radius-md"></div>
          <div class="c-column__action">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-column">
          <div class="c-column__audio u-radius-md"></div>
          <div class="c-column__action">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-column">
          <div class="c-column__audio u-radius-md"></div>
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
      <h2 class="c-section__title">Whatsapp Broadcasts</h2>
      <div class="c-columns">
        <div class="c-column">
          <div class="c-column__text u-radius-md"></div>
          <div class="c-column__action">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-column">
          <div class="c-column__text u-radius-md"></div>
          <div class="c-column__action">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-column">
          <div class="c-column__text u-radius-md"></div>
          <div class="c-column__action">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Language',
}
</script>

<style lang="scss" scoped>
.c-columns {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.c-column {
  width: 32%;
  &__image {
    height: 300px;
    background-color: $color-gray;
  }

  &__audio {
    height: 60px;
    background-color: $color-gray;
  }

  &__text {
    height: 500px;
    border: 2px solid $color-gray;
    background-color: white;
    cursor: pointer;
    &:hover {
      background: $color-gray;
    }
  }

  &__action {
    margin-top: 15px;
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
