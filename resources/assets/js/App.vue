<template>
  <div id="app" @wheel="slideNew($event)">
    <progress-bar :range="complete"></progress-bar>
    <work-swiper v-if="shared.portrait"></work-swiper>
    <author-name v-if="!shared.portrait"></author-name>
    <div class="content-container">
      <work-softbox v-if="!shared.portrait"></work-softbox>
      <text-block></text-block>
      <nav-buttons v-if="!shared.portrait"></nav-buttons>
    </div>
    <social-icons></social-icons>
    <coloured-backplate v-if="!shared.portrait"></coloured-backplate>
  </div>
</template>

<script>
import {common} from 'src/app.js';
import _ from 'lodash';

import ColouredBackplate from 'components/coloured-backplate.vue';
import AuthorName from 'components/author-name.vue';
import ProgressBar from 'components/progress-bar.vue';
import WorkSoftbox from 'components/work-softbox.vue';
import TextBlock from 'components/text-block.vue';
import SocialIcons from 'components/social-icons.vue';
import NavButtons from 'components/nav-buttons.vue';
import WorkSwiper from 'components/work-swiper.vue';
import MobileBackplate from 'components/mobile-backplate.vue';

const vibrant = require('node-vibrant');
const rgbHex = require('rgb-hex');

export default {
  name: 'app',

  components: {
      ColouredBackplate,
      AuthorName,
      ProgressBar,
      WorkSoftbox,
      TextBlock,
      SocialIcons,
      NavButtons,
      WorkSwiper,
      MobileBackplate
  },

  data () {
    return {
      shared: common,
      image: ''
    }
  },

  created() {
    this.defineColours()
    window.addEventListener('resize', (e) => {
      this.getAspectRatio();
    })
  },

  mounted() {
    this.getAspectRatio();
  },

  computed: {
    active() {
      return this.shared.active;
    },
    complete() {
      return this.shared.complete;
    }
  },

  watch: {
    active() {
      this.defineColours();
    }
  },

  methods: {
    slideNew: _.throttle(function(e) {
      if(e.deltaY < 0 && this.shared.active > 1) {
        this.shared.active -= 1
        Event.$emit('swipe');
      }
      if(e.deltaY > 0 && this.shared.active < this.shared.complete) {
        this.shared.active += 1
        Event.$emit('swipe');
      }
    }, 2000, {
      'leading': true,
      'trailing': false
    }),
    defineColours() {
      this.axios.get('/v1/works/' + this.shared.active + '/image').then(response => {
        this.image = require('assets/images/' + response.data[0])
        vibrant.from(this.image).getPalette()
          .then((palette) => {
            this.shared.colour.vibrant = '#' + this.getHex(palette.Vibrant);
            this.shared.colour.lightVibrant = palette.LightVibrant ? '#' + this.getHex(palette.LightVibrant) : '#fff'
            this.shared.colour.lightMuted = palette.LightMuted ? '#' + this.getHex(palette.LightMuted) : '#fff'
          })
      })
    },
    getHex(rgb) {
      const r = rgb._rgb[0];
      const g = rgb._rgb[1];
      const b = rgb._rgb[2];
      return rgbHex(r, g, b);
    },
    getAspectRatio() {
      if(window.innerWidth < window.innerHeight) {
        this.shared.portrait = true
      } else {
        this.shared.portrait = false;
      }
    }
  }
}
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
  .content-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-45%);
    overflow: hidden;
    padding: 10vh 0;

    @media(max-aspect-ratio: 1/1) {
      position: relative;
      width: 100%;
      top: auto;
      transform: none;
      padding: 0;
    }
  }
</style>
