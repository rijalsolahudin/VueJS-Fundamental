<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
  // Simpan status login di localStorage (simulasi)
  localStorage.setItem('isAuthenticated', 'true')
  alert("Login Berhasil! Anda akan diarahkan ke halaman Admin.")
  
  // Redirect ke halaman Admin setelah login
  router.push('/admin')
}
</script>

<template>
  <div class="login-page">
    <h1>🔐 Halaman Login</h1>
    <p>Halaman Admin terkunci. Anda harus login dulu.</p>
    <button @click="login" class="btn-login">Login Masuk</button>
  </div>
</template>

<style scoped>
.login-page { padding: 20px; text-align: center; }
.btn-login {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}
.btn-login:hover { background: #3aa876; }
</style>
