import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: ()=>import('../views/Index.vue')
  },
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/logup',
    name: 'Logup',
    component:()=>import('../views/Logup.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
