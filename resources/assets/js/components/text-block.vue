<template lang="html">
  <div class="elemental-cock">
    <div class="text-block" v-if="this.blockTitle">
      <transition name="title-slide">
        <h1 class="work-title" v-if="showTitle">{{ blockTitle }}</h1>
      </transition>
      <transition name="divider-slide">
        <object class="divider" width="35%" height="5px" v-if="showDivider"></object>
      </transition>
      <transition name="description-slide" v-on:after-leave="changeState">
        <p class="work-text" v-if="showDescription">{{ blockText }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
import {common} from 'src/app.js';

export default {
  data() {
    return {
      shared: common,
      blockTitle: '',
      blockText: '',
      showTitle: 1,
      showDivider: 1,
      showDescription: 1
    }
  },

  created() {
    this.setBlockHeight();
    this.getInfo();

    Event.$on('swipe', () => {
      this.slideOut()
    })
  },

  beforeUpdate() {
    this.setBlockHeight();
    this.getInfo();
  },

  methods: {
    setBlockHeight() {
      const imgFrame = document.getElementById('pic');
      return;
    },
    getInfo() {
        this.axios.get('/v1/works/' + this.shared.active + '/information')
            .then(response => {
              this.blockTitle = response.data[0]
              this.blockText = response.data[1]
            });
        return
    },
    slideOut() {
      this.showTitle = 0;
      this.showDivider = 0;
      this.showDescription = 0;
    },
    changeState() {
      this.getInfo();
      this.showTitle = 1;
      this.showDivider = 1;
      this.showDescription = 1;
    }
  }
}
</script>

<style lang="scss">
  $divider-distance: 2vh;
  $slide-distance: 200%;
  $slide-out-duration: .9s;

  .text-block {
    position: absolute;
    top: 0;
    right: 0;
    width: 25vw;
    float: right;
    margin: 0 7vw;

    .work-text {
      font-family: "Open Sans";
      font-weight: 100;
      font-size: 1.1vw;
      color: white;
      width: 100%;
      letter-spacing: 0.35px;
      float: left;
      margin-top: $divider-distance;
    }

    .work-title {
      font-family: "Open Sans";
      font-weight: 800;
      font-size: 3.4vw;
      color: white;
      width: 100%;
      margin: 0 0 $divider-distance 0;
      letter-spacing: 5px;
      text-align: right;
    }
  }

  .divider {
    border: 1px solid white;
    float: right;
    display: block;
    background-color: white;
  }

  @media(max-aspect-ratio: 1/1) {
    .elemental-cock {
      display: none;
    }
  }
</style>
