<template lang="html">
  <div class="text-container">
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
  $slide-distance: 200%;
  $slide-out-duration: .9s;

  .text-block {
    position: absolute;
    top: 0;
    right: 0;
    width: 25vw;
    float: right;
    margin: 0 7vw;

    @media(max-aspect-ratio: 1/1) {
      position: initial;
      top: auto;
      right: auto;
      width: 35vw;
      float: none;
      margin: 0 5vw;
      padding: 5vh 0;
    }

    .work-title {
      font-family: 'Open-Sans-ExtraBold';
      font-size: 3.4vw;
      color: white;
      width: 100%;
      margin: 0 0 2vh 0;
      letter-spacing: 5px;
      text-align: right;

      @media(max-aspect-ratio: 1/1) {
        text-align: left;
        font-size: 5vw;
        letter-spacing: 2px;
        margin-left: 5vw;
      }
    }

    .divider {
      float: right;
      display: block;
      background-color: white;

      @media(max-aspect-ratio: 1/1) {
        float: left;
        margin-left: 5vw;
      }
    }

    .work-text {
      font-family: 'Open-Sans-Light';
      font-size: 1.1vw;
      color: white;
      width: 100%;
      letter-spacing: 0.35px;
      margin-top: 6vh;

      @media(max-aspect-ratio: 1/1) {
        font-size: 4vw;
        width: 55vw;
        margin-left: 20vw;
        color: black;
      }
    }
  }
</style>
