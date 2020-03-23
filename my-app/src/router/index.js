/*
 * @Autor: hjz
 * @Date: 2020-03-18 17:54:20
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 12:15:18
 * @Description: 路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// @ is an alias to /src
// 登录界面
const LoginPage = resolve => require(["@/pages/loginPage/LoginPage.vue"], resolve)
const Login = resolve => require(["@/pages/loginPage/Login.vue"], resolve)
const LoginFirstPage = resolve => require(["@/pages/loginPage/FirstPage.vue"], resolve)
// // 主内容模块
const Home = resolve => require(["@/pages/homePage/home/Home.vue"], resolve)
const WalkingCnt = resolve => require(["@/pages/homePage/WalkingCnt.vue"], resolve)
const CmtsCnt = resolve => require(["@/pages/homePage/CmtsCnt.vue"], resolve)
const AboutCnt = resolve => require(["@/pages/homePage/aboutCnt/AboutCnt.vue"], resolve)
// 个人主页模块
const AboutFirstPage = resolve => require(["@/pages/homePage/aboutCnt/FirstPage.vue"], resolve)
const Footprint = resolve => require(["@/pages/homePage/aboutCnt/Footprint.vue"], resolve)
const Moment = resolve => require(["@/pages/homePage/aboutCnt/Moment.vue"], resolve)

Vue.use(VueRouter)

// 逻辑是首先进入登录页面，主页是需要登录才能访问
// 主页中，包含多个内容模块，利用父子路由单页面切换。
const routes = [
  {
    path: '/',
    redirect: '/loginPage',
    component: LoginPage,
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    redirect: '/loginPage/firstPage',
    component: LoginPage,
    children: [
      {
        path: '/loginPage/firstPage',
        name: 'loginFirstPage',
        meta: { title: "行走-首页" },
        component: LoginFirstPage,
      },
      {
        path: '/loginPage/login',
        name: 'login',
        meta: { title: "行走-登录注册" },
        component: Login,
      },
      {
        path: '/loginPage*',
        redirect: '/loginPage/firstPage',
      },
    ]
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/walking',
    children: [
      {
        path: '/home/walking',
        name: 'walking',
        meta: { title: "行走-地图" },
        component: WalkingCnt,
      },
      {
        path: '/home/comments',
        name: 'comments',
        meta: { title: "行走-评论" },
        component: CmtsCnt,
      },
      {
        path: '/home/about',
        name: 'about',
        meta: { title: "行走-个人主页" },
        redirect: '/home/about/firstPage',
        component: AboutCnt,
        children:[
          {
            path: '/home/about/firstPage',
            name: 'aboutFirstPage',
            meta: { title: "行走-个人主页" },
            component: AboutFirstPage,
          },
          {
            path: '/home/about/moment',
            name: 'moment',
            meta: { title: "行走-动态" },
            component: Moment,
          },
          {
            path: '/home/about/footprint',
            name: 'footprint',
            meta: { title: "行走-足迹" },
            component: Footprint,
          },
          {
            path: '/home/about*',
            redirect: '/home/about/firstPage',
          },
        ]
      },
      {
        path: '/home*',
        redirect: '/home/walking',
      },
    ]
  },
  {
    path: '*',
    redirect: '/loginPage',
  }
]

const router = new VueRouter({
  mode: 'history', // TODO: url中不现实#,但是小心有坑。。。。
  base: process.env.BASE_URL,
  routes
})
// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    console.log(to.meta.title);
    document.title = to.meta.title
  }
  next();
})

export default router
