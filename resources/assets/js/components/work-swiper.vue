<template lang="html">
  <div class="swiper-container">
    <swiper :options="swipeCustoms" ref="workSwiper" @slideChange="switchCard">
        <swiper-slide v-for="work in orderedWorks" :key="work.page">
          <img :class="[work.vertical ? styles.vertical: styles.horizontal, styles.picture]" :src="work.source"/>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {common} from 'src/app.js';
import _ from 'lodash';

export default {
  data() {
    return {
      shared: common,
      activeSet: '',
      swipeCustoms: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 40,
        roundLengths: true,
        grabCursor: true,
        preloadImages: true
      },
      image: '',
      works: [],
      orderedWorks: [],
      styles: {
        picture: 'swiper-image',
        vertical: 'swiper-slide-vertical',
        horizontal: 'swiper-slide-horizontal'
      }
    }
  },

  created() {
    for(let i = 0; i < this.shared.complete; i++) {
      this.axios.get('/v1/works/' + i + '/image')
        .then((response) => {
          this.image = require('assets/images/' + response.data[0]);
          this.works.push(
            { 'page': i, 'source': this.image, 'vertical': response.data[1] }
          )
          this.sortWorks();
        });
    }
  },

  computed: {
    swiper() {
      return this.$refs.workSwiper.swiper;
    },
    active() {
      return this.shared.active
    }
  },

  watch: {
    active() {
      this.swiper.slideTo(this.shared.active)
    }
  },

  methods: {
    sortWorks() {
      this.orderedWorks = _.sortBy(this.works, ['page'])
    },
    switchCard() {
      this.shared.active = this.swiper.activeIndex;
      console.log(this.swiper.activeIndex);
      Event.$emit('swipe');
    }
  }
}
</script>

<style lang="scss">
  @media(min-aspect-ratio: 1/1) {
    .swiper-container {
      display: none;
    }
  }

  .swiper-image {
    width: 100%;
    box-shadow: 0 5px 25px 0 rgba(118, 118, 118, 0.5);
  }

  .swiper-container {
    padding: 1.5vh 0;
  }

  .swiper-slide {
    width: 80vw;
  }

  .swiper-slide-vertical {
      width: 40vw;
      margin-left: 20vw;
  }
</style>
