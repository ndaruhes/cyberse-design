import {
    createRouter,
    createWebHistory
} from 'vue-router'
import store from '@/store'

const routes = [
    {
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
]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes
})

export default router