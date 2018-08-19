<template lang="html">
  <div class="mbpl container">
    <div class="mbpl flow">

    </div>
    <div class="mbpl static">

    </div>
  </div>
</template>

<script>
import common from 'src/app.js'

export default {

}
</script>

<style lang="scss">
  .mbpl {
    width: 100%;
    border: 1px solid;
  }
  .container {
    position: absolute;
    top: 50vh;
    height: 200px;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
  .static {
    flex: 1;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 10vw;
  }
  .flow {
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>
