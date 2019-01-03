// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'
import {routerMode} from './config/env'
import store from './store'
import FastClick from 'fastclick'
if('addEventListener' in document){
  document.addEventListener('DoMContentLoaded',function(){
    FastClick.attach(document.body)
  },false)
}
Vue.config.productionTip = false
Vue.use(VueRouter)
const router =new VueRouter({
  routes,
  mode:routerMode,
  strict:process.env.NODE_ENV!=="product",
  scrollBehavior(to,from,savedPostion){
    if(savedPostion){
      return savedPostion
    }else{
      if(from.meta.keepAlive){
        from.meta.savedPosition=document.body.scrollTop;
      }
      return {x:0,y:to.meta.savedPosition||0}
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
