import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const isAuthenticated = false

// 路由规则，配置路由
const routes = [
  {
    path:'/',
    //路由重定向，当用户访问根路径时，自动跳转到/login
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login/index.vue')
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('../views/Home/index.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
