import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const BlogsView = () => import('../views/BlogsView.vue')

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
  }
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
