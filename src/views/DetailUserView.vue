<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Mengambil parameter 'id' dari URL (misal: /materi/4/agus -> id = agus)
const userId = route.params.id
</script>

<template>
  <div class="modul-page">
    <button @click="router.back()">⬅ Kembali</button>
    
    <h1>👤 Profil User: {{ userId }}</h1>
    <p>Ini adalah halaman dinamis. Kontennya berubah tergantung URL.</p>
    <p>Halo, <strong>{{ userId }}</strong>! Selamat belajar Vue Router.</p>
  </div>
</template>

<style scoped>
.modul-page { padding: 20px; }
h1 { color: #42b883; }
</style>
