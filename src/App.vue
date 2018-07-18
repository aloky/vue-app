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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
    .content {
      flex-grow: 1;
    }
  }
</style>
