<template lang="html">
  <div class="work-softbox">
    <transition name="picture-slide" v-on:after-leave="changeState">
      <img  id="pic"
            ref="picture"
            v-if="showPicture"
            :class="[this.vertical ? styles.verticalClass : styles.horizontalClass, styles.pictureClass]"
            :src="image"
            :alt="alt"
            :title="title">
    </transition>
  </div>
</template>

<script>
import {common} from 'src/app.js';

export default {
  data() {
    return {
      shared: common,
      image: '',
      alt: '',
      title: '',
      vertical: 0,
      showPicture: 1,
      styles: {
        pictureClass: 'picture',
        horizontalClass: 'picture-hrz',
        verticalClass: 'picture-vrt'
      }
    }
  },

  beforeUpdate() {
    this.getImage();
  },

  created() {
    this.getImage();
    Event.$on('swipe', () => this.slideOut());
  },

  methods: {
    getImage() {
      this.axios.get('/v1/works/' + this.shared.active + '/image')
        .then((response) => {
          this.image = require('assets/images/' + response.data[0]);
          this.vertical = response.data[1];
        });
      return;
    },
    slideOut() {
      this.showPicture = 0;
    },
    changeState(el) {
      this.getImage();
      this.showPicture = 1;
    }
  }
}
</script>

<style lang="scss">
  .picture {
    box-shadow: 0 5px 45px rgba(69, 69, 69, 0.5);
  }

  .picture-hrz {
    width: 45vw;
    margin-left: 10vw;
  }

  .picture-vrt {
    height: 60vh;
    margin-left: 20vw;
  }

  @media(max-aspect-ratio: 1/1) {
    .work-softbox {
      display: none;
    }
  }
</style>
