import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Products from '@/views/Products.vue';
import Team from '@/views/Team.vue';
import Login from '@/views/Login.vue';



const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/login',
    name: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router