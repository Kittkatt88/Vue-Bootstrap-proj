import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import Logout from '../views/LogoutView.vue'

const router = createRouter({
    routes: [
  {
    path: '/',
    name: 'home',
    components: {
        default: () => HomeView,
        NavbarTemp: () => import('../components/NavbarTemp.vue'),        
        DataTable: () => import('../components/DataTable.vue'),
        FooterTemp: () => import('../components/FooterTemp.vue'),
      },
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  }
],

history: createWebHashHistory(),
});

export default router;
