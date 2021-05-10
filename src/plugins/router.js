import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/views/Index.vue'
import Products from '@/views/Products.vue'

const routes = [
  {
    path: '/',
    component: Index
  }, {
    path: '/products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
