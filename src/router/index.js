import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
//const home = r => require.ensure([],()=>r(require("../pages/home/home")),home)
import home from '@/pages/home/home'
import login from '@/pages/login/login'
import forget from '@/pages/forget/forget'
import city from '@/pages/city/city'
import msite from '@/pages/msite/msite'
import food from '@/pages/food/food'
import shop from '@/pages/shop/shop'
import foodDetail from '@/pages/shop/children/foodDetail'
import shopDetail from '@/pages/shop/children/shopDetail'
import shopSafe from '@/pages/shop/children/children/shopSafe'
import Profile from '@/pages/profile/profile'
import info from '@/pages/profile/children/info'
import setusername from '@/pages/profile/children/children/setusername'
import address from '@/pages/profile/children/children/address'
import add from '@/pages/profile/children/children/children/add'
import addDetail from '@/pages/profile/children/children/children/children/addDetail'
import search from '@/pages/search/search'
import balance from '@/pages/balance/balance'
import balanceDetail from '@/pages/balance/children/detail'
import benefit from '@/pages/benefit/benefit'
import commend from '@/pages/benefit/children/commend'
import coupon from '@/pages/benefit/children/coupon'
import exchange from '@/pages/benefit/children/exchange'
import hbDescription from '@/pages/benefit/children/hbDescription'
import hbHistory from '@/pages/benefit/children/hbHistory'
import points from '@/pages/points/points'
import pointsDetail from '@/pages/points/children/detail'
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
    },{
       //特色商铺列表页
       path:'/food',
       component:food,
    },//商铺详情页
    {
        path: '/shop',
        component: shop,
        children: [{
            path: 'foodDetail', //食品详情页
            component: foodDetail,
        }, {
            path: 'shopDetail', //商铺详情页
            component: shopDetail,
            children: [{
                path: 'shopSafe', //商铺安全认证页
                component: shopSafe,
            }, ]
        }]
    },
    //个人信息
    {
      path:'/profile',
      component:Profile,
      children:[{
        path:'info',//个人信息详情
        component:info,
        children:[{
          path:'setusername',
          component:setusername
        },{
          path:'address',
          component:address,
          children:[{
            path:'add',
            component:add,
            children:[{
              path:'addDetail',
              component:addDetail
            }]
          }]
        }]
      }]
    },
    {
      //搜索
      path:'/search/:geohash',
      component:search
    },
   //余额
   {
     path:'/balance',
     component:balance,
     children:[{
       path:'detail',
       component:balanceDetail
     }]
   },{
      //我的优惠页
      path:'benefit',
      component:benefit,
      children:[{
        path:'commend', //推荐有奖
        component:commend
      },{
        path:'coupon',//代金券说明
        component:coupon
      },{
        path:'exchange', //兑换红包
        component:exchange
      },{
        path:'hbDescription',//红包说明
        component:hbDescription
      },{
        path:'hbHistory',//历史红包
        component:hbHistory
      }]
   },{
      //我的积分页
     path:"/points",
     component:points,
     children:[{
       path:'detail', //积分说明
       component:pointsDetail
     }]
   }
  ]
}]