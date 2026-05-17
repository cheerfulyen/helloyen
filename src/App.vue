<script setup lang="ts">
import './assets/main.css'
import NavBar from './components/NavBar/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>
