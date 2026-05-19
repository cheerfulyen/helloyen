<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { getShuffledPhotos } from '@/data/photos'
import './PhotoSection.css'

const previewPhotos = getShuffledPhotos().slice(0, 6)
const loaded = reactive<Record<number, boolean>>({})
</script>

<template>
  <section id="gallery" class="section section-alt">
    <div class="container">
      <h2 class="section-title">生活 <span>點滴</span></h2>
      <p class="section-subtitle">用相片記錄每個值得留念的時刻</p>
      <div class="photo-preview-grid">
        <div
          v-for="photo in previewPhotos"
          :key="photo.id"
          class="photo-preview-item"
          :class="{ 'is-loading': !loaded[photo.id] }"
        >
          <div v-if="!loaded[photo.id]" class="img-spinner">
            <div class="spinner"></div>
          </div>
          <img
            :src="photo.src"
            :alt="photo.alt"
            :class="{ 'is-loaded': loaded[photo.id] }"
            loading="lazy"
            @load="loaded[photo.id] = true"
          />
        </div>
      </div>
      <div class="photo-preview-cta">
        <RouterLink to="/gallery" class="photo-preview-btn">
          瀏覽全部相片
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
