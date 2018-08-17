<template>
  <header class="header">
    <div class="header-top">
      <div class="container flex-between">
        <div class="logo">
          <router-link :to="{ name: 'HomePage' }">aloky-app</router-link>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <div class="container">
        <at-menu mode="horizontal">
          <router-link
            class="at-menu__item"
            :to="{ name: 'ChangeLogPage' }"
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
            :to="{ name: 'UpdateItemsPage' }"
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
