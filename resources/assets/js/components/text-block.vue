<template lang="html">
  <div class="elemental-cock">
    <div class="text-block" v-if="this.blockTitle">
      <transition name="title-slide">
        <h1 class="work-title" :style="styles.titleStyle" v-if="visible">{{ blockTitle }}</h1>
      </transition>
      <transition name="divider-slide">
        <object class="divider" width="35%" height="5px" :style="styles.dividerStyle" v-if="visible"></object>
      </transition>
      <transition name="description-slide" v-on:after-leave="slideIn">
        <p class="work-text" v-if="visible">{{ blockText }}</p>
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
      visible: 1,
      styles: {
        titleStyle: {
          color: ''
        },
        dividerStyle: {
          backgroundColor: ''
        }
      }
    }
  },

  computed: {
    active() {
      return this.shared.active;
    },
    portrait() {
      return this.shared.portrait;
    },
    vibrant() {
      return this.shared.colour.vibrant;
    }
  },

  watch: {
    vibrant() {
      if(this.portrait) {
        this.styles.dividerStyle.backgroundColor = this.shared.colour.vibrant;
      } else {
        this.styles.dividerStyle.backgroundColor = 'white';
      }
    },
    portrait() {
      if(this.portrait) {
        this.styles.titleStyle.color = '#545454'
        this.styles.dividerStyle.backgroundColor = this.shared.colour.vibrant;
      } else {
        this.styles.titleStyle.color = 'white'
        this.styles.dividerStyle.backgroundColor = 'white';
      }
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
      this.visible = 0;
    },
    slideIn() {
      this.getInfo();
      this.visible = 1;
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
    border: 1px solid;

    @media(max-aspect-ratio: 1/1) {
      position: relative;
      float: none;
      margin: auto;
      width: auto;
    }

    .work-title {
      font-family: 'Open-Sans-ExtraBold';
      font-size: 3.4vw;
      color: black;
      width: 100%;
      margin: 0 0 $divider-distance 0;
      letter-spacing: 5px;
      text-align: right;
    }

    .divider {
      border: 1px solid white;
      float: right;
      display: block;
      background-color: white;
    }

    .work-text {
      font-family: 'Open-Sans-Light';
      font-size: 1.1vw;
      color: white;
      width: 100%;
      letter-spacing: 0.35px;
      float: left;
      margin-top: $divider-distance;
    }
  }
</style>
