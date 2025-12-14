<script setup>
import { onMounted, onUnmounted, onUpdated } from 'vue'

// Menerima data dari Parent
const props = defineProps({
  nama: {
    type: String,
    required: true
  },
  nilai: {
    type: Number,
    required: true
  }
})

// Mendifinisikan event yang bisa dilaporkan ke Parent
const emit = defineEmits(['hapus'])

function laporKeBos() {
  emit('hapus')
}

// === LIFECYCLE HOOKS DEMO ===
onMounted(() => {
  console.log(`✅ Kartu ${props.nama} LAHIR (Mounted)`)
})

onUnmounted(() => {
  console.log(`⚰️ Kartu ${props.nama} MENINGGAL (Unmounted)`)
  alert(`Kartu ${props.nama} dihapus! Cek Console.`)
})

onUpdated(() => {
  console.log(`⚡ Kartu ${props.nama} DIPERMAK (Updated) - Nilai jadi ${props.nilai}`)
})
</script>

<template>
  <div class="kartu" :class="{ 'lulus': nilai >= 85 }">
    <div class="info">
      <h4>{{ nama }}</h4>
      <p>Nilai: {{ nilai }}</p>
      <span v-if="nilai >= 85" class="badge">Lulus Terbaik!</span>
    </div>
    <button @click="laporKeBos" class="btn-hapus">X</button>
  </div>
</template>

<style scoped>
.kartu {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  transition: all 0.3s;
}

.kartu.lulus {
  border-color: #42b883;
  background-color: #e6fcf5;
}

.badge {
  color: #42b883;
  font-weight: bold;
  font-size: 0.8em;
}

.btn-hapus {
  background: #ff4d4d;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.btn-hapus:hover {
  background: #ff0000;
}
</style>
