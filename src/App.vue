<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-fill">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Ensures full height layout */
html, body {
  height: 100%;
  margin: 0;
}
</style>
