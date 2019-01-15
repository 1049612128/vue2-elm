import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
//const home = r => require.ensure([],()=>r(require("../pages/home/home")),home)
import home from '@/pages/home/home'
import login from '@/pages/login/login'
import forget from '@/pages/forget/forget'
import city from '@/pages/city/city'
import msite from '@/pages/msite/msite'
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
    //地址为空时跳转home页面
    {
      path:'',
      redirect:'/home',
      
    },{
       //首页城市列表页
      path:'/home',
      component:home
    },{
      //登录注册页
      path:'/login',
      name:"Login",
      component:login
    },{
      //修改密码
      path:'/forget',
      name:'Forget',
      component:forget
    },{
      //当前选择城市页
      path:'/city/:cityid',
      component:city
    },{
      path:'/msite',
      component:msite,
      meta:{keepAlive:true}
    }
  ]
}]