import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import ChangeLogPage from './views/ChangeLogPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/changelog',
      name: 'ChangeLogPage',
      component: ChangeLogPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
