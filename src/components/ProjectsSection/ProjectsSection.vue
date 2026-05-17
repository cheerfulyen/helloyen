<script setup lang="ts">
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Badge from 'primevue/badge'
import './ProjectsSection.css'

const projects = [
  {
    title: 'PAWER 電商平台',
    subtitle: '資展國際前端養成班大型專題',
    desc: '寵物保健電商平台，我負責寵物溝通師資功能模組。採前後端分離架構，前端使用 React，後端使用 Node.js + MySQL，並整合 WebSocket 實作即時通訊。',
    tags: ['React', 'JSX', 'Hook', 'MailJS', 'CSS/SCSS', 'WebSocket', 'Node.js', 'MySQL'],
    emoji: '🐾',
    highlight: true,
    note: '影片中 28 分後介紹的頁面',
  },
  {
    title: '網頁小遊戲',
    subtitle: '個人專案成就',
    desc: '使用 HTML、CSS、JavaScript 製作的網頁互動小遊戲，展示原生 JS 操作 DOM、事件處理與遊戲邏輯設計能力。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🎮',
    highlight: false,
    note: '',
  },
  {
    title: 'jQuery 動畫製作',
    subtitle: '個人專案成就',
    desc: '運用 jQuery 製作豐富的網頁動畫效果，展示前端動態互動設計與 CSS 動畫整合能力。',
    tags: ['jQuery', 'CSS', 'JavaScript', 'Animation'],
    emoji: '✨',
    highlight: false,
    note: '',
  },
]
</script>

<template>
  <section id="projects" class="section section-alt">
    <div class="container">
      <h2 class="section-title">專案 <span>作品</span></h2>
      <p class="section-subtitle">實作經驗與個人成就</p>
      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.title"
          :class="['project-featured', { 'project-featured': project.highlight }]"
        >
          <Card>
            <template #content>
              <div class="project-card-inner">
                <Badge
                  v-if="project.highlight"
                  value="主要專案"
                  severity="info"
                  class="project-featured-badge"
                />
                <div class="project-emoji">{{ project.emoji }}</div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-subtitle">{{ project.subtitle }}</p>
                <p v-if="project.note" class="project-note">📽 {{ project.note }}</p>
                <p class="project-desc">{{ project.desc }}</p>
                <div class="project-tags">
                  <Tag v-for="tag in project.tags" :key="tag" :value="tag" />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
