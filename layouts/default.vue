<template>
  <div class="c-app">
    <nav class="c-nav">
      <div class="container">
        <div class="c-nav__inner">
          <nuxt-link to="/" class="c-nav__logo">
            <img src="~/assets/images/icons/flag.svg" alt="logo" />
            <span>NG Voices</span>
          </nuxt-link>
          <c-dropdown v-if="$route.name !== 'index'" />
          <c-button
            href="https://endsars.com"
            text="endsars.com"
            :link-out="true"
          />
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/app.scss';

.c-emojis {
  position: fixed;
  width: 100%;
  height: 100vh;
  bottom: 0;
  left: 0;
  font-size: 2.8rem;
  z-index: -1;

  span {
    --trans-duration: 4s;
    --trans-value: 0%;
    --opacity: 1;
    --bottom: -5rem;
    position: absolute;
    bottom: var(--bottom);
    opacity: var(--opacity);
    transform: translateY(var(--trans-value));
    transition: var(--trans-duration) linear;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.c-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: rgba($color-white, 0.975);
}

.c-nav__inner {
  padding: 15px 0px;
  height: 75px;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include small {
    flex-flow: row wrap;
    height: auto;
  }
}

.c-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  width: 450px;
  max-width: 100%;

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
}

.c-nav .c-dropdown {
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
