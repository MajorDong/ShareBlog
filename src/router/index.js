import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Detail from '../views/detail'
import Create from '../views/create'
import Edit from '../views/edit'
import User from '../views/user'
import My from '../views/my'
import Login from '../views/login'
import Register from '../views/register'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/detail:blogId',
    name: 'detail',
    component: Detail
  },
  {
    path: '/create',
    name: 'cerate',
    component: Create,
    meta: { requiresAuth: true}
  },
  {
    path: '/edit/:blogId',
    name: 'edit',
    component: Edit,
    meta: { requiresAuth: true}
  },
  {
    path: '/user:userId',
    name: 'user',
    component: User
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    meta: { requiresAuth: true}
  },
  
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then((isLogin) =>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
    
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
