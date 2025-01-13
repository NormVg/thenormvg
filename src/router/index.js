import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlePage from '@/views/ArticlePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Check if there's a hash in the URL
    if (to.hash) {
      return {
        el: to.hash, // Scroll to the element with the id matching the hash
        behavior: 'smooth', // Optional, for smooth scrolling
      }
    }
    return savedPosition || { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/article/:id',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArticlePage,
    },
    {
      path: '/design',
      redirect: '/', // Redirect to home when no id is provided
    },
    {
      path: '/design/:id',
      name: 'design',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArticlePage,
    },
    {
      path: '/article',
      redirect: '/', // Redirect to home when no id is provided
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: NotFoundView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
