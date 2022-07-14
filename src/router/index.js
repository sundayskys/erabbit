import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/Home'
import category from '../views/category'
import SubCategory from '@/views/category/sub'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: category},
      { path: '/category/sub/:id', component: SubCategory }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
