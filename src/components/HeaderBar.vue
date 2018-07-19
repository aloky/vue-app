<template>
  <header>
    <div class="header-top">
      <div class="container flex-between">
        <div class="logo">
          <router-link to="/">aloky-app</router-link>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <div class="container">
        <at-menu mode="horizontal">
          <router-link
            class="at-menu__item"
            to="/change_log"
            tag="li"
            exact-active-class="at-menu__item--active"
          >
            <div class="at-menu__item-link">
              <i class="icon icon-settings"></i>
              Change Log
            </div>
          </router-link>
          <router-link
            class="at-menu__item"
            to="/update_items"
            tag="li"
            exact-active-class="at-menu__item--active"
          >
            <div class="at-menu__item-link">
              <i class="icon icon-package"></i>
              Update items
            </div>
          </router-link>
        </at-menu>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    border-bottom: 1px solid #ededed;
    white-space: nowrap;
    .header-top {
      border-bottom: 1px solid #ededed;
    }
    .header-menu {
      .at-menu {
        overflow-x: auto;
        display: flex;
      }
    }
    .logo {
      padding: 15px;
      a {
        color: #2C405A;
        font-size: 20px;
        line-height: 40px;
        font-weight: bold;
      }
    }
    .at-menu--horizontal {
      border-bottom: none;
    }
  }
</style>
