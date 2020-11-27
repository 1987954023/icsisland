<template>
  <div id="app">
    <transition name="app" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.app-enter-active {
  animation: move 0.66s;
}
.app-leave-active {
  animation: move 0.66s reverse;
}
@keyframes move {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
