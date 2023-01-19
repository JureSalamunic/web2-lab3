import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'
import QuoteOfTheDay from '../views/QuoteOfTheDay.vue'
import HoT from '../views/HoT.vue'
import Blog from '../views/Blog.vue'

// Vue.component("PageNotFound", {
//   template: "",
//   created: function() {
//       // Redirect outside the app using plain old javascript
//       window.location.href = "/404_page.html";
//   }
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/quote',
      name: 'quote',
      component: QuoteOfTheDay
    },
    {
      path: '/hot',
      name: 'hot',
      component: HoT
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: "/:pathMatch(.*)*", component: PageNotFound, }
  ]
})

export default router
