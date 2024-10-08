import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/life-cycle",
      name: "life-cycle",
      component: () => import("../views/LifeCycle.vue"),
    },
    {
      path: "/users",
      name: "Users",
      meta: {
        title: "Users",
      },
      component: () => import("../views/Users.vue"),
    },
    {
      path: "/users/:userId",
      name: "UserInfo",
      component: () => import("../views/UserInfo.vue"),
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("../views/Form.vue"),
    },
    {
      path: "/component",
      name: "component",
      component: () => import("../views/Component.vue"),
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   console.log(from);
//   console.log(to);
//   next();
// });
// router.afterEach((to, from, next) => {
//   console.log(from);
//   console.log(to);
//   next();
// });
export default router;
