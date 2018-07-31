<template lang="html">
  <div class="progress-container" :style="progressGradient" v-if="colour">
    <div class="progress" :style="progressMask"></div>
  </div>
</template>

<script>
import {common} from 'src/app.js';

export default {
  props: {
    range: Number
  },

  data() {
    return {
      shared: common,
      progressGradient: {
        background: '',
        transition: 'background 1.35s ease'
      },
      progressMask: {
        width: '',
        transition: 'width 1.35s ease'
      }
    }
  },

  created() {
    this.calculatePercentage();
    this.setGradient();
  },

  computed: {
    colour() {
      return this.shared.colour.lightVibrant;
    },
    active() {
      return this.shared.active;
    }
  },

  watch: {
    colour() {
      this.setGradient();
    },
    active() {
      this.calculatePercentage();
    }
  },

  methods: {
    calculatePercentage() {
      this.progressMask.width = (100 - Math.round((this.shared.active / this.range) * 100)).toString() + '%';
    },
    setGradient() {
      this.progressGradient.background = 'linear-gradient(to right,' + this.shared.colour.lightVibrant + ',' + this.shared.colour.lightMuted + ')';
    }
  }
}
</script>

<style lang="scss">
  .progress-container {
    width: 100%;
    height: 0.5vh;

    .progress {
      height: 100%;
      background-color: #eee;
      float: right;
    }
  }
</style>
