import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Usage from '@/pages/Usage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/usage', component: Usage }
  ]
})
