import Vue from 'vue'
import Router from 'vue-router'
import Server from '@/components/server'
import Index from '@/components/index'
import Login from '@/components/login'
import User from '@/components/user'
import Table from '@/components/table'
import Progress from '@/components/progress'
import DynamicValidator from '@/components/DynamicValidator'
import Transfer from '@/components/transfer'
import Form from '@/components/form'
import Button from '@/components/button'
import Tabs from '@/components/tabs'
import Carousel from '@/components/carousel'
import Charts from '@/components/echarts'
import Pagination from '@/components/pagination'
import Vuex from '@/components/Vuex'
import Plain from '@/components/plain'
import Round from '@/components/round'
import Error from '@/components/error'

Vue.use(Router)

const routes = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
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
          path: 'server',
          component: Server,
          name: 'server'
        },
        {
          path: 'user',
          component: User,
          name: 'user'
        },
        {
          path: 'table',
          component: Table,
          name: 'table'
        },
        {
          path: 'progress',
          component: Progress,
          name: 'progress'
        },
        {
          path: 'dynamic',
          component: DynamicValidator,
          name: 'dynamic'
        },
        {
          path: 'transfer',
          component: Transfer,
          name: 'transfer'
        },
        {
          path: 'form',
          component: Form,
          name: 'form'
        },
        {
          path: 'button',
          component: Button,
          name: 'button',
          children:[
            {
              path: 'plain',
              component: Plain,
              name: 'plain'
            },{
              path: 'round',
              component: Round,
              name: 'round'
            }
          ]
        },
        {
          path: 'tabs',
          component: Tabs,
          name: 'tabs'
        },
        {
          path: 'carousel',
          component: Carousel,
          name: 'carousel'
        },
        {
          path: 'charts',
          component: Charts,
          name: 'charts'
        },
        {
          path: 'pagination',
          component: Pagination,
          name: 'pagination'
        },
        {
          path: 'vuex',
          component: Vuex,
          name: 'Vuex'
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

routes.beforeEach((to, from, next) => {
  if(localStorage.getItem('username') === null && to.path != '/login'){
    next('/login');
  }else{
    next();
  }
})

export default routes
