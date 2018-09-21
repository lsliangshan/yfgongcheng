<template>
  <div class="home_container" :style="homeStyles">
    YF 1
  </div>
</template>
<style scoped>
  .home_container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
</style>
<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    homeStyles () {
      return {
        minHeight: this.$store.state.bodyStyles.height + 'px'
      }
    }
  },
  components: {
  }
}
</script>
