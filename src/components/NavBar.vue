<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
  padding: 0;
}

.navbar.scrolled {
  background: #ffffff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: #38bdf8;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-links a {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(241, 245, 249, 0.85);
  transition: color 0.2s, background 0.2s;
}

.navbar.scrolled .nav-links a {
  color: #475569;
}

.nav-links a:hover {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.08);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #f1f5f9;
  border-radius: 2px;
  transition: background 0.2s;
}

.navbar.scrolled .burger span {
  background: #1e293b;
}

@media (max-width: 700px) {
  .burger {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #1e293b;
    flex-direction: column;
    padding: 16px 24px;
    gap: 4px;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    color: #f1f5f9;
    padding: 10px 12px;
  }
}
</style>
