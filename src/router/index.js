import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import AboutView from '../views/AboutView.vue'
import CoffeeView from '../views/CoffeeView.vue'
import TeaView from '../views/TeaView.vue'
import FreezeView from '../views/FreezeView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/products',
      component: ProductsView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/coffee',
      component: CoffeeView
    },
    {
      path: '/tea',
      component: TeaView
    },
    {
      path: '/freeze',
      component: FreezeView
    },
    {
      path: '/contact',
      component: ContactView
    },
    {
      path: '/product/:id',
      component: ProductDetailView,
      name: ProductDetailView
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ]
})

export default router;
