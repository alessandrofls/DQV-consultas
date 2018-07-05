import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'login',
      component: Login
    },
    {
      path:'/layout',
      name: 'layout',
      component: Layout
    }
  ]
})
