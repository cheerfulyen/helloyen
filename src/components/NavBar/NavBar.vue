<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import './NavBar.css'

const scrolled = ref(false)
const menuOpen = ref(false)
const activeHash = ref('')
const route = useRoute()
const router = useRouter()

const sectionLinks = [
  { label: '關於我', hash: '#about' },
  { label: '工作經歷', hash: '#experience' },
  { label: '學歷', hash: '#education' },
  { label: '技能', hash: '#skills' },
  { label: '專案', hash: '#projects' },
  { label: '聯絡', hash: '#contact' },
]

let observer: IntersectionObserver | null = null

function setupObserver() {
  observer?.disconnect()
  if (route.path !== '/') {
    activeHash.value = ''
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeHash.value = '#' + entry.target.id
        }
      }
    },
    { rootMargin: '-10% 0px -80% 0px' },
  )
  sectionLinks.forEach(({ hash }) => {
    const el = document.querySelector(hash)
    if (el) observer!.observe(el)
  })
}

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

function goToSection(hash: string) {
  menuOpen.value = false
  if (route.path === '/') {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push('/' + hash)
  }
}

function goHome() {
  menuOpen.value = false
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

watch(() => route.path, setupObserver)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setupObserver()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<template>
  <header :class="['navbar', { scrolled }]">
    <div class="container nav-inner">
      <a class="logo" href="#" @click.prevent="goHome">YH</a>
      <nav class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="link in sectionLinks"
          :key="link.hash"
          :href="link.hash"
          :class="{ active: activeHash === link.hash }"
          @click.prevent="goToSection(link.hash)"
        >{{ link.label }}</a>
        <RouterLink to="/works" @click="menuOpen = false">作品集</RouterLink>
      </nav>
      <button class="burger" @click="menuOpen = !menuOpen" aria-label="選單">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>
