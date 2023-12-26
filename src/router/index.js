import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/layouts/MainLoyout.vue";
import Main from "@/views/Main.vue";

const routes = [
  {
    path: '/',
    component: MainView,

    children: [
      {
        path: '',
        component:  Main,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
