import { createRouter, createWebHashHistory } from 'vue-router';

// Import views/pages
import HomeView from '../views/HomeView.vue'
import Logout from '../views/LogoutView.vue'
import Login from '../views/LoginView.vue'

// Import Components:
import LoginForm from '../components/LoginForm.vue'
import DataTable from '../components/DataTable.vue'
import FooterTemp from '../components/FooterTemp.vue'
import NavbarTemp from '../components/NavbarTemp.vue'

const router = createRouter({
    routes: [
  {
    path: '/',
    name: 'home',
    components: {
        default: () => HomeView,       
        NavbarTemp: () =>NavbarTemp,
        DataTable: () => DataTable,
        FooterTemp: () => FooterTemp
      },
  },
  {
    path: '/logout',
    name: 'logout',
    components: {
        default: () => Logout,  
        NavbarTemp: () => NavbarTemp,
        FooterTemp: () => FooterTemp
      },
  },
  {
    path: '/login',
    name: 'login',
    components: {
        default: () => Login,  
        NavbarTemp: () =>NavbarTemp,
        LoginForm: () => LoginForm,
        FooterTemp: () => FooterTemp
      },
  }
],

history: createWebHashHistory(),
});

export default router;
