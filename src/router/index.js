import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const BlogsView = () => import('../views/BlogsView.vue')
// const Login = () => import('../views/Login.vue')
import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
const Register = () => import('../views/Register.vue')
const ForgotPassword = () => import('../views/ForgotPassword.vue')
const Profile = ()  => import('../views/Profile.vue')
const Admin = ()  => import('../views/Admin.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/blogs',
    name: 'BlogsView',
    component: BlogsView,
    meta: {
      title: "Blogs"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: "Register"
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: "Forgot Password"
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      title: "Admin"
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "Profile"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | EniBlogs`;
  next();
})

export default router
