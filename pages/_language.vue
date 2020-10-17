<template>
  <div class="container">
    <div class="c-section c-section--posters">
      <h2 class="c-section__title">Posters</h2>
      <div class="c-posters">
        <div class="c-poster">
          <div class="c-poster__image u-radius-md"></div>
          <div class="c-poster__actions">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-poster">
          <div class="c-poster__image u-radius-md"></div>
          <div class="c-poster__actions">
            <button class="button">
              <span class="button__text">Download</span>
              <span class="button__icon"></span>
            </button>
          </div>
        </div>
        <div class="c-poster">
          <div class="c-poster__image u-radius-md"></div>
          <div class="c-poster__actions">
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
.c-posters {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.c-poster {
  width: 32%;
  &__image {
    height: 300px;
    margin-bottom: 15px;
    background-color: $color-gray;
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
