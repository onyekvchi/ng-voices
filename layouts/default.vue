<template>
  <div class="c-app">
    <div class="c-nav">NGN</div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: normal;
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.c-app {
  width: 90vw;
  margin: 0 auto;
}

.c-nav {
  width: 100%;
}
</style>
