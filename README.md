# 🎓 Vue.js Fundamental Course

Repository ini adalah hasil dokumentasi pembelajaran **Vue.js 3 (Composition API)** dari dasar hingga tingkat lanjut. Proyek ini disusun menyerupai silabus kuliah dengan studi kasus nyata di setiap modulnya.

---

## 📚 Daftar Materi (Syllabus)

Proyek ini terdiri dari 8 Modul utama yang saling berkesinambungan:

### **Part 1: The Foundation**
*   **Modul 1: Reactivity System**
    *   Pengenalan `ref` dan state management dasar.
    *   *Demo:* Counter App sederhana.
*   **Modul 2: Template Syntax & Directives**
    *   Menguasai `v-bind`, `v-on`, `v-if`, `v-show`, dan `v-for`.
    *   *Demo:* Styling dinamis dan list rendering.
*   **Modul 3: Components & Interaction**
    *   Memecah UI menjadi Component (`KartuMahasiswa.vue`).
    *   Komunikasi antar komponen: **Props** (Parent -> Child) dan **Emits** (Child -> Parent).
*   **Modul 4: Lifecycle Hooks**
    *   Memahami siklus hidup komponen (`onMounted`, `onUpdated`, `onUnmounted`).
    *   *Demo:* Logika "Lahir" dan "Meninggal" pada kartu mahasiswa.

### **Part 2: Logic & Architecture**
*   **Modul 5: Computed & Watchers**
    *   **Computed:** Logika cerdas (Cached) untuk menghitung total aset toko komputer.
    *   **Watchers:** CCTV untuk memantau perubahan data (Input Kupon Diskon).
*   **Modul 6: Routing & Navigation (SPA)**
    *   Implementasi `vue-router`.
    *   Programmatic Navigation (`useRouter`), Dynamic Route (`/user/:id`), dan Navigation Guard (Proteksi Halaman Admin).

### **Part 3: Advanced State & Data**
*   **Modul 7: Global State Management (Pinia)**
    *   Menggunakan **Pinia** sebagai "Brankas Global".
    *   Sharing data antar halaman tanpa props drilling.
*   **Modul 8: Fetch Data API**
    *   Mengambil data real-time dari internet (JSONPlaceholder).
    *   Handling Loading State, Error State, dan Async/Await.

---

## 🛠️ Teknologi yang Digunakan

*   **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API & Script Setup)
*   **Build Tool:** [Vite](https://vitejs.dev/) (Super Cepat)
*   **Routing:** [Vue Router 4](https://router.vuejs.org/)
*   **State Management:** [Pinia](https://pinia.vuejs.org/)
*   **Styling:** Vanilla CSS (Scoped)

---

## 🚀 Cara Menjalankan Project

Pastikan Anda sudah menginstall [Node.js](https://nodejs.org/) di komputer Anda.

1.  **Clone Repository**
    ```bash
    git clone https://github.com/rijalsolahudin/VueJS-Fundamental.git
    cd VueJS-Fundamental
    ```

2.  **Install Dependencies**
    ```bash
    pnpm install
    # atau npm install
    ```

3.  **Jalankan Server Development**
    ```bash
    pnpm dev
    # atau npm run dev
    ```

4.  **Buka di Browser**
    Akses `http://localhost:5173`.

---

## 📖 Dokumentasi Lengkap
Setiap materi dilengkapi dengan **Penjelasan Teori & Analogi** yang mudah dipahami.
Silakan baca file: 👉 **[docs/materi_vue.md](docs/materi_vue.md)**.

---

*Happy Coding! 🚀*
