import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/login/index";
import AccountLogin from '../components/login/accountLogin'
import wxLogin from "../components/login/wxLogin";
import download from "../views/download";
import jiepouContent from '../components/jiepouContent/index'
import aboutUs from "../components/aboutUs/aboutUs";
import vesalService from "../views/VesalService";
import partner from "../views/Partner";
import dynamicMore from "../views/dynamicMore";
import mHome from  '../views/mHome.vue';


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
        path: '/m',
        redirect: '/mHome'
    },
    {
      path: '/login',
      component: Login}
      ,
    {
      path: '/accountlogin',
      component: AccountLogin
    },
    {
      path: '/wxlogin',
      component: wxLogin
    },
    {
        path: '/home',
        component: Home,
        redirect: '/home/jiepouContent',
        children: [
            {
                path: '/home/download',
                component: download
            },
            {
                path: '/home/jiepouContent',
                component: jiepouContent
            },
            {
                path:'/home/dynamicMore',
                component:dynamicMore
            },
            {
                path:'/home/aboutUs',
                component:aboutUs
            },
            {
                path:'/home/vesalService',
                component:vesalService
            },
            {
                path:'/home/partner',
                component:partner
            },

        ]
    },
    {
        path: '/mHome',
        component: mHome,
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router
