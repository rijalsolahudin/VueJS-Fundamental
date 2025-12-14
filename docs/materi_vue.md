# Materi Belajar Vue.js - Dosen Senior Antigravity

Selamat datang di kelas Vue.js saya. Saya menggunakan pendekatan analogi agar kalian mudah paham. Jangan hanya hafal sintaks, tapi pahami "jiwa"-nya.

Karena saya tidak bisa membaca file `docs/vue.pdf` secara langsung (keterbatasan teknis mata batin saya), saya menyusun silabus berdasarkan standar industri dan pengalaman saya mengajar selama bertahun-tahun. Jika ada topik spesifik dari PDF itu yang terlewat, tolong "senggol" saya.

## Roadmap Pembelajaran

1.  **Dasar & Filosofi (The Foundation)**
    *   Apa itu Vue? (Bedanya dengan jQuery/Vanilla JS)
    *   Declarative rendering vs Imperative.
    *   *Analogi:* Memesan makanan (Declarative) vs Memasak sendiri langkah demi langkah (Imperative).

2.  **Reactivity System (The Heart)**
    *   `ref` vs `reactive`.
    *   Bagaimana Vue "melacak" perubahan.
    *   *Analogi:* Excel Spreadsheet & Gosip Kampung.

3.  **Template Syntax & Directives (The Vocabulary)**
    *   Interpolation `{{ }}`
    *   Directives: `v-bind` (:), `v-on` (@), `v-if`, `v-for`.
    *   *Analogi:* Memberi "Label" dan "Perintah" pada barang-barang di gudang.

4.  **Components (The Building Blocks)**
    *   Single File Components (.vue).
    *   Anatomi: Script, Template, Style.
    *   *Analogi:* Rumah yang disusun dari batako, jendela, dan pintu (komponen terpisah).

5.  **Interaksi Antar Komponen (The Communication)**
    *   Props (Parent ke Child).
    *   Emits (Child ke Parent).
    *   *Analogi:* Surat tugas (Props) dan Laporan/Teriakan (Emits).

6.  **Lifecycle Hooks (The Timeline)**
    *   `onMounted`, `onUnmounted`.
    *   *Analogi:* Siklus hidup manusia: Lahir (Mounted), Hidup (Update), Meninggal (Unmounted).

7.  **Computed & Watchers (The Logic)**
    *   Kapan pakai Computed? Kapan Watcher?
    *   *Analogi:* Rumus Excel (Computed) vs Satpam CCTV (Watcher).

---

## Modul 1: Reactivity - Jantungnya Vue

Dasar dari Vue adalah **Reactivity**. Tanpa ini, Vue cuma HTML biasa.

### Analogi: Excel Spreadsheet
Bayangkan cell A1 isinya `10`, cell A2 isinya `20`.
Cell A3 rumusnya `= A1 + A2`.
Saat kamu ubah A1 jadi `30`, A3 **otomatis** berubah jadi `50` kan? Kamu tidak perlu suruh A3 untuk hitung ulang. Itulah Reactivity.

Di Javascript biasa (Vanilla), `c = a + b` itu cuma jalan sekali. Kalau `a` berubah, `c` masa bodo. Di Vue, `c` akan selalu update.

### Praktek
Mari kita lihat file `src/components/HelloWorld.vue`. Kita akan bedah jantungnya.

#### 🧪 Cara Mencoba (Modul 1)
1.  Buka Menu **"Modul 1: Reactivity"**.
2.  Lihat ada kotak "Demo Reactivity".
3.  Klik tombol **"Tambah Angka"**.
4.  Perhatikan angka berubah otomatis tanpa refresh halaman. Itulah magis-nya Reactivity (`ref`).

---

## Modul 2: Template Syntax & Directives (Kosa Kata Vue)

Kalau Reactivity adalah "Jantung", maka **Directives** adalah "Bahasa Perintah" kita ke HTML.

Di HTML biasa, atribut itu diam (`id="app"`). Di Vue, kita punya atribut sakti yang diawali `v-`.

### 1. Interpolation `{{ }}` (Si Penampil Data)
Ini untuk menampilkan teks.
*   *Analogi:* Papan pengumuman digital. Apa yang diketik di komputer (script), langsung muncul di papan (template).

### 2. `v-bind` atau `:` (Lem Ajaib)
Digunakan untuk mengikat attribut HTML (src, href, class, id, style) ke data Javascript.
*   *Sintaks:* `v-bind:src="urlGambar"` atau singkatnya `:src="urlGambar"`.
*   *Analogi:* Kamu punya **Label Barang** yang isinya bisa berubah-ubah tergantung database gudang. Kalau data berubah, label di barang ikut berubah.

