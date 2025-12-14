<script setup>
import UserList from '../components/UserList.vue'
</script>

<template>
  <div class="modul-page">
    <h1>Modul 8: Fetch Data API</h1>
    <p>Di modul ini kita belajar mengambil data dari server luar (JSONPlaceholder) menggunakan <code>fetch()</code> dan <code>onMounted</code>.</p>

    <div class="box">
      <UserList :limit="6" />
    </div>
  </div>
</template>

<style scoped>
.modul-page { padding: 20px; }
.box { 
  border: 1px dashed #ccc; 
  padding: 20px; 
  border-radius: 10px;
  background-color: #f9f9f9;
}
</style>
