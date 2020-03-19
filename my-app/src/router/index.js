/*
 * @Autor: hjz
 * @Date: 2020-03-18 17:54:20
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-18 19:02:02
 * @Description: 路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// @ is an alias to /src
// 登录界面
const LoginPage = resolve => require(["@/pages/loginPage/LoginPage.vue"],resolve)
const Login = resolve => require(["@/pages/loginPage/Login.vue"],resolve)
const Register = resolve => require(["@/pages/loginPage/Register.vue"],resolve)
const FirstPage = resolve => require(["@/pages/loginPage/FirstPage.vue"],resolve)
// // 主内容模块
const Home = resolve => require(["@/pages/homePage/Home.vue"],resolve)
const WalkingCnt = resolve => require(["@/pages/homePage/WalkingCnt.vue"],resolve)
const WritingCnt = resolve => require(["@/pages/homePage/WritingCnt.vue"],resolve)
const AboutCnt = resolve => require(["@/pages/homePage/AboutCnt.vue"],resolve)


Vue.use(VueRouter)

// 逻辑是首先进入登录页面，主页是需要登录才能访问
// 主页中，包含多个内容模块，利用父子路由单页面切换。
const routes = [
  {
    path: '/',
    redirect : '/loginPage',
    component: LoginPage,
  },
  {
    path:'/loginPage',
    name:'loginPage',
    component:LoginPage,
    children:[
      
      {
        path:'/loginPage',
        name:'firstPage',
        component:FirstPage,
      },
      {
        path:'/loginPage/login',
        name:'login',
        component:Login,
      },
      {
        path:'/loginPage/register',
        name:'register',
        component:Register,
      },
      {
        path: '/loginPage*',
        redirect : '/loginPage',
      },
    ]
  },
  {
    path: '/home',
    redirect : '/home/walking',
    component: Home,
    children:[
      {
        path: '/home/walking',
        name: 'walking',
        meta: { title: "行走-移动端" },
        component: WalkingCnt,
      },
      {
        path: '/home/writing',
        name: 'writing',
        meta: { title: "行走-移动端" },
        component: WritingCnt,
      },
      {
        path: '/home/about',
        name: 'about',
        meta: { title: "行走-移动端" },
        component: AboutCnt,
      },
      {
        path: '/home*',
        redirect : '/home/walking',
      },
    ]
  },
  {
    path: '*',
    redirect : '/loginPage',
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     console.log(to.meta.title);
//     document.title = to.meta.title
//   }
//   next();
// })

export default router
