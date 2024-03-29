import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {
  Button, Select, Header, Main, Footer, Container, Menu, Submenu, MenuItem, Carousel, CarouselItem, Tabs, TabPane,
  Backtop, Popover, Row, Col, Card, Pagination, Divider, Form, FormItem, Input, Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import { Swipe, SwipeItem,Loading,Overlay,Field } from 'vant';
// 引入动画样式
import wow from 'wowjs'
import 'wowjs/css/libs/animate.css'



axios.defaults.baseURL = ''
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$wow = wow
Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Select)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Backtop)
Vue.use(Popover)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Divider)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)


Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Loading);
Vue.use(Overlay);
Vue.use(Field);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
