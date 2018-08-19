<template lang="html">
  <div class="backplate-container">
    <div class="desktop-backplate">
      <svg width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMax">
        <polygon points="100,100 100,0 65,0 25,100" v-if="shared.colour.vibrant" :style="styles.backPlate" />
      </svg>
    </div>
    <div class="mobile-backplate">
      <svg class="topAngle" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="100,100 100,0 60,0 0,100" :style="styles.backPlate"/>
      </svg>
      <svg :style="styles.bottomSquare" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect x="0" y="0" width="100" height="100" :style="styles.backPlate"></rect>
      </svg>
    </div>
  </div>
</template>

<script>
import {common} from 'src/app.js';

export default {
  data() {
    return {
      shared: common,
      styles: {
        backPlate: {
          fill: '',
          transition: 'fill .85s ease'
        },
        bottomSquare: {
          height: '',
          marginTop: '-1px',
          order: '2',
          flexGrow: '1'
        }
      }
    }
  },

  created() {
    this.setReady();
  },

  beforeUpdate() {
    this.setReady();
  },

  methods: {
    setReady() {
      this.styles.backPlate.fill = this.shared.colour.vibrant;
      this.styles.bottomSquare.height = '30vh';
    }
  }
}
</script>

<style lang="scss">
  svg {
    float: left
  }

  .backplate-container {
    height: 100%;
    .desktop-backplate {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      overflow: hidden;
      @media(max-aspect-ratio: 1/1) {
        display: none;
      }
    }

    .mobile-backplate {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: -1;
      .topAngle {
        height: 25vh;
        order: 1;
      }
      .bottomSquare {
        height: 30vh;
        margin-top: -1px;
        order: 2;
        flex-grow: 1;
      }
      @media(min-aspect-ratio: 1/1) {
        display: none;
      }
    }
  }
</style>
