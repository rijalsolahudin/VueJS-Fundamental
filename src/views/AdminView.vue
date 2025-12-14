<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('isAuthenticated')
  alert("Anda telah Logout.")
  router.push('/login')
}
</script>

<template>
  <div class="admin-page">
    <h1>🕵️ Halaman Admin (Protected)</h1>
    <p>Selamat datang, Boss! Halaman ini dilindungi oleh <strong>Navigation Guard</strong>.</p>
    <p>Hanya user yang punya tiket 'isAuthenticated' yang bisa masuk sini.</p>
    
    <div class="secret-content">
      RAHASIA NERAGA: Vue.js itu asik banget.
    </div>

    <button @click="logout" class="btn-logout">Logout</button>
  </div>
</template>

<style scoped>
.admin-page { padding: 20px; border: 2px solid red; border-radius: 10px; margin: 20px; }
.secret-content { 
  background: #eee; 
  padding: 20px; 
  margin: 20px 0; 
  font-family: monospace; 
  font-weight: bold; 
}
.btn-logout {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
