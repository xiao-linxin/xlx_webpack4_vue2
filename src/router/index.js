/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
Vue.use(Router)

const routes = [
  { path: '/', component: Layout, redirect: {name: 'page_list'},
    children: [
      {path: '/', name: 'page_list', component: () => import('@/components/page_list')},
      {path: '/post/:hash', name: 'page_post', component: () => import('@/components/page_post')}
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})