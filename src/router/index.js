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
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CartView from '../views/CartView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // methods: beforeEach((to, from, next) => {
  //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  //   else next()
  // }),
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
      path: '/cart',
      component: CartView,
      name: CartView
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ]
  
},

)

export default router;
