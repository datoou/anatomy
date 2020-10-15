import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/login/index";
import AccountLogin from '../components/login/accountLogin'
import wxLogin from "../components/login/wxLogin";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {path: '/', redirect: '/login'},
  {path:'/login', component:Login},
  {path:'/accountlogin', component:AccountLogin},
  {path:'/wxlogin',component:wxLogin},
  { path:'/home',
    component:Home,

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
