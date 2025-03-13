import Superhero from '@/views/SuperheroViews.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/superhero',
      name: 'superhero',
      component: () => import('../views/SuperheroViews.vue'),
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue'),
    },
    {
      path: '/superhero/:name',
      name: 'super',
      component: () => import('../views/Super.vue'),
    },
  ],
})

export default router
