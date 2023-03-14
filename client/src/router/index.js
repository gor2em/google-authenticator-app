import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";
const routes = [
  {
    name: "login",
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuth = authStore.isAuth;

  const authNotRequiredRoutes = ["login"];

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && isAuth) {
    next({ name: "home" });
  }

  const authRequiredRoutes = ["home"];

  if (authRequiredRoutes.indexOf(to.name) > -1)
    isAuth ? next() : next({ name: "login" });
  else next();

});

export default router;
