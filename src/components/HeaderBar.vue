<template>
  <header>
    <div class="logo">
      <router-link
        class="at-btn at-btn--default"
        tag="button"
        to="/"
      >
        <i class="at-btn__icon icon icon-home"></i>
      </router-link>
    </div>
    <at-menu mode="horizontal">
      <router-link
        class="at-menu__item"
        to="/changelog"
        tag="li"
        exact-active-class="at-menu__item--active"
      >
        <div class="at-menu__item-link">
          <i class="icon icon-settings"></i>
          Change Log
        </div>
      </router-link>
    </at-menu>
  </header>
</template>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #e2ecf4;
    height: 49px;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    .at-menu--horizontal {
      border-bottom: none;
    }
    .logo {
      display: flex;
      align-items: center;
      padding: 5px;
      height: 100%;
    }
  }
</style>
