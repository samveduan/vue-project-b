import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import Table from '@/components/table'
import Tabs from '@/components/tabs'
import Charts from '@/components/echarts'
import Vuex from '@/components/Vuex'
import Element from '@/components/Element'
import BootstrapTable from '@/components/BootstrapTable'
import Error from '@/components/Error'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta: {
        requireAuth: true
      }
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
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'table',
          component: Table,
          name: 'table',
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'tabs',
          component: Tabs,
          name: 'tabs',
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'charts',
          component: Charts,
          name: 'charts',
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'vuex',
          component: Vuex,
          name: 'Vuex',
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'element',
          component: Element,
          name: 'Element',
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'bootstrap-table',
          component: BootstrapTable,
          name: 'BootstrapTable',
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      component: Error,
      name: 'error'
    }
  ]
});

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token
      next()
    } else {
      // 未登录,跳转到登陆页面
      next({
        path: '/login'
      })
    }
  } else {
    if(sessionStorage.getItem("token") == 'true'){
      next('/index/table');
    }else{
      next();
    }
  }
});
