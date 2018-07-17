<template>
  <div>
    <h1>Change log</h1>
    <div class="container">
      <div class="content-change-log">
        <at-timeline pending>
          <at-timeline-item color="red">
            <i slot="dot" class="icon icon-package"></i>
            <p>Install framework</p>
            <small class="date">17.07.18</small>
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

<style lang="scss">
  .at-timeline {
    .at-timeline__content {
      top: -3px;
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