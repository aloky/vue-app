<template>
  <div id="app">
    <header-bar/>
    <div class="content">
      <router-view/>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'
  import FooterBar from './components/FooterBar.vue'
  
  export default {
    components: { HeaderBar, FooterBar },
    beforeCreate () {
      this.$Loading.start()
    },
    created () {
      this.$Loading.finish()
    }
  }
</script>

<style lang="scss">
  @import "styles/styles.scss";
</style>
