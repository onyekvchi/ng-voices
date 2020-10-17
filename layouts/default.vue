<template>
  <div class="c-app">
    <div class="c-nav">
      <div class="c-nav__logo">
        <img src="~/assets/images/flag.svg" alt="logo" />
        <span>NG Voices</span>
      </div>
      <div class="c-nav__dropdown">
        <select id="" name="">
          <option value="">Hausa</option>
          <option value="">Efik</option>
          <option value="">Nupe</option>
        </select>
        <img src="~/assets/images/icon-dropdown.svg" alt="" />
      </div>
      <a href="https://endsars.com/" class="c-button">
        <span>endsars.com</span>
        <div class="c-button__icon">
          <img src="~/assets/images/icon-link.svg" alt="" />
        </div>
      </a>
    </div>

    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/core/_base.scss';

.c-app {
  width: 70vw;
  margin: 0 auto;
  position: relative;
}

.c-nav {
  position: fixed;
  padding: 30px 0px;
  font-size: 1.6rem;
  width: 70vw;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }

  &__dropdown {
    position: relative;
    display: flex;
    align-items: center;

    select {
      width: 500px;
      font-size: 1.8rem;
      padding: 12px 0px;
      text-align-last: center;
      border-radius: 10px;
      border: solid 2px black;
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    img {
      position: absolute;
      right: 20px;
    }
  }

  .c-button {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    &:hover {
      img {
        transform: translate(0%, 0%);
      }
    }

    &__icon {
      $scale: 23px;
      background-color: $color-yellow;
      margin-left: 10px;
      border-radius: 4px;
      width: $scale;
      height: $scale;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: translate(25%, -20%);
        transition: transform 0.8s $easeOutExpo;
      }
    }
  }
}
</style>
