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
      title: {
        type: String,
        required: true
      },
      tag: {
        type: String,
        default: 'h1',
        required: false
      }
    }
  }
</script>

<style lang="scss">
  .title-page {
    text-align: center;
  }
</style>
