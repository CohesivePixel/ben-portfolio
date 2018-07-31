<template lang="html">
  <div class="backplate">
    <svg width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMax">
      <polygon points="100,100 100,0 65,0 25,100" v-if="shared.colour.vibrant" :style="backPlateStyle" />
    </svg>
  </div>
</template>

<script>
import {common} from 'src/app.js';

export default {
  data() {
    return {
      shared: common,
      backPlateStyle: {
        fill: '',
        transition: 'fill .85s ease'
      }
    }
  },

  beforeUpdate() {
    this.backPlateStyle.fill = this.shared.colour.vibrant;
  }
}
</script>

<style lang="scss">
  .backplate {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  @media(max-aspect-ratio: 1/1) {
    .backplate {
      display: none;
    }
  }
</style>
