<template>
  <div class="container">
    <div class="c-home">
      <h1 class="c-home__title">
        <div class="c-home__title-line">
          <span>Spread awareness about the</span>
          <line />
        </div>
        <div class="c-home__title-line">
          <span>#EndSARS movement to people in</span>
          <line />
        </div>
        <div class="c-home__title-line">
          <span>their native languages.</span>
          <line />
        </div>
      </h1>
      <c-dropdown
        class="c-dropdown"
        bg-color="black"
        color="white"
        font-size="1.8rem"
        padding="15px"
      />
      <p class="c-home__subtext">
        Select a language and get voice notes, broadcast messages and posters in
        that language. Languages are updated regularly, so please come back
        later if you can't find yours now.
      </p>
      <div ref="emojis" class="c-emojis"></div>
    </div>

    <a href="mailto:ngvoice1960@gmail.com" class="c-home__footer">
      👉🏾&nbsp; ngvoices1960@gmail.com &nbsp;👈🏾
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emojis: ['✊🏾', ' 📣', '🗣', '🚫', '🇳🇬'],
      disabledEmojiList: [],
    }
  },
  mounted() {
    this.createEmojiList()
  },
  methods: {
    selectOption(event) {
      const value = event.target.value
      this.$router.push({
        path: `/${value}`,
      })
    },
    createEmojiList() {
      const emojiList = []
      for (let index = 0; index < this.emojis.length; index++) {
        for (let i = 0; i < 15; i++) {
          const span = `<span>${this.emojis[index]}</span>`
          emojiList.push(span)
        }
      }
      this.$refs.emojis.innerHTML = emojiList.join(' ')
      this.disabledEmojiList = Array.from(this.$refs.emojis.children)

      setInterval(() => {
        this.spawnEmoji()
      }, 1000)
    },
    spawnEmoji() {
      const x = Math.floor(Math.random() * 100)
      const index = Math.floor(Math.random() * this.disabledEmojiList.length)
      const emoji = this.disabledEmojiList[index]

      this.disabledEmojiList.splice(index, 1)

      const randomColor = `rgba(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, 0.5)`

      emoji.style.setProperty('--trans-duration', '0s')
      emoji.style.setProperty('--opacity', '1')
      emoji.style.setProperty('--trans-value', '0%')
      // emoji.style.setProperty('--bottom', '-4rem')
      emoji.style.left = `${x}%`
      emoji.style.background = randomColor

      setTimeout(() => {
        emoji.style.setProperty('--trans-duration', '4s')
        emoji.style.setProperty('--trans-value', '-600%')
        emoji.style.setProperty('--opacity', '0')
      }, 0)

      setTimeout(() => {
        this.disabledEmojiList.push(emoji)
      }, 4000)
    },
  },
}
</script>

