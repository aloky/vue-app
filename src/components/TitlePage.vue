<template>
  <div class="title-page">
    <component :is="tag">
      {{ title }}
    </component>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      tag: {
        type: String,
        default: 'h1'
      }
    }
  }
</script>

<style lang="scss">
  .title-page {
    margin: 20px 0;
    text-align: center;
  }
</style>
