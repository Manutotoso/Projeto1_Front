import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import RegisterView from '../views/RegisterView.vue'
import SiginView from '../views/SiginView.vue'
import MapView from '../views/MapView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (from.name) {
          history.pushState({}, '', to.fullPath);
          location.reload();
        } else {
          next();
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      
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
      path: '/sigin',
      name: 'sigin',
      component: SiginView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    }
  ]
})


const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const remove = onAuthStateChanged(
      getAuth(), 
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      alert("Sem acesso!");
      next("/");
    }
  } else {
    next();
  }
})

export default router