### 3. `v-on` atau `@` (Si Resepsionis/Event Listener)
Digunakan untuk mendengarkan kejadian (klik, ketik, enter, scroll).
*   *Sintaks:* `v-on:click="fungsiSaya"` atau singkatnya `@click="fungsiSaya"`.
*   *Analogi:* Resepsionis yang menunggu perintah. "Kalau ada yang pencet bel (klik), panggil Pak Bos (jalankan fungsi)".

### 4. `v-if` vs `v-show` (Kondisional)
*   `v-if`: Kalau `false`, elemennya **DIHAPUS** dari DOM (Diusir dari rumah).
*   `v-show`: Kalau `false`, elemennya cuma di-hidden pakai CSS `display: none` (Sembunyi di lemari).
*   *Tips:* Pakai `v-show` kalau sering kluar-masuk (biar gak capek bangun/rubuhin elemen terus).

### 5. `v-for` (Mesin Fotokopi)
Digunakan untuk mengulang elemen (looping array/object).
*   *Analogi:* Kamu punya 1 template formulir, lalu kamu fotokopi sebanyak jumlah siswa di kelas.

#### 🧪 Cara Mencoba (Modul 2)
1.  Buka Menu **"Modul 2-4: Directives & Components"**.
2.  **v-bind:** Refresh halaman, perhatikan teks "Tulisan ini bisa berubah warna". Klik tombol "Ubah Warna" dan lihat class CSS berubah.
3.  **v-if/v-show:** Klik tombol "Tampilkan Rahasia". Perhatikan bedanya elemen yang hilang totally (v-if) vs cuma ngumpet (v-show).

---

## Modul 3: Components & Interaction (Bangun Rumah Lego)

Sampai sini kita cuma main di satu file. Aplikasi asli itu terdiri dari BANYAK file komponen yang disusun kayak Lego.

### 1. Anatomi Komponen (.vue)
Setiap file `.vue` itu adalah komponen. Dia punya 3 bagian:
*   `<script setup>`: Otaknya (Logic).
*   `<template>`: Wajahnya (HTML).
*   `<style>`: Bajunya (CSS).

*Analogi:* Bayangkan kita mau bikin Mobil. Kita gak bikin semuanya dari nol lembaran besi. Kita bikin **Komponen Roda**, **Komponen Mesin**, **Komponen Pintu**. Pas dirakit, jadilah Mobil.

### 2. Props (Surat Tugas dari Bos)
Gimana cara Parent component ngasih data ke Child component? Pakai **Props**.
*   Parent bilang: "Eh Komponen Tombol, ini aku kasih teks label 'Simpan' dan warna 'Biru'. Tolong tampilin ya."
*   Child (Tombol) menerima: `defineProps(['label', 'warna'])`.
*   *Sifat:* One-way data flow. Anak GAK BOLEH protes/ubah data dari orang tua secara langsung.

### 3. Emits (Laporan ke Bos)
Gimana cara Child ngasih tau Parent kalau ada kejadian (misal tombol diklik)? Pakai **Emits**.
*   Child teriak: "Woi Bos (emit), aku baru aja diklik nih!". `emit('tombol-diklik')`.
*   Parent dengerin: `@tombol-diklik="jalankanSesuatu"`.

---

## Modul 4: Lifecycle Hooks (Siklus Hidup)

Setiap komponen itu punya nyawa. Dia lahir, hidup, dan mati. Kita bisa menyisipkan kode di momen-momen sakral ini.

### 1. `onMounted` (Baru Lahir)
Dijalankan **SETELAH** komponen selesai dirender dan tampil di layar.
*   *Kapan dipakai?* Ambil data dari API, setup library pihak ketiga (chart, map), atau set focus ke input.
*   *Analogi:* Bayi baru lahir -> Langsung nangis (onMounted).

### 2. `onUnmounted` (Meninggal/Hilang)
Dijalankan **SEBELUM** komponen dihapus dari layar (misal karena `v-if="false"` atau pindah halaman).
*   *Kapan dipakai?* Bersih-bersih memory, matikan timer, stop event listener.
*   *Analogi:* Sebelum pindah rumah, kita harus beres-beres kardus dulu biar gak ninggalin sampah.

### 3. `onUpdated` (Suntik Botox / Update)
Dijalankan setiap kali ada perubahan data (reactivity) yang menyebabkan tampilan berubah.
*   *Hati-hati:* Jangan ubah data di sini secara sembarangan, nanti bisa looping infinite (update -> trigger update -> update lagi...).

