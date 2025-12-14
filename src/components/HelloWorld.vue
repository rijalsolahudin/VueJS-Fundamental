<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

// === LOGIKA REACTIVITY ===
// Analogi: `ref` adalah KOTAK KACA.
// Kita bisa lihat isinya (0) langsung di template.
// Tapi di script, kita harus buka tutupnya (.value) untuk ubah.
const count = ref(0)

function increment() {
  // Buka tutup kotak (.value) lalu tambah isinya
  count.value++
  console.log("Nilai berubah jadi:", count.value)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    
    <!-- DEMO REACTIVITY -->
    <div class="demo-box">
      <p>Angka saat ini (Reactivity): {{ count }}</p>
      <button @click="increment">Tambah Angka</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.demo-box {
  background: rgba(0, 189, 126, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px dashed #00bd7e;
  text-align: center;
}

.demo-box button {
  background: #00bd7e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.demo-box button:hover {
  background: #00a56e;
}
</style>
