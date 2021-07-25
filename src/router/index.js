import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import account from '@/views/account.vue'
import chat from '@/views/chat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
   path: '/account',
   component: account
  },
  {
    path: '/chat',
    component: chat
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
