import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/main.vue'
import Works from '../pages/works/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/works', component: Works },
  ],
})

export default router
