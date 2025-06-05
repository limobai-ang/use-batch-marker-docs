import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/index.vue'
import Usage from '@/pages/usage/index.vue'

export default createRouter({
  history: createWebHistory('/use-batch-marker-docs/'),
  routes: [
    { path: '/', component: Home },
    { path: '/usage', component: Usage,
      redirect: 'usage/config-usage',
      children: [
        {
          path: 'config-usage',
          component: () => import('@/pages/usage/ConfigUsage.vue')
        },
         {
          path: 'config-options',
          component: () => import('@/pages/usage/ConfigOptions.vue')
        }
      ]
     }
  ]
})
