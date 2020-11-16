<template>
   <div v-show="visible" @click="goTop" class = "gotop">
      点我
      </div>
</template>
<script>
export default {
  name: 'gotop',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    goTop () {
      this.$el.parentElement.scrollTop = 0
    }
  }

}
</script>

<style>

</style>
