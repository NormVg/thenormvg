import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorkView from '../views/WorkView.vue'
import ContactView from '../views/ContactView.vue'

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
      meta: {
        title: 'Vishnu Gupta | Full-Stack Developer & UI Designer',
        description: ' Vishnu Gupta (NormVg) — a 20-year-old Full-Stack Developer, UI Designer, and AI enthusiast. Founder of TheAlphaOnes.'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About | Vishnu Gupta',
        description: 'Learn more about Vishnu Gupta, his tech stack, experience, education, and journey as a software engineer and UI designer.'
      }
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
      meta: {
        title: 'Work & Projects | Vishnu Gupta',
        description: 'Explore the latest projects, work, and open-source contributions by Vishnu Gupta (NormVg), including TheAlphaOnes and Kraken Editor.'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact | Vishnu Gupta',
        description: 'Get in touch with Vishnu Gupta for freelance opportunities, collaborations, or just to say hi.'
      }
    }
  ],
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', to.meta.description);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', to.meta.description);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', to.meta.description);
  }
})

export default router
