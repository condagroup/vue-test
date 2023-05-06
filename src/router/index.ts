// Composables
import { createRouter, createWebHistory } from 'vue-router'
import IndexVue from '@/views/Index.vue'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'Action',
        component: IndexVue
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
