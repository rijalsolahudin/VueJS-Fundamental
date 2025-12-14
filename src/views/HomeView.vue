<template>
  <div class="home">
    <h1>🏠 Daftar Materi Vue.js</h1>
    <p>Pilih modul pembelajaran di bawah ini:</p>
    
    <div class="menu-grid">
      <RouterLink to="/materi/1" class="menu-card">
        <h3>Modul 1: Reactivity</h3>
        <p>Pengenalan ref, state management dasar.</p>
      </RouterLink>

      <RouterLink to="/materi/2" class="menu-card">
        <h3>Modul 2-4: Directives & Components</h3>
        <p>v-if, v-for, Props, Emits, Lifecycle Hooks.</p>
      </RouterLink>

      <RouterLink to="/materi/3" class="menu-card">
        <h3>Modul 5: Computed & Watchers</h3>
        <p>Logika otomatis dan side-effects (Toko Komputer).</p>
      </RouterLink>

      <RouterLink to="/materi/4" class="menu-card">
        <h3>Modul 6: Routing</h3>
        <p>Navigasi halaman, useRoute, useRouter, Dynamic Params.</p>
      </RouterLink>

      <RouterLink to="/materi/5" class="menu-card">
        <h3>Modul 7: State Management (Pinia)</h3>
        <p>Global Store, Sharing Data antar Halaman, Persist Data.</p>
      </RouterLink>

      <RouterLink to="/materi/6" class="menu-card">
        <h3>Modul 8: Fetch Data API</h3>
        <p>Async Await, Fetch, Loading State, Error Handling.</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.menu-card {
  display: block;
  background: white;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s, box-shadow 0.2s;
}

.menu-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-color: #42b883;
}

.menu-card h3 {
  color: #42b883;
  margin-bottom: 10px;
}
</style>
