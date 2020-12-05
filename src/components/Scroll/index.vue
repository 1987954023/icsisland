<template>
  <div ref="icon">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      bscroll: null
    }
  },
  mounted () {
    /*eslint-disable*/
    this.bscroll = new BScroll(this.$refs.icon, {
      click: true,
      probeType: 3
    });
    this.bscroll.scrollTo(0, 0);
    this.bscroll.on("scroll", aaa => {
      this.$emit("scrolls", aaa);
    });
    /* eslint-enable */
  }
}
</script>

<style>
</style>
