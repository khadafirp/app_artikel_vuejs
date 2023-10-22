import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DaftarView from '../views/DaftarView.vue'
import ArtikelView from '../views/ArtikelView.vue'
import EditArtikelView from '../views/EditArtikelView.vue'
import TambahArtikelView from '../views/TambahArtikelView.vue'
import LihatArtikelView from '../views/LihatArtikelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/masuk',
      name: 'masuk',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: DaftarView
    },
    {
      path: '/artikel',
      name: 'artikel',
      component: ArtikelView,
    },
    {
      path: '/edit-artikel',
      name: 'edit-artikel',
      component: EditArtikelView
    },
    {
      path: '/tambah-artikel',
      name: 'tambah-artikel',
      component: TambahArtikelView
    },
    {
      path: '/lihat-artikel',
      name: 'lihat-artikel',
      component: LihatArtikelView
    }
  ]
})

export default router
