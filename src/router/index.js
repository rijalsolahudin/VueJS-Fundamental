import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/materi/1',
            name: 'modul1',
            component: () => import('../views/Modul1View.vue')
        },
        {
            path: '/materi/2',
            name: 'modul2',
            component: () => import('../views/Modul2View.vue')
        },
        {
            path: '/materi/3',
            name: 'modul3',
            component: () => import('../views/Modul3View.vue')
        },
        {
            path: '/materi/4',
            name: 'modul4',
            component: () => import('../views/Modul4View.vue')
        },
        // Dynamic Route (:id adalah placeholder)
        {
            path: '/materi/4/:id',
            name: 'detail-user',
            component: () => import('../views/DetailUserView.vue')
        },
        // === CONTOH CHEAT SHEET: Login & Guard ===
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('../views/AdminView.vue'),
            // Meta Data: Tanda kalau halaman ini butuh login
            meta: { requiresAuth: true }
        },
        {
            path: '/materi/5',
            name: 'modul5',
            component: () => import('../views/Modul5View.vue')
        },
        {
            path: '/materi/6',
            name: 'modul6',
            component: () => import('../views/Modul6View.vue')
        }
    ]
})

// === NAVIGATION GUARD (SATPAM) ===
router.beforeEach((to, from, next) => {
    // Cek apakah route tujuan butuh Auth?
    if (to.meta.requiresAuth) {
        // Cek apakah user sudah login? (Simulasi pakai localStorage)
        const isAuthenticated = localStorage.getItem('isAuthenticated')

        if (isAuthenticated) {
            next() // Boleh lewat
        } else {
            alert("⛔ Eits! Anda belum login. Silakan login dulu.")
            next('/login') // Tendang ke halaman login
        }
    } else {
        next() // Halaman bebas (public)
    }
})

export default router
