import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store/user'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Package from '../views/Package.vue'
import Attendance from '../views/Attendance.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/package', component: Package, meta: { requiresAuth: true } },
  { path: '/attendance', component: Attendance, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = !!userStore.user

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/signup') && isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
