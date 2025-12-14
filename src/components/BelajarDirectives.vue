<script setup>
import { ref, onUpdated } from 'vue'
import KartuMahasiswa from './KartuMahasiswa.vue'

// 1. Data untuk Interpolation
const judul = ref("Belajar Directives & Components")

// 2. Data untuk v-bind
const gambarUrl = ref("https://vuejs.org/images/logo.png")
const isRed = ref(false)

// 3. Method untuk v-on
function ubahWarna() {
  isRed.value = !isRed.value
}

// 4. Data untuk v-if / v-show
const tampilkanRahasia = ref(false)

// 5. Data untuk v-for
const daftarMahasiswa = ref([
  { id: 1, nama: "Budi", nilai: 85 },
  { id: 2, nama: "Siti", nilai: 90 },
  { id: 3, nama: "Joko", nilai: 75 },
])

function hapusMahasiswa(id) {
  // Filter array, buang yang id-nya sama
  daftarMahasiswa.value = daftarMahasiswa.value.filter(mhs => mhs.id !== id)
}

function acakNilai() {
  daftarMahasiswa.value.forEach(mhs => {
    mhs.nilai = Math.floor(Math.random() * 100)
  })
}

onUpdated(() => {
  console.log("⚡ Parent (BelajarDirectives) Tampilan Diupdate! (onUpdated)")
})
</script>

<template>
  <div class="belajar-container">
    <h2>{{ judul }}</h2>
    
    <!-- ... (Bagian v-bind, v-on, v-if tetap sama) ... -->
    <!-- Saya hanya akan ganti bagian v-for di bawah -->
    
    <!-- 2. v-bind (:) -->
    <div class="section">
      <h3>v-bind (Lem Ajaib)</h3>
      <p>Mengikat src gambar dan warna text secara dinamis.</p>
      <img :src="gambarUrl" alt="Logo Vue" width="50" />
      <p :class="{ 'hit-text': isRed }">Tulisan ini bisa berubah warna</p>
    </div>

    <!-- 3. v-on (@) -->
    <div class="section">
      <h3>v-on (Resepsionis)</h3>
      <button @click="ubahWarna">Ubah Warna Teks Diatas</button>
    </div>

    <!-- 4. v-if & v-show -->
    <div class="section">
      <h3>v-if & v-show (Kondisional)</h3>
      <button @click="tampilkanRahasia = !tampilkanRahasia">
        {{ tampilkanRahasia ? 'Sembunyikan' : 'Tampilkan' }} Rahasia
      </button>

      <p v-if="tampilkanRahasia" class="rahasia">
        rahasia-negara.txt: Dosen Antigravity suka makan bakso.
        (v-if: elemen ini hilang dari DOM saat sembunyi)
      </p>
      
      <p v-show="tampilkanRahasia" style="color: gray; font-size: 0.8rem;">
        (v-show: elemen ini cuma display:none saat sembunyi)
      </p>
    </div>

    <!-- 5. v-for & Component -->
    <div class="section">
      <h3>v-for & Components (Lego)</h3>
      <p>Ini menggunakan komponen <code>&lt;KartuMahasiswa&gt;</code>:</p>
      
      <button @click="acakNilai" style="margin-bottom: 10px;">🎲 Acak Nilai (Test Update)</button>

      <div v-if="daftarMahasiswa.length === 0">
        Wah, mahasiswanya bolos semua (kosong).
      </div>
      
      <!-- 
        :nama="mhs.nama" -> Props (Kirim data ke anak)
        @hapus="hapusMahasiswa" -> Emits (Dengar laporan anak)
      -->
      <KartuMahasiswa 
        v-for="mhs in daftarMahasiswa" 
        :key="mhs.id"
        :nama="mhs.nama"
        :nilai="mhs.nilai"
        @hapus="hapusMahasiswa(mhs.id)"
      />
    </div>

  </div>
</template>

<style scoped>
.belajar-container {
  border: 2px solid #42b883;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f9f9f9;
}

.section {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.hit-text {
  color: red;
  font-weight: bold;
}

.rahasia {
  background-color: #ffd700;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
