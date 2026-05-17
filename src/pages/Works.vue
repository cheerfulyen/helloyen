<script setup lang="ts">
import './Works.css'

const works = [
  {
    emoji: '🛒',
    badge: '團隊專案',
    title: 'PAWER 電商平台',
    subtitle: '寵物用品電商 — 全端開發',
    desc: '與團隊合作開發完整電商平台，負責前端 React 元件設計與後端 PHP RESTful API 串接，實作購物車、訂單管理與會員系統。',
    points: [
      '實作 React 動態購物車，使用 Context API 管理全域狀態',
      '設計 PHP + MySQL RESTful API，涵蓋商品 CRUD 與訂單流程',
      '串接金流 API 模擬付款流程',
      '使用 Figma 完成 UI 設計稿並落地實作',
    ],
    tags: ['React', 'PHP', 'MySQL', 'Bootstrap', 'Figma'],
    links: [],
  },
  {
    emoji: '🎮',
    badge: '個人專案',
    title: '網頁小遊戲',
    subtitle: '純前端互動遊戲',
    desc: '以純 HTML / CSS / JavaScript 實作的瀏覽器小遊戲，無任何框架依賴，著重 Canvas 動畫與鍵盤事件處理。',
    points: [
      '使用 Canvas API 實作即時渲染與碰撞偵測',
      '鍵盤 / 觸控事件雙模式支援',
      '封裝遊戲迴圈 (requestAnimationFrame)，維持穩定 60fps',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    links: [],
  },
  {
    emoji: '✨',
    badge: '個人專案',
    title: 'jQuery 動畫效果',
    subtitle: '互動動畫展示頁',
    desc: '利用 jQuery 搭配 CSS Transition 製作一系列頁面互動動畫，包含視差捲動、元素入場動畫與 Hover 特效。',
    points: [
      '實作 Intersection Observer 觸發元素入場動畫',
      '視差捲動 (parallax) 背景效果',
      'CSS Keyframe 搭配 JS 動態控制',
    ],
    tags: ['jQuery', 'CSS', 'JavaScript'],
    links: [],
  },
]
</script>

<template>
  <section class="works-hero">
    <div class="container">
      <p class="works-hero-label">Portfolio</p>
      <h1 class="works-hero-title">我的作品集</h1>
      <p class="works-hero-desc">記錄每個參與或獨立完成的專案，從需求分析到上線部署的完整歷程。</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="works-grid">
        <article v-for="work in works" :key="work.title" class="work-card">
          <div class="work-card-header">
            <span class="work-emoji">{{ work.emoji }}</span>
            <span class="work-badge">{{ work.badge }}</span>
          </div>
          <div class="work-card-body">
            <h2 class="work-title">{{ work.title }}</h2>
            <p class="work-subtitle">{{ work.subtitle }}</p>
            <p class="work-desc">{{ work.desc }}</p>
            <ul class="work-points">
              <li v-for="point in work.points" :key="point">{{ point }}</li>
            </ul>
            <div class="work-tags">
              <span v-for="tag in work.tags" :key="tag" class="work-tag">{{ tag }}</span>
            </div>
            <div v-if="work.links.length" class="work-links">
              <a v-for="link in work.links" :key="link.label" :href="link.url" target="_blank" rel="noopener" :class="['work-link', link.type]">
                {{ link.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
