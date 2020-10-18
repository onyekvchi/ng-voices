<template>
  <div class="c-app">
    <nav class="c-nav">
      <div class="container">
        <div class="c-nav__inner">
          <nuxt-link to="/" class="c-nav__logo">
            <img src="~/assets/images/flag.svg" alt="logo" />
            <span>NG Voices</span>
          </nuxt-link>
          <div v-if="$route.name !== 'index'" class="c-dropdown">
            <select id name>
              <option value>Hausa</option>
              <option value>Efik</option>
              <option value>Nupe</option>
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
              <img src="~/assets/images/icon-link.svg" alt />
            </div>
          </a>
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/app.scss';

.c-app {
  // width: $container-width-default;
}

.c-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.c-nav__inner {
  padding: 15px 0px;
  height: 75px;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba($color-white, 0.975);

  @include small {
    flex-flow: row wrap;
    height: auto;
  }
}

.c-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  width: 470px;

  select {
    width: 100%;
    font-size: 16px;
    padding: 10px 0px;
    text-align-last: center;
    border-radius: 10px;
    border: solid 2px black;
    background-color: $color-gray;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-weight: normal;
  }

  svg {
    position: absolute;
    right: 20px;
    pointer-events: none;
  }

  @include small {
    order: 3;
    width: 100%;
    margin-top: 15px;
  }
}

.c-nav__logo {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;

  img {
    margin-right: 10px;
  }

  @include small {
    padding: 5px 0;
  }
}
</style>
