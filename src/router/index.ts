import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import Home from '../pages/home/main.vue'
import Works from '../pages/works/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return nextTick().then(() => ({ el: to.hash, behavior: 'smooth' as const }))
    }
    return { top: 0 }
  },
  routes: [
    { path: '/', component: Home },
    { path: '/works', component: Works },
  ],
})

export default router