#### 🧪 Cara Mencoba (Modul 3 & 4)
1.  Buka Menu **"Modul 2-4: Directives & Components"**.
2.  **Lifecycle:** Buka Console Browser (F12). Lihat log `✅ Kartu ... LAHIR`.
3.  **Props & Emits:** Klik tombol **"X"** merah di salah satu kartu.
    *   Child Component lapor ke Parent (Emit).
    *   Parent menghapus data dari Array.
    *   Lihat log `⚰️ Kartu ... MENINGGAL`.

---

## Modul 5: Computed & Watchers (Logika Otomatis)

Kadang kita butuh data olahan atau perlu bereaksi saat data berubah.

### 1. `computed` (Rumus Excel)
Digunakan untuk **MENGHITUNG** data baru berdasarkan data yang sudah ada.
*   *Sifat:* **Cached**. Dia pintar, kalau data sumbernya gak berubah, dia gak akan hitung ulang (hemat baterai).
*   *Analogi:* Cell C1 rumusnya `=A1+B1`. Kita gak perlu suruh hitung. Kalau A1 berubah, C1 otomatis berubah.
*   *Contoh:* Filter daftar mahasiswa lulus, Hitung rata-rata nilai.

### 2. `watch` (Satpam CCTV)
Digunakan untuk **MELAKUKAN TINDAKAN** (Side Effect) saat data berubah.
*   *Sifat:* Tidak mengembalikan nilai, tapi menjalankan fungsi.
*   *Analogi:* Satpam CCTV. Kalau ada orang lewat (data berubah), satpam nyalakan alarm atau telpon polisi (API Call).
*   *Contoh:* Simpan ke LocalStorage saat data berubah, Fetch API saat user mengetik di search bar.

#### 🧪 Cara Mencoba (Modul 5)
1.  Buka Menu **"Modul 5: Computed & Watchers"**.
2.  **Computed:** Ubah angka stok barang. Perhatikan "Total Aset" berubah otomatis tanpa kita hitung manual.
3.  **Watcher:** Ketik kata **"MERDEKA"** di kolom kupon diskon. CCTV (Watcher) akan menangkap perubahan itu dan menampilkan Alert.

---

## Modul 6: Routing (Peta Jalan & Cheat Sheet)

Aplikasi web modern itu "Single Page Application" (SPA). Artinya cuma 1 file HTML, tapi isinya ganti-ganti seolah-olah pindah halaman.

### 🔥 Vue Router Cheat Sheet

#### 1. Setup Dasar (`router/index.js`)
```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // Lazy Loading (Recommended): Download file cuma pas dibuka
    { path: '/about', component: () => import('../views/AboutView.vue') }
  ]
})
```

#### 2. Menampilkan & Link (`App.vue`)
*   **`<RouterView />`**: Lubang ajaib tempat konten halaman muncul.
*   **`<RouterLink to="/">`**: Pengganti `<a>`. Gak bikin refresh halaman.
    *   *Analogi:* Pintu doraemon. Masuk sini langsung sampai sana tanpa lewat jalan raya.

#### 3. Dynamic Route (Parameter)
Buat halaman detail (misal: `/user/budi`, `/user/siti`).
*   **Config:** `{ path: '/user/:id', component: UserDetail }`
*   **Di Component (Composition API):**
    ```js
    import { useRoute } from 'vue-router'
    const route = useRoute()
    console.log(route.params.id) // Output: "budi"
    ```

#### 4. Programmatic Navigation (Pindah via Script)
Kalau mau pindah halaman setelah login atau klik tombol biasa.
```js
import { useRouter } from 'vue-router'
const router = useRouter()

// Pindah halaman (masuk history browser, bisa di-back)
router.push('/home')
router.push({ name: 'user-detail', params: { id: 123 } })

// Ganti halaman (GAK masuk history, gak bisa di-back - cocok buat Logout)
router.replace('/login')

// Back / Forward
router.go(-1) // Mundur 1 langkah
```

#### 5. Navigation Guard (Satpam)
Cegah user masuk halaman tertentu (misal belum login).
*   *Analogi:* Satpam Mall. "Stop! Mana tiketnya?".
```js
router.beforeEach((to, from, next) => {
  const isAuthenticated = false // Cek status login
  
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' }) // Tendang ke login
  } else {
    next() // Silakan masuk
  }
})
```

#### 6. Route Meta Data
Nempel data tambahan di route (misal: Judul Halaman, butuh Auth).
```js
{ 
  path: '/admin', 
  component: AdminView, 
  meta: { requiresAuth: true, title: 'Halaman Admin' } 
}
```
Aksesnya via `route.meta.requiresAuth`.

