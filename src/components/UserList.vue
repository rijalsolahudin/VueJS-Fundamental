<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['limit'])

const users = ref([])
const isLoading = ref(false)
const isError = ref(null)

// Fungsi untuk mengambil data dari JSONPlaceholder
async function fetchUsers() {
  try {
    isLoading.value = true
    isError.value = null
    
    // Simulasi delay biar loadingnya kelihatan (1 detik)
    await new Promise(resolve => setTimeout(resolve, 1000))

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!response.ok) throw new Error("Server Error!")
    
    const data = await response.json()
    // Potong data sesuai limit jika ada
    users.value = data.slice(0, props.limit || 10)
    
  } catch (err) {
    isError.value = err.message
  } finally {
    isLoading.value = false
  }
}

// Lifecycle Hook: Ambil data saat komponen dipasang
onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div class="user-list-container">
    <h3>🌐 Data dari Internet (API)</h3>
    
    <!-- State 1: Loading -->
    <div v-if="isLoading" class="state loading">
      ⏳ Sedang mengambil data dari server...
    </div>

    <!-- State 2: Error -->
    <div v-else-if="isError" class="state error">
      ❌ Terjadi Kesalahan: {{ isError }}
      <br>
      <button @click="fetchUsers">Coba Lagi</button>
    </div>

    <!-- State 3: Success -->
    <ul v-else class="user-list">
      <li v-for="user in users" :key="user.id" class="user-card">
        <strong>{{ user.name }}</strong>
        <br>
        <span class="email">📧 {{ user.email }}</span>
        <br>
        <span class="company">🏢 {{ user.company.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-list-container {
  margin-top: 1rem;
}

.state {
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin: 10px 0;
}
.loading { background: #fff3e0; color: #e65100; border: 1px solid #ffe0b2; }
.error { background: #ffebee; color: #c62828; border: 1px solid #ffcdd2; }

.user-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.user-card {
  background: white;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.2s;
}

.user-card:hover {
  transform: translateY(-3px);
  border-color: #42b883;
}

.email { color: #666; font-size: 0.9em; }
.company { color: #888; font-size: 0.8em; }
</style>
