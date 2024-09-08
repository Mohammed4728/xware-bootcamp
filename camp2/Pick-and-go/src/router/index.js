import { createRouter, createWebHistory } from 'vue-router'
import PickAndGo from '../views/PickAndGo.vue'
import RestaurantMenu from '../components/RestaurantMenu.vue'

const routes = [
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
