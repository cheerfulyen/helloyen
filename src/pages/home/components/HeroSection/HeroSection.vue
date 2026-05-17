<script setup lang="ts">
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import './HeroSection.css'

const traits = ['善於溝通', '認真負責', '樂於學習', '團隊合作']

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-inner">
      <div class="hero-content">
        <div class="hero-badges">
          <Tag v-for="trait in traits" :key="trait" :value="trait" />
        </div>
        <h1 class="hero-name">周彥宏</h1>
        <h2 class="hero-title">前端工程師</h2>
        <p class="hero-quote">"若想一步登天，必將摔得體無完膚"</p>
        <p class="hero-desc">
          7~8 年工作經歷 · 熟悉 Angular / React · 金融業系統開發<br>
          中壢資展國際前端工程師養成班 57 屆結訓學員
        </p>
        <div class="hero-actions">
          <Button label="查看作品" icon="pi pi-eye" @click="scrollTo('#projects')" />
          <Button
            label="聯絡我"
            icon="pi pi-envelope"
            outlined
            class="hero-btn-outline"
            @click="scrollTo('#contact')"
          />
        </div>
      </div>
      <div class="hero-avatar">
        <div class="avatar-ring">
          <div class="avatar-initials">YH</div>
        </div>
      </div>
    </div>
    <div class="scroll-hint" @click="scrollTo('#about')">
      <span>向下捲動</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>
