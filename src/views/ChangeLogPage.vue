<template>
  <div>
    <title-page title="Change log" />
    <div class="container">
      <div class="content-change-log">
        <at-timeline>
          <at-timeline-item color="green">
            <i slot="dot" class="icon icon-file-text"></i>
            <p>Add View item page</p>
            <small class="date">17.08.18</small>
          </at-timeline-item>
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
