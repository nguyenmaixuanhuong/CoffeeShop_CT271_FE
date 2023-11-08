import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CartView from '../views/CartView.vue'
import OrderView from '../views/OrderView.vue'
import ServiceView from '../views/ServiceView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView,
      name: 'Login',
    },
    {
      path: '/register',
      component: RegisterView
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
      path: '/contact',
      component: ContactView
    },
    {
      path: '/product/:id',
      component: ProductDetailView,
      name: ProductDetailView
    },
    {
      path: '/cart',
      component: CartView,
      name: CartView
    },
    {
      path: '/orders',
      component: OrderView,
      name: OrderView
    },
    {
      path: '/service',
      component: ServiceView,
      name: ServiceView
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ]
  
},

)

export default router;
