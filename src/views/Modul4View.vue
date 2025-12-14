<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter() // Untuk navigasi (Action)
const route = useRoute()   // Untuk baca informasi URL (Info)

const username = ref("")

function goHome() {
  // Analogi: Supir Taksi, "Pak, antar saya ke Halaman Depan"
  router.push('/')
}

function goToDetail() {
  if (username.value) {
    // Navigasi ke Dynamic Route
    router.push(`/materi/4/${username.value}`)
  }
}
</script>

<template>
  <div class="modul-page">
    <h1>Modul 6: Routing & Navigasi</h1>
    <p>Halaman ini mendemonstrasikan fitur Vue Router.</p>

    <!-- 1. Programmatic Navigation -->
    <div class="box">
      <h3>1. Programmatic Navigation (useRouter)</h3>
      <p>Pindah halaman lewat function (bukan klik link).</p>
      <button @click="goHome">🚀 Terbang ke Home</button>
    </div>

    <!-- 2. Dynamic Route -->
    <div class="box">
      <h3>2. Dynamic Route (Parameter)</h3>
      <p>Masukkan nama user untuk simulasi halaman profil:</p>
      <div class="input-group">
        <input v-model="username" placeholder="Contoh: agus" />
        <button @click="goToDetail">Lihat Profil {{ username || '...' }}</button>
      </div>
    </div>

    <!-- 3. Route Information -->
    <div class="box info">
      <h3>3. Route Info (useRoute)</h3>
      <p>Posisi saat ini: <code>{{ route.fullPath }}</code></p>
    </div>

    <!-- 4. Navigation Guard Demo -->
    <div class="box danger">
      <h3>4. Navigation Guard & Meta Data</h3>
      <p>Coba akses halaman ADMIN (Protected Route).</p>
      <p>Jika belum login, Anda akan ditendang oleh Satpam (Guard).</p>
      <div style="display: flex; gap: 10px;">
        <RouterLink to="/admin"><button>🕵️ Masuk Halaman Admin</button></RouterLink>
        <RouterLink to="/login"><button>🔐 Halaman Login</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modul-page { padding: 20px; }
.box {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
}
.info { background: #f0f8ff; border-color: #4682b4; }
.danger { background: #fff0f5; border-color: #db7093; }
.input-group { display: flex; gap: 10px; margin-top: 10px; }
button { cursor: pointer; padding: 5px 10px; }
</style>
