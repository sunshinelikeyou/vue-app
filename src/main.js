import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import { Tabbar, TabbarItem, Form, Field, Button } from "vant";
Vue.use(VueRouter).use(Tabbar).use(TabbarItem).use(Form).use(Field).use(Button)

import 'lib-flexible'
import '@/style/base.css'
import '@/style/index.scss'
Vue.config.productionTip = false
const router = new VueRouter({
  routes,
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
