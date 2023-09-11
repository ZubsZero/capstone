import { createRouter, createWebHistory } from 'vue-router'
import introView from '../views/intropageView.vue'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: introView
  },
  {
    path: '/home',
    name : 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/intropageView.vue')

  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsPageView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminPage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')

  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')

  },
  {
    path: '/product/:id?',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
