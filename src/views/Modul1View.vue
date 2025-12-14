<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="modul-page">
    <h1>Modul 1: Reactivity (Jantung Vue)</h1>
    <p>Demo dasar reactivity menggunakan <code>ref</code>.</p>
    <div class="component-wrapper">
      <HelloWorld msg="Welcome to Module 1" />
    </div>
  </div>
</template>

<style scoped>
.modul-page { padding: 20px; }
.component-wrapper { border: 1px dashed #ccc; padding: 20px; margin-top: 20px; }
</style>
