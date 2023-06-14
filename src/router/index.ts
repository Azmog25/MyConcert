import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/Login/LoginPage.vue'
import UserPage from '../views/User/UserPage.vue'
import RegisterPage from '../views/Register/RegisterPage.vue'
import AdminPage from '../views/Admin/AdminPage.vue'
import AddConcertPage from '../views/Concert/AddConcertPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/user',
    component: UserPage
  },
  {
    path: '/addConcert',
    component: AddConcertPage
  },
  {
    path: '/admin',
    component: AdminPage
  },
  {
    path: '/register',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
