<script setup lang="ts">
import { reactive, watch, onMounted, onUnmounted } from 'vue'
import { getShuffledPhotos, type Photo } from '@/data/photos'
import './gallery.css'

const displayPhotos = getShuffledPhotos()

const lightbox = reactive<{ photo: Photo | null; index: number }>({
  photo: null,
  index: 0,
})

function openPhoto(photo: Photo, index: number) {
  lightbox.photo = photo
  lightbox.index = index
}

function closeLightbox() {
  lightbox.photo = null
}

function prevPhoto() {
  lightbox.index = (lightbox.index - 1 + displayPhotos.length) % displayPhotos.length
  lightbox.photo = displayPhotos[lightbox.index] ?? null
}

function nextPhoto() {
  lightbox.index = (lightbox.index + 1) % displayPhotos.length
  lightbox.photo = displayPhotos[lightbox.index] ?? null
}

function handleKeydown(e: KeyboardEvent) {
  if (!lightbox.photo) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevPhoto()
  if (e.key === 'ArrowRight') nextPhoto()
}

watch(
  () => lightbox.photo,
  (photo) => {
    document.body.style.overflow = photo ? 'hidden' : ''
  },
)

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="gallery-hero">
    <div class="container">
      <p class="gallery-hero-label">Gallery</p>
      <h1 class="gallery-hero-title">相片集</h1>
      <p class="gallery-hero-desc">記錄生活中的點滴，每一張相片都是一個故事。</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="gallery-grid">
        <div
          v-for="(photo, i) in displayPhotos"
          :key="photo.id"
          class="gallery-item"
          role="button"
          tabindex="0"
          :aria-label="photo.alt"
          @click="openPhoto(photo, i)"
          @keydown.enter="openPhoto(photo, i)"
        >
          <img :src="photo.src" :alt="photo.alt" class="gallery-img" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="lightbox.photo"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        @click.self="closeLightbox"
      >
        <button class="lightbox-close" aria-label="關閉" @click="closeLightbox">✕</button>
        <button class="lightbox-btn" aria-label="上一張" @click="prevPhoto">‹</button>
        <div class="lightbox-content">
          <img :src="lightbox.photo.src" :alt="lightbox.photo.alt" class="lightbox-img" />
          <p v-if="lightbox.photo.caption" class="lightbox-caption">{{ lightbox.photo.caption }}</p>
          <p class="lightbox-counter">{{ lightbox.index + 1 }} / {{ displayPhotos.length }}</p>
        </div>
        <button class="lightbox-btn" aria-label="下一張" @click="nextPhoto">›</button>
      </div>
    </Transition>
  </Teleport>
</template>
