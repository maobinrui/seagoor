

import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import Home from "../components/home";//home 页
import Range from "../components/range";// 分类页
import Detail from "../components/detail";//注册
import Shoppingcar from "../components/shoppingcar";//购物车
import Personal from "../components/personal";//个人中心
import Login from "../components/login";//登录

import Register from "../components/register";//注册





import Range1 from "../components/range1";
import Range2 from "../components/range2";

Vue.use(Router)

const router =  new Router({
  mode:"hash",

  routes: [
    {
        path:"/home",
        name:'home',
        component:Home
    },
    {
        path:"/range",
        component:Range,
        children:[
            {
                path:"range1",
                component:Range1
            },
            {
                path:"range2",
                component:Range2
            },
            {
                path:"/", //通配符
                redirect:"/range/range1"

            }
        ]
    },
    {
        path:"/shoppingcar",
        component:Shoppingcar,
    },
    {
        path:"/personal",
        component:Personal
    },
    {
        path:"/login",
        component:Login
    },
    {
        name:'register',
        path:"/register",
        component:Register
    },
    {
        name:"detail",
        path:"/detail/:sku/:tid",
        component:Detail
    },
    // {
    //     path:"*", //通配符
    //     redirect:"/home"
    // }
  ]
})
export default router;

