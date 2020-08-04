import Vue from 'vue'
import VueRouter from 'vue-router'

import ExampleComponent from '@/components/ExampleComponent.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import store from '@/store/index.js'


const routes = [
  {path: '*', component: ExampleComponent},
  {path:'/login', name:'login', component: Login},
  {path:'/register', name:'register', component: Register}
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return {x: 0, y: 0} },
  mode: 'history',
  routes
})


const authExcludedRoutes = [
  // Include Routes that SHOULD NOT check for authorization here
  'login',
  'register'
]

router.beforeEach((to, from, next) => {
  if (store.state.auth.loggedIn === false && !authExcludedRoutes.includes(to.name)) {
      next('/login')
  } else {
      next()
  }
})


export default router
