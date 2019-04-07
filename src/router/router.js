import Vue from 'vue'
import Router from 'vue-router'
import Server from '@/components/server'
import Login from '@/components/login'
import User from '@/components/user'
import Table from '@/components/table'
import Progress from '@/components/progress'
import Transfer from '@/components/transfer'

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
      path: '/transfer',
      component: Transfer,
      name: 'transfer'
    }
  ]
})
