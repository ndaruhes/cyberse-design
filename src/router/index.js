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
          path: '/technology',
          name: 'Technology',
          component: () => import( /* webpackChunkName: "Technology" */ '@/views/Technology.vue'),
          beforeEnter: () => {
               window.scrollTo(0, 0)
          }
     },
     {
          path: '/benefit',
          name: 'Benefit',
          component: () => import( /* webpackChunkName: "Benefit" */ '@/views/Benefit.vue'),
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

export default router