import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import Table from '@/components/table'
import Tabs from '@/components/tabs'
import Charts from '@/components/echarts'
import Vuex from '@/components/Vuex'
import Element from '@/components/Element'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/index',
      component: Index,
      name: 'index',
      children: [
        {
          path: 'table',
          component: Table,
          name: 'table'
        },
        {
          path: 'tabs',
          component: Tabs,
          name: 'tabs'
        },
        {
          path: 'charts',
          component: Charts,
          name: 'charts'
        },
        {
          path: 'vuex',
          component: Vuex,
          name: 'Vuex'
        },
        {
          path: 'element',
          component: Element,
          name: 'Element'
        }
      ]
    },
    {
      path: '*',
      component: Error,
      name: 'error'
    }
  ]
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
