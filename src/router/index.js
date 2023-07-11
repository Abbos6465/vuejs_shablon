import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : "/",
      name : "MainLayout",
      component : () => import("@/layouts/MainLayout.vue"),
      redirect : {name : "Home"},
      children : [
        {

        }
      ]
    },
    {
      path : "/login",
      name : "AuthLayout",
      component : () => import("@/layouts/AuthLayout.vue"),
      redirect : {name : "Login"},
      children : [
        {
          
        }
      ]
    }
  ]
})

export default router;
