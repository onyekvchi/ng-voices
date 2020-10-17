<template>
  <div class="c-home">
    <header>
      <h4>Spread awareness about</h4>
      <h4>#ENDSARS to people in their</h4>
      <h4>native languages.</h4>
    </header>
    <div class="c-dropdown">
      <select id="" name="">
        <option disabled selected>Select a language to start</option>
        <option value="efik">Efik</option>
        <option value="nupe">Nupe</option>
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
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <p>
      Select a language and get voice notes, broadcast messages and posters in
      that language
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 25vh;
  text-align: center;

  header {
    font-size: 3.2rem;
    line-height: 42px;
    font-weight: 700;
    margin-bottom: 50px;
  }

  select {
    background: black;
    color: white;
    font-size: 1.8rem;
    padding: 16px 0px;
  }

  & > :last-child {
    margin-top: 50px;
    font-size: 1.4rem;
    width: 100%;
    max-width: 395px;
    line-height: 21px;
  }
}
</style>
