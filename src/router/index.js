//ルーティングの管理プログラム
//ブラウザでアクセスするとこの表示場所を指定
//ページのアドレスを作っている
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import account from '@/views/Account.vue'
import Profile from '@/views/Profile.vue'

=======
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import chat from '@/views/chat.vue'
import Account from '@/views/account.vue'
import Search from '@/components/search.vue'
import Result from '@/components/result_page.vue'
>>>>>>> upstream/master

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    component: chat
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
<<<<<<< HEAD
    path:'/account',
    component: account
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  }
=======
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path : '/account',
    name : 'account',
    component : Account
  },
  {
    path : '/search',
    name : 'search',
    component : Search
  },
  {
    path : '/result',
    name : 'result',
    component : Result
  },
>>>>>>> upstream/master
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
