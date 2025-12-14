<script setup>
import { ref, computed, watch } from 'vue'

const stokBarang = ref([
  { id: 1, nama: 'Laptop Gaming', harga: 15000000, qty: 5 },
  { id: 2, nama: 'Mouse Wireless', harga: 150000, qty: 0 },
  { id: 3, nama: 'Mekanikal Keyboard', harga: 800000, qty: 10 },
  { id: 4, nama: 'Monitor 144hz', harga: 3000000, qty: 2 },
])

const kuponDiskon = ref("")

// === COMPUTED (Rumus Excel) ===
// 1. Hitung total aset toko (Harga * Qty)
const totalAset = computed(() => {
  return stokBarang.value.reduce((total, barang) => {
    return total + (barang.harga * barang.qty)
  }, 0)
})

// 2. Filter barang yang stoknya menipis/habis (< 3)
const barangLangka = computed(() => {
  return stokBarang.value.filter(b => b.qty < 3)
})

// === WATCHER (Satpam CCTV) ===
// Pantau input kupon. Kalau user ketik "MERDEKA", kasih alert.
watch(kuponDiskon, (nilaiBaru, nilaiLama) => {
  console.log(`CCTV: User mengubah kupon dari '${nilaiLama}' jadi '${nilaiBaru}'`)
  
  if (nilaiBaru === 'MERDEKA') {
    alert("🎉 Selamat! Anda dapat diskon 100% (Di mimpi).")
  }
})

// Fungsi helper formating rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka)
}
</script>

<template>
  <div class="container">
    <h2>Belajar Computed & Watch</h2>
    
    <div class="box info">
      <h3>Gudang Toko Komputer</h3>
      <p>Total Aset (Computed): <strong>{{ formatRupiah(totalAset) }}</strong></p>
    </div>

    <div class="box warning" v-if="barangLangka.length > 0">
      <h3>⚠️ Warning: Stok Menipis (Computed)</h3>
      <ul>
        <li v-for="b in barangLangka" :key="b.id">
          {{ b.nama }} (Sisa: {{ b.qty }})
        </li>
      </ul>
    </div>

    <div class="box">
      <h3>Daftar Semua Barang</h3>
      <ul>
        <li v-for="b in stokBarang" :key="b.id">
          {{ b.nama }} - {{ formatRupiah(b.harga) }} (Stok: 
          <input type="number" v-model="b.qty" class="input-qty">)
        </li>
      </ul>
      <p class="small">Coba ubah stok diatas, Total Aset otomatis berubah (Computed).</p>
    </div>

    <div class="box cctv">
      <h3>Demo Watcher (CCTV)</h3>
      <p>Masukkan Kode Kupon (Coba ketik: <b>MERDEKA</b>)</p>
      <input v-model="kuponDiskon" placeholder="Kode Kupon..." />
      <p>Status: {{ kuponDiskon ? 'Sedang mengetik...' : 'Menunggu input' }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
}
.box {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
}
.info { background-color: #e0f7fa; border-color: #006064; }
.warning { background-color: #fff3e0; border-color: #ff6f00; }
.cctv { background-color: #333; color: white; }
.input-qty { width: 50px; }
.small { font-size: 0.8rem; color: #666; font-style: italic; }
</style>
