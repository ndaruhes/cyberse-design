import {
  createRouter,
  createWebHistory
} from 'vue-router'
const routes = [{
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import( /* webpackChunkName: "404" */ '@/components/errors/404.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '@/views/Home.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "About" */ '@/views/About.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },

  // MAIN CONTENT
  {
    path: '/explore',
    name: 'Explore',
    component: () => import( /* webpackChunkName: "Explore" */ '@/views/Explore.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import( /* webpackChunkName: "Intro" */ '@/views/Intro.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import( /* webpackChunkName: "Community" */ '@/views/Community.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
  {
    path: '/history',
    name: 'History',
    component: () => import( /* webpackChunkName: "History" */ '@/views/History.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import( /* webpackChunkName: "Technology" */ '@/views/Technology.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import( /* webpackChunkName: "Activities" */ '@/views/Activities.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "Activities" */ '@/views/Contact.vue'),
    beforeEnter: () => {
      window.scrollTo(0, 0)
    }
  },
]

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router;