#### 🧪 Cara Mencoba (Modul 6)
1.  Buka Menu **"Modul 6: Routing"**.
2.  **Dynamic Route:** Ketik nama di kolom input, klik tombol. URL akan berubah jadi `/materi/4/nama-anda`.
3.  **Navigation Guard:** Klik tombol **"🕵️ Masuk Halaman Admin"**. Anda akan ditendang ke Login karena belum punya akses.
4.  Login dulu, baru coba masuk Admin lagi. Pasti bisa!

---

## Modul 7: State Management (Pinia)

Bayangkan aplikasi kita makin besar. Ada komponen `Header`, `Sidebar`, `Cart`, `Profile` yang semuanya butuh data "User Login" atau "Keranjang Belanja".
Kalau pakai Props/Emits, kita bakal oper-operan bola (Props Drilling) dari kakek -> bapak -> anak -> cucu. Capek!

### 1. Apa itu Pinia?
Pinia adalah **"Brankas Bersama"** (Store).
*   Semua komponen boleh ambil data dari brankas ini langsung.
*   Semua komponen boleh update data di brankas ini.
*   Tidak perlu oper-operan lewat Props lagi.

### 2. Anatomi Store
Mirip banget sama komponen biasa, tapi gak ada HTML-nya.
*   **State:** Sama kayak `ref` (Data).
*   **Getters:** Sama kayak `computed` (Data Olahan).
*   **Actions:** Sama kayak `function` (Method untuk ubah data).

### 3. Setup Option vs Setup (Recommended)
Kita pakai gaya `Setup Store` biar mirip codingan Composition API (`ref`, `computed`) yang sudah kita pelajari.

```js
// stores/counter.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  
  // Getter
  const doubleCount = computed(() => count.value * 2)
  
  // Action
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

### 4. Cara Pakai di Komponen
```js
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

// Baca state
console.log(counter.count)

// Panggil action
counter.increment()
```

#### 🧪 Cara Mencoba (Modul 7)
1.  Buka Menu **"Modul 7: State Management"**.
2.  Klik tombol **"+"** sampai angka jadi **10**.
3.  Klik tombol **Home** (balik ke menu utama).
4.  Masuk lagi ke **Modul 7**.
5.  Lihat! Angkanya tetap **10**. Data tersimpan aman di "Brankas" Pinia, tidak hilang meski pindah halaman.

---

## Modul 8: Fetch Data (API Call)

Aplikasi nyata butuh data dari Server (Backend). Kita gunakan hook `onMounted` untuk mengambil data saat komponen lahir.

### 1. Pola Dasar (Async/Await)
Kita butuh 3 state dasar:
1.  `data`: Untuk simpan hasil fetch.
2.  `isLoading`: Untuk tampilkan spinner loading.
3.  `error`: Untuk tampilkan pesan error jika gagal.

```js
<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])
const isLoading = ref(true)
const errorMessage = ref(null)

// Fungsi ambil data
async function fetchData() {
  try {
    isLoading.value = true // Mulai loading
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!response.ok) throw new Error("Gagal mengambil data")
    
    users.value = await response.json() // Simpan data
  } catch (err) {
    errorMessage.value = err.message // Tangkap error
  } finally {
    isLoading.value = false // Selesai loading (sukses/gagal)
  }
}

// Panggil saat komponen lahir
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div v-if="isLoading">Sedang memuat data... ⏳</div>
  <div v-else-if="errorMessage" class="error">{{ errorMessage }}</div>
  <ul v-else>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
```

### 2. Axios vs Fetch
*   **Fetch:** Bawaan browser, ringan, tapi sintaks agak panjang (harus 2x await: fetch & json).
*   **Axios:** Library populer, sintaks lebih pendek, otomatis handle JSON, tapi nambah ukuran file project.
*   *Saran:* Untuk belajar, pakai `fetch`. Untuk produksi, pakai `axios`.

#### 🧪 Cara Mencoba (Modul 8)
1.  Buka Menu **"Modul 8: Fetch Data API"**.
2.  Perhatikan tulisan **"⏳ Sedang mengambil data..."**.
3.  Tunggu 1 detik, data User akan muncul. Itu diambil real-time dari internet.
4.  Coba matikan koneksi internet & Refresh. Anda akan melihat tampilan Error Handling.





---

**Selamat!** Anda sudah mempelajari 5 Pilar Utama Vue (Reactivity, Directives, Components, Lifecycle, Computed/Watch). Selebihnya adalah pendalaman dan library tambahan (Router, Pinia).

