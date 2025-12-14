<script setup>
import { useCounterStore } from '../stores/counter'

// Panggil "Hook" store-nya
const counter = useCounterStore()
</script>

<template>
  <div class="modul-page">
    <h1>Modul 7: Data Global (Pinia)</h1>
    <p>Data ini disimpan di "Brankas Global", jadi bisa diakses dari mana saja.</p>

    <div class="box">
      <h3>Counter Global</h3>
      <p class="big-number">{{ counter.count }}</p>
      <p>Double Count (Getter): {{ counter.doubleCount }}</p>
      
      <div class="actions">
        <!-- Panggil aksi langsung dari store -->
        <button @click="counter.decrement">- Kurang</button>
        <button @click="counter.increment">+ Tambah</button>
      </div>
    </div>

    <div class="box info">
      <h3>Coba Pindah Halaman!</h3>
      <p>Coba naikkan angka diatas, lalu pindah ke halaman Home/Lainnya, terus balik lagi kesini.</p>
      <p>Angkanya <strong>TIDAK AKAN RESET</strong> jadi 0, karena disimpan di Global Store, bukan di komponen ini.</p>
    </div>
  </div>
</template>

<style scoped>
.modul-page { padding: 20px; }
.box { 
  border: 1px solid #ccc; 
  padding: 20px; 
  border-radius: 10px; 
  margin-bottom: 20px; 
  text-align: center;
}
.big-number { font-size: 4rem; font-weight: bold; color: #42b883; margin: 10px 0; }
.actions button {
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}
.info { background: #e0f7fa; border-color: #006064; text-align: left;}
</style>
