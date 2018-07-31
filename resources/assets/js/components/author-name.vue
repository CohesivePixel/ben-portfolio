<template lang="html">
  <div class="author-title" v-if="shared.colour.vibrant">
    <h1 class="firstname" :style="nameStyle">BEN</h1>
    <h1 class="lastname"> | EY</h1>
  </div>
</template>

<script>
import {common} from 'src/app.js';

export default {
  data() {
    return {
      shared: common,
      nameStyle: {
        color: '',
        transition: 'color .85s ease'
      }
    }
  },

  beforeUpdate() {
    this.nameStyle.color = this.shared.colour.vibrant;
  }
}
</script>

<style lang="scss">
  .author-title {
    padding-top: 4.5vh;
    padding-left: 5vw;
    margin: 0;

    @media(max-aspect-ratio: 1/1) {
      padding-top: 0;
      padding-left: 9.5vw;
    }

    .lastname {
      font-family: 'Avenir-Black';
      font-size: 2.8vw;
      float: left;

      @media(max-aspect-ratio: 1/1) {
        font-size: 5vw;
      }
    }

    .firstname {
      @extend .lastname;
      margin-right: 1.6vw;

      @media(max-aspect-ratio: 1/1) {

      }
    }
  }
</style>
