import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import Main from "@/views/Main.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import DashboardGame from "@/views/DashboardGame.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,

    children: [
      {
        path: '',
        component:  Main,
      }
    ]
  },
  {
    path: '/dashboard',
    component: DashboardLayout,

    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: '/dashboard/game',
        component: DashboardGame,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
