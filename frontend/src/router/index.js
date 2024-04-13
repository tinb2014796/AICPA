import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Products from '@/views/Products.vue';
import Team from '@/views/Team.vue';



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
    path: '/add',
    name: 'add',
    component: () => import("@/views/AddProducts.vue")
  },
  {
    path: '/productdetail',
    name: 'productdetail',
    component: () => import("@/views/Customer/Productdetail.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("@/views/Customer/Cart.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Customer/Login.vue")
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("@/views/Customer/Signup.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router