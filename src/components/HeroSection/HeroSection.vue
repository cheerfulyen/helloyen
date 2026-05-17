<script setup lang="ts">
import './HeroSection.css'

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
          <span class="badge badge-dark">善於溝通</span>
          <span class="badge badge-dark">認真負責</span>
          <span class="badge badge-dark">樂於學習</span>
          <span class="badge badge-dark">團隊合作</span>
        </div>
        <h1 class="hero-name">周彥宏</h1>
        <h2 class="hero-title">前端工程師</h2>
        <p class="hero-quote">"若想一步登天，必將摔得體無完膚"</p>
        <p class="hero-desc">
          7~8 年工作經歷 · 熟悉 Angular / React · 金融業系統開發<br>
          中壢資展國際前端工程師養成班 57 屆結訓學員
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollTo('#projects')">查看作品</button>
          <button class="btn btn-outline" @click="scrollTo('#contact')">聯絡我</button>
        </div>
      </div>
      <div class="hero-avatar">
        <div class="avatar-ring">
          <div class="avatar-initials">YH</div>
        </div>
        <div class="avatar-deco deco-1"></div>
        <div class="avatar-deco deco-2"></div>
      </div>
    </div>
    <div class="scroll-hint" @click="scrollTo('#about')">
      <span>向下捲動</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>
