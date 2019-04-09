import Vue from 'vue'
import Router from 'vue-router'
import Server from '@/components/server'
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
import Upload from '@/components/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      name: 'login'
    },
    {
      path: '/server',
      component: Server,
      name: 'server'
    },
    {
      path: '/user',
      component: User,
      name: 'user'
    },
    {
      path: '/table',
      component: Table,
      name: 'table'
    },
    {
      path: '/progress',
      component: Progress,
      name: 'progress'
    },
    {
      path: '/dynamic',
      component: DynamicValidator,
      name: 'dynamic'
    },
    {
      path: '/transfer',
      component: Transfer,
      name: 'transfer'
    },
    {
      path: '/form',
      component: Form,
      name: 'form'
    },
    {
      path: '/button',
      component: Button,
      name: 'button'
    },
    {
      path: '/tabs',
      component: Tabs,
      name: 'tabs'
    },
    {
      path: '/carousel',
      component: Carousel,
      name: 'carousel'
    },
    {
      path: '/charts',
      component: Charts,
      name: 'charts'
    },
    {
      path: '/pagination',
      component: Pagination,
      name: 'pagination'
    },
    {
      path: '/upload',
      component: Upload,
      name: 'upload'
    }
  ]
})
