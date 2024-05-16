import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import NewsView from '../views/NewsView.vue'
import RegisterView from '../views/RegisterView.vue'
import FeedView from '../views/FeedView.vue'
import SiginView from '../views/SiginView.vue'

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
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView
    },
    {
      path: '/sigin',
      name: 'sigin',
      component: SiginView
    }
  ]
})

export default router
