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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/create',
    name: 'cerate',
    component: Create
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },{
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
