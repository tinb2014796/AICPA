import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Team from '@/views/Team.vue';
import Pay from '@/views/Customer/Pay.vue';
import Chart from '@/views/Admin/Chart.vue';
import Products from '@/views/Admin/Products.vue';
import AddProducts from '@/views/Admin/AddProducts.vue';
import ProductCus from '@/views/Customer/Products.vue';
import AdminDetail from '@/views/Admin/AdminDetail.vue';
import Edit from '@/views/Admin/EditProduct.vue'
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    props: true,
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/add',
    name: 'add',
    component: AddProducts
  },
  {
    path: '/productdetail/:id',
    name: 'productdetail',
    component: () => import("@/views/Customer/Productdetail.vue"),
    props: true,
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
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
  },
  {
    path: '/chart',
    name: 'chart',
    component: Chart,
  },
  {
    path: '/product-cus',
    name: 'product-cus',
    component: ProductCus,
    props: true,
  },
  {
    path: '/admindetail/:id',
    name: 'admindetail',
    component: AdminDetail,
    props: true,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router