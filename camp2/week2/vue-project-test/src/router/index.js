import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/ToDoList.vue')
    },
    {
      path: '/usersinfo/:id',
      name: 'usersInfo',
      component: () => import('../views/UsersInfo.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormPage.vue')
    },
    {
      path: '/componants',
      name: 'componants',
      component: () => import('../views/ComponantsParent.vue')
    },
    {
      path: '/todolist',
      name: 'toDoList',
      component: () => import('../views/ToDoList.vue')
    }
  ]
})

export default router
