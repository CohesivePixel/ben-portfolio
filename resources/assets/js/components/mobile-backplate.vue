<template lang="html">
  <div class="mbpl container" :style="boxLines">
    <div class="mbpl flow">

    </div>
    <div class="mbpl static">
      <!-- <svg width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMax">
        <polygon points="100,100 100,0 60,0 0,100" style="color:red"></polygon>
      </svg> -->
    </div>
  </div>
</template>

<script>
import common from 'src/app.js'

export default {
  data() {
    return {
      boxLines: {
        height: '600px'
      }
    }
  }
}
</script>

<style lang="scss">
  .mbpl {
    width: 100%;
  }
  .container {
    position: absolute;
    top: 65vw;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    @media(max-width: 496px) {
      top: 70vw;
    }
  }
  .static {
    flex: 1;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 30vw;
  }
  .flow {
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>
