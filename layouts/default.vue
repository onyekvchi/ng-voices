<template>
  <div class="c-app">
    <nav class="c-nav">
      <div class="c-nav__logo">
        <img src="~/assets/images/flag.svg" alt="logo" />
        <span>NG Voices</span>
      </div>
      <div v-if="$route.name !== 'index'" class="c-dropdown">
        <select id="" name="">
          <option value="">Hausa</option>
          <option value="">Efik</option>
          <option value="">Nupe</option>
        </select>
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2C3.36846 3.94705 5.13246 5.69884 6.44444 7.65887C7.18643 8.76735 8.93806 6.86489 9.47475 6.33847C10.1826 5.64418 12 3.54808 12 2.75452"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <a href="https://endsars.com/" target="_blank" class="c-button">
        <span>endsars.com</span>
        <div class="c-button__icon">
          <img src="~/assets/images/icon-link.svg" alt="" />
        </div>
      </a>
    </nav>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/general/base.scss';

.c-app {
  width: $container-width-default;
}

.c-nav {
  position: absolute;
  padding: 30px 0px;
  font-size: 1.6rem;
  width: $container-width-default;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;

  &__logo {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }
}
</style>
