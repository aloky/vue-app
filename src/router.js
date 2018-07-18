import Vue from 'vue'
import Router from 'vue-router'

// pages
import HomePage from './views/HomePage.vue'
import ChangeLogPage from './views/ChangeLogPage.vue'
import UpdateItemsPage from './views/UpdateItemsPage.vue'

// components
import ItemForm from './components/ItemForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/change_log',
      name: 'ChangeLogPage',
      component: ChangeLogPage
    },
    {
      path: '/update_items',
      name: 'UpdateItemsPage',
      component: UpdateItemsPage,
      children:[
        {
          path: 'new',
          name: 'NewItem',
          component: ItemForm,
        },
        {
          path: 'edit/:id',
          name: 'EditItem',
          component: ItemForm,
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
