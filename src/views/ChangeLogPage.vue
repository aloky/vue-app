<template>
  <div>
    <title-page title="Change log" />
    <div class="container">
      <div class="content-change-log">
        <at-timeline>
          <at-timeline-item color="green">
            <i slot="dot" class="icon icon-file-text"></i>
            <p>Add Update items page</p>
            <small class="date">19.07.18</small>
            <div class="description">
              Functional
              <ul>
                <li>Add</li>
                <li>Edit</li>
                <li>Delete</li>
              </ul>
            </div>
          </at-timeline-item>
          <at-timeline-item color="red">
            <i slot="dot" class="icon icon-package"></i>
            <p>Install framework</p>
            <small class="date">17.07.18</small>
            <div class="description">
              Install <a href="https://at-ui.github.io/at-ui/#/en" target="_blank">AT-UI</a> framework
            </div>
          </at-timeline-item>
          <at-timeline-item color="green">
            <i slot="dot" class="icon icon-settings"></i>
            <p>Vue init</p>
            <small class="date">17.07.18</small>
          </at-timeline-item>
        </at-timeline>
      </div>
    </div>
  </div>
</template>

<script>
  import TitlePage from '@/components/TitlePage.vue'
  
  export default {
    components: { TitlePage }
  }
</script>

<style lang="scss">
  .at-timeline {
    .at-timeline__content {
      top: -3px;
    }
    .description {
      margin-top: 5px;
      padding: 15px;
      border-radius: 5px;
      background-color: #f5f5f5;
      ul {
        padding: 5px;
        list-style: circle inside;
      }
    }
  }
  .content-change-log {
    width: 100%;
    padding: 20px;
  }
  .date {
    padding: 2px 5px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }
</style>