<style lang="scss" scoped>
.c-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 180px;
  text-align: center;

  @keyframes slideup {
    to {
      transform: translateY(0%);
    }
  }

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }

  &__title {
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 700;
    margin-bottom: 50px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    color: white;

    @include small {
      font-size: 2rem;
      line-height: 3.4rem;
    }
  }

  &__title-line {
    position: relative;
    text-align: center;
    display: inline-block;

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        --anim-delay: calc((0.3s * #{$i}) + (0.3s * (#{$i} - 1)));
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      transform: translateY(100%);
      z-index: 2;
    }

    &::after {
      color: black;
      position: absolute;
      left: 0;
      transform: translateY(100%);
      z-index: 1;
      animation: slideup 1.4s $easeOutExpo var(--anim-delay) forwards;
    }

    &:first-child {
      z-index: 0;

      &::after {
        content: 'Spread awareness about the';
      }
    }

    &:nth-child(2) {
      z-index: 1;

      &::after {
        content: '#EndSARS movement to people in';
      }
    }

    &:last-child {
      z-index: 2;

      &::after {
        content: 'their native languages.';
      }
    }

    @keyframes revealline {
      to {
        transform: scaleX(0);
      }
    }

    line {
      --anim-delay: 2.4s;
      position: absolute;
      left: 0%;
      bottom: 2px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      height: 14px;
      background-repeat: no-repeat;
      background-position: center;
      z-index: -1;
      background-image: url("data:image/svg+xml,%3Csvg width='396' height='12' viewBox='0 0 396 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.33136 5.23761C16.3184 5.23761 28.3298 4.78449 40.2787 4.78449C44.403 4.78449 48.2997 5.69073 52.3618 5.69073C62.8349 5.69073 73.1051 5.59668 83.4758 6.94939C91.0607 7.93871 99.2362 7.05008 106.887 7.05008C131.5 7.05008 156.126 6.14385 180.745 6.14385C184.837 6.14385 188.978 5.04089 193.08 4.78449C200.357 4.32969 208.394 3.468 215.635 4.78449C220.585 5.68457 225.775 5.2202 230.789 5.23761C237.755 5.2618 244.162 5.89167 250.978 6.94939C252.884 7.2451 255.173 6.62906 257.02 6.39558C262.528 5.69909 268.032 5.09651 273.584 4.88519C278.504 4.6979 283.506 4.54542 288.386 5.13692C294.816 5.91639 301.394 5.7204 307.87 6.49627C312.974 7.1078 317.774 7.5032 322.923 7.5032C329.234 7.5032 335.596 7.74579 341.904 7.5032C348.028 7.26765 354.147 5.3342 360.28 4.78449C364.899 4.3705 369.45 4.33138 374.075 4.33138C379.959 4.33138 385.561 4.78449 391.294 4.78449' stroke='%23F9D808' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

      &::before {
        content: '';
        position: absolute;
        transform-origin: right;
        width: 100%;
        height: 100%;
        left: 0;
        background: white;
        animation: revealline 1.5s linear var(--anim-delay) forwards;
      }
    }

    &:nth-child(2) {
      line {
        --anim-delay: 3.9s;
        background-image: url("data:image/svg+xml,%3Csvg width='442' height='13' viewBox='0 0 442 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6.14135C10.2638 6.14135 15.7837 7.74159 22.0602 7.74159C32.2348 7.74159 42.4275 7.74159 52.6853 7.74159C62.5182 7.74159 72.2654 5.60793 82.1682 5.60793C90.0097 5.60793 97.6606 6.44671 105.446 6.7044C110.487 6.87126 115.549 7.41112 120.511 8.27501C123.765 8.8414 126.789 7.74153 130 8.27501C135.372 9.16758 142.864 8.98896 148.111 7.86013C153.156 6.77468 157.458 6.67476 162.652 6.67476C172.738 6.67476 182.459 7.20818 192.567 7.20818C215.525 7.20818 238.484 7.20818 261.442 7.20818C275.247 7.20818 288.982 5.07452 302.842 5.07452C305.177 5.07452 308.379 4.57807 310.622 5.19305C313.651 6.02387 317.04 5.60793 320.192 5.60793C326.116 5.60793 332.053 5.48184 337.974 5.63757C341.818 5.73864 345.58 6.58501 349.459 6.7933C354.438 7.06066 359.447 7.74159 364.432 7.74159C377.003 7.74159 389.471 3.19291 402.003 4.12622C406.716 4.4772 410.972 5.46149 415.741 5.63757C417.912 5.71771 420.127 6.00118 422.193 6.67476C423.443 7.08226 422.996 7.62303 423.675 8.15647C424.852 9.08067 430.851 8.27501 432.443 8.27501C434.439 8.27501 435.882 7.20818 438 7.20818' stroke='%23F9D808' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }
    }

    &:last-child {
      line {
        --anim-delay: 5.4s;
        background-image: url("data:image/svg+xml,%3Csvg width='277' height='11' viewBox='0 0 277 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.94122 4.5517C21.3015 4.5517 38.6336 4.62939 55.9346 5.18749C65.2818 5.48901 74.7529 3.28012 84.1919 3.28012C90.2442 3.28012 96.1568 3.32629 102.135 4.5517C106.138 5.37209 110.222 6.47146 114.286 6.95357C117.85 7.37648 123.644 6.77493 127 5.78795C130.809 4.66774 133.992 6.34953 138 6.42375C143.019 6.5167 144.499 5.18749 150.5 5.18749C156.501 5.18749 164.008 5.39165 169.953 5.78795C175.858 6.18161 181.82 4.79604 187.684 4.5517C192.554 4.3488 197.468 4.5517 202.343 4.5517C213.82 4.5517 225.39 8.20344 236.958 6.42374C246.289 4.98816 255.995 5.18749 265.498 5.18749C268.336 5.18749 271.1 3.34394 273.516 4.5517' stroke='%23F9D808' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }
    }
  }

  .c-dropdown,
  &__subtext {
    opacity: 0;
    animation: fadein var(--anim-duration) ease-in-out 2.4s forwards;
  }

  .c-dropdown {
    --anim-duration: 1s;
  }

  &__subtext {
    margin-top: 50px;
    font-size: 1.4rem;
    width: 450px;
    max-width: 100%;
    line-height: 2.1rem;
    --anim-duration: 1.4s;
  }

  &__footer {
    display: inline-block;
    font-size: 1.4rem;
    color: #000;
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    text-decoration: none;
    color: $color-green;

    @include medium {
      display: block;
      text-align: center;
      position: relative;
      left: 0;
      bottom: 0;
      transform: none;
      margin: 90px auto 60px;
    }
  }
}

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
</style>
