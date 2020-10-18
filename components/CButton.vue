<template>
  <a
    :href="href"
    :target="linkOut && '_blank'"
    class="c-button"
    :class="icon !== 'link' && 'c-button--circle'"
  >
    <span class="c-button__text">{{ text }}</span>
    <div class="c-button__icon">
      <img
        v-if="icon === 'link'"
        src="~/assets/images/icons/icon-link.svg"
        alt="link icon"
      />
      <img
        v-if="icon === 'download'"
        src="~/assets/images/icons/icon-download.svg"
        alt="download icon"
      />
      <img
        v-if="icon === 'whatsapp'"
        src="~/assets/images/icons/icon-whatsapp.svg"
        alt="whatsapp icon"
      />
    </div>
  </a>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    href: {
      type: String,
      default: '#',
    },
    text: {
      type: String,
      default: 'Button',
    },
    icon: {
      type: String,
      default: 'link',
    },
    linkOut: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.c-button {
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
  display: inline-flex;
  align-items: center;
  padding: 10px;
  border-radius: $radius-md;
  background-color: tranparent;
  transition: background-color 300ms;

  &:hover {
    background-color: rgba($color-green, 0.08);
    .c-button__icon,
    img {
      transform: translate(0%, 0%);
    }
  }

  &__text {
    font-weight: bold;
  }

  &__icon {
    $scale: 17px;
    background-color: $color-yellow;
    margin-left: 10px;
    border-radius: $radius-sm;
    width: $scale;
    height: $scale;
    transform: translate(-2.5px, 3px);
    transition: transform 0.5s $easeOutExpo;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: translate(5px, -4px);
      transition: transform 0.5s $easeOutExpo;
    }

    .c-button--circle & {
      border-radius: $radius-lg;
    }
  }
}
</style>
