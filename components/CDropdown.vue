<template>
  <div class="c-dropdown">
    <select
      :style="{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        fontSize: `${fontSize}`,
        padding: `${padding}`,
      }"
      @change="selectOption($event)"
    >
      <option value="hausa">Hausa</option>
      <option value="efik">Efik</option>
      <option value="nupe">Nupe</option>
    </select>
    <svg
      class="c-dropdown__icon"
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2C3.36846 3.94705 5.13246 5.69884 6.44444 7.65887C7.18643 8.76735 8.93806 6.86489 9.47475 6.33847C10.1826 5.64418 12 3.54808 12 2.75452"
        :stroke="color"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CDropdown',
  props: {
    bgColor: {
      type: String,
      default: '#F2F5F5',
    },
    color: {
      type: String,
      default: 'black',
    },
    fontSize: {
      type: String,
      default: '1.6rem',
    },
    padding: {
      type: String,
      default: '10px',
    },
  },
  methods: {
    selectOption(event) {
      const value = event.target.value
      this.$router.push({
        path: `/${value}`,
      })
    },
  },
}
</script>

<style lang="scss">
.c-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  width: 450px;
  max-width: 100%;

  select {
    width: 100%;
    font-size: 1.6rem;
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
</style>
