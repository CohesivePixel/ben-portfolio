<template lang="html">
  <div class="social-container">
    <img v-for="item of iconList" class="social-icon" :src="buildPath(item)"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverOver: false,
      iconList: [
        'facebook.svg',
        'instagram.svg',
        'twitter.svg',
        'whatsapp.svg',
        'youtube.svg'
      ]
    }
  },

  methods: {
    buildPath(name) {
      return require('assets/icons/' + name);
    }
  }
}
</script>

<style lang="scss">
  $size: 3vw;
  $extended-size: 4vw;

  .social-container {
    position: absolute;
    right: 10vw;
    bottom: 5vh;
  }

  .social-icon {
    width: $size;
    height: $size;
    margin: 0 1.5vw;
    transition: .3s cubic-bezier(.77,0,.18,1);
  }

  .sized-icon {
    @extend .social-icon;
    width: $extended-size;
    height: $extended-size;
  }

  @media(max-aspect-ratio: 1/1) {
    .social-container {
      display: none;
    }
  }
</style>
