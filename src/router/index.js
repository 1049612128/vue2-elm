import Vue from 'vue'
import Router from 'vue-router'
//const home = r => require.ensure([],()=>r(require("../pages/home/home")),home)
import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    }
  ]
})
