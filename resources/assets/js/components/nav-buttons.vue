<template lang="html">
  <div class="btn-container">
    <transition name="btn-next-slide" v-on:after-leave="changeState">
      <div class="nav-btn-next"  v-if="showBtn" @click="addCounter">
        <svg x="0px" y="0px" viewBox="0 0 60 60" :style="styles.nextBtnStyle" v-if="nextBtn.standard" @mouseenter="nextBtn.inverted = 1; nextBtn.standard = 0">
          <g id="Jaartrui---Desktop" transform="translate(-1339.000000, -833.000000)">
            <path id="Arrow-Right" class="st0" d="M1386.4,881.5l-15.5-15.5c-1-1-2.7-1-3.7,0l-15.5,15.5c-1,1-2.7,1-3.7,0l-7.1-7.1
              c-1-1-1-2.7,0-3.7l26.3-26.3c1-1,2.7-1,3.7,0l26.3,26.3c1,1,1,2.7,0,3.7l-7.1,7.1C1389.1,882.6,1387.4,882.6,1386.4,881.5z"/>
          </g>
        </svg>
        <svg x="0px" y="0px" viewBox="0 0 60 60" :style="styles.nextBtnStyle" v-if="nextBtn.inverted" @mouseleave="nextBtn.inverted = 0; nextBtn.standard = 1">
          <g id="Jaartrui---Desktop" transform="translate(-1339.000000, -833.000000)">
          	<g id="Arrow-Right">
          		<path class="st0" d="M1369,846.9l25.8,25.8l-6.5,6.5l-15.3-15.3c-1.1-1.1-2.5-1.6-4-1.6s-2.9,0.6-4,1.6l-15.3,15.3l-6.5-6.5
          			L1369,846.9 M1369,843.7c-0.7,0-1.3,0.3-1.8,0.8l-26.3,26.3c-1,1-1,2.7,0,3.7l7.1,7.1c0.5,0.5,1.2,0.8,1.8,0.8s1.3-0.3,1.8-0.8
          			l15.5-15.5c0.5-0.5,1.2-0.8,1.8-0.8s1.3,0.3,1.8,0.8l15.5,15.5c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.3-0.3,1.8-0.8l7.1-7.1
          			c1-1,1-2.7,0-3.7l-26.3-26.3C1370.3,844,1369.7,843.7,1369,843.7L1369,843.7z"/>
          	</g>
          </g>
        </svg>
      </div>
    </transition>
    <transition name="btn-prev-slide">
      <div class="nav-btn-prev" v-if="showBtn" @click="dropCounter">
        <svg x="0px" y="0px" viewBox="0 0 60 60" :style="prevBtnStyle" v-if="prevBtn.standard" @mouseenter="prevBtn.inverted = 1; prevBtn.standard = 0">
          <g id="Jaartrui---Desktop" transform="translate(-1339.000000, -833.000000)">
            <path id="Arrow-Right" class="st0" d="M1386.4,881.5l-15.5-15.5c-1-1-2.7-1-3.7,0l-15.5,15.5c-1,1-2.7,1-3.7,0l-7.1-7.1
              c-1-1-1-2.7,0-3.7l26.3-26.3c1-1,2.7-1,3.7,0l26.3,26.3c1,1,1,2.7,0,3.7l-7.1,7.1C1389.1,882.6,1387.4,882.6,1386.4,881.5z"/>
          </g>
        </svg>
        <svg x="0px" y="0px" viewBox="0 0 60 60" :style="prevBtnStyle" v-if="prevBtn.inverted" @mouseleave="prevBtn.inverted = 0; prevBtn.standard = 1">
          <g id="Jaartrui---Desktop" transform="translate(-1339.000000, -833.000000)">
          	<g id="Arrow-Right">
          		<path class="st0" d="M1369,846.9l25.8,25.8l-6.5,6.5l-15.3-15.3c-1.1-1.1-2.5-1.6-4-1.6s-2.9,0.6-4,1.6l-15.3,15.3l-6.5-6.5
          			L1369,846.9 M1369,843.7c-0.7,0-1.3,0.3-1.8,0.8l-26.3,26.3c-1,1-1,2.7,0,3.7l7.1,7.1c0.5,0.5,1.2,0.8,1.8,0.8s1.3-0.3,1.8-0.8
          			l15.5-15.5c0.5-0.5,1.2-0.8,1.8-0.8s1.3,0.3,1.8,0.8l15.5,15.5c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.3-0.3,1.8-0.8l7.1-7.1
          			c1-1,1-2.7,0-3.7l-26.3-26.3C1370.3,844,1369.7,843.7,1369,843.7L1369,843.7z"/>
          	</g>
          </g>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
import {common} from 'src/app.js';

export default {
  data() {
    return {
      shared: common,
      showBtn: true,
      nextBtn: {
        standard: true,
        inverted: false
      },
      prevBtn: {
        standard: true,
        inverted: false
      },
      styles: {
        nextBtnStyle: 'fill: white'
      }
    }
  },

  created() {
    Event.$on('swipe', () => this.startAnim());
  },

  computed: {
    prevBtnStyle() {
      return 'fill: ' + this.shared.colour.vibrant;
    }
  },

  methods: {
    dropCounter() {
      this.shared.active -= 1;
      this.startAnim();
      Event.$emit('swipe');
    },
    addCounter() {
      this.shared.active += 1;
      this.startAnim();
      Event.$emit('swipe');
    },
    startAnim() {
      this.showBtn = false;
    },
    changeState() {
      this.showBtn = true;
    }
  }
}
</script>

<style lang="scss">
  $size: 2vw;

  .nav-btn-next {
    width: $size;
    height: $size;
    position: absolute;
    right: 3vh;
    bottom: 50%;
    transform: rotate(90deg);
  }

  .nav-btn-prev {
    @extend .nav-btn-next;
    left: 3vh;
    transform: rotate(-90deg);
  }

  /*
   * Animation for the 'next' button
   */
  .btn-next-slide-leave-active {
    transition: all 1.2s ease;
    transform: translateX(10vh)
               rotate(-180deg);
  }

  .btn-next-slide-enter-active {
    transition: all .8s ease;
    transition-delay: .7s;
  }

  .btn-next-slide-enter {
    transform: translateX(10vh)
  }

  /*
  * Animation for the 'previous' button
  */
  .btn-prev-slide-leave-active {
    transition: all .8s ease;
    transform: translateX(-10vh)
               rotate(180deg);
  }

  .btn-prev-slide-enter-active {
    transition: all .8s ease;
    transition-delay: 1.5s;
  }

  .btn-prev-slide-enter {
    transform: translateX(-10vh)
  }

  @media(max-aspect-ratio: 1/1) {
    .btn-container {
      display: none;
    }
  }

</style>
