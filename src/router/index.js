import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
//const home = r => require.ensure([],()=>r(require("../pages/home/home")),home)
import home from '@/pages/home/home'
import login from '@/pages/login/login'
import forget from '@/pages/forget/forget'
// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: home
//     }
//   ]
// })
export default [{
  path:'/',
  component:App,
  children:[
    {
      path:'',
      redirect:'/home',
      
    },{
      path:'/home',
      component:home
    },{
      path:'/login',
      name:"Login",
      component:login
    },{
      path:'/forget',
      name:'Forget',
      component:forget
    }
  ]
}]