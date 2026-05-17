<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import './NavBar.css'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { label: '關於我', href: '#about' },
  { label: '工作經歷', href: '#experience' },
  { label: '學歷', href: '#education' },
  { label: '技能', href: '#skills' },
  { label: '專案', href: '#projects' },
  { label: '聯絡', href: '#contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

function scrollTo(href: string) {
  menuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['navbar', { scrolled }]">
    <div class="container nav-inner">
      <a class="logo" href="#" @click.prevent="scrollTo('#hero')">YH</a>
      <nav class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollTo(link.href)"
        >{{ link.label }}</a>
      </nav>
      <button class="burger" @click="menuOpen = !menuOpen" aria-label="選單">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>
