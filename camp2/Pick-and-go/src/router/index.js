import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PickAndGo from '../views/PickAndGo.vue'
import RestaurantMenu from '../components/RestaurantMenu.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/pickandgo',
        name: 'pickAndGo',
        component: PickAndGo,
    },
    {
        path: '/menu/:restaurant',
        name: 'restaurant-menu',
        component: RestaurantMenu,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
