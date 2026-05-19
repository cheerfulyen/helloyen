<script setup lang="ts">
import Card from 'primevue/card'
import './ContactSection.css'

const contacts = [
  {
    icon: '📱',
    label: '手機',
    value: '0910-128-494',
    note: '可聯絡時間 09:00 ~ 21:00',
    href: null,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'seesaw226357@gmail.com',
    note: null,
    href: 'mailto:seesaw226357@gmail.com',
  },
  {
    icon: '📍',
    label: '所在地',
    value: '新竹縣新豐鄉',
    note: '可前往台北 / 新北 / 桃園 / 新竹 / 台中',
    href: null,
  },
  {
    icon: '💼',
    label: '工作意願',
    value: '全職，可遠端',
    note: '錄取後一個月可到職',
    href: null,
  },
]
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-bg"></div>
    <div class="container">
      <h2 class="section-title light">聯絡 <span>我</span></h2>
      <p class="section-subtitle light">有任何問題或發輝專職的工作機會，歡迎隨時聯繫</p>

      <div class="contact-grid">
        <Card v-for="item in contacts" :key="item.label">
          <template #content>
            <div class="contact-item-inner">
              <div class="contact-icon">{{ item.icon }}</div>
              <div>
                <p class="contact-label">{{ item.label }}</p>
                <a v-if="item.href" :href="item.href" class="contact-value link">{{ item.value }}</a>
                <p v-else class="contact-value">{{ item.value }}</p>
                <p v-if="item.note" class="contact-note">{{ item.note }}</p>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="contact-divider"></div>
      <p class="contact-footer-text">
        擅長前端框架 Angular / React，具備金融業系統開發實務經驗，歡迎業界洽談合作。
      </p>
    </div>
    <footer class="footer">
      <p>© 2025 周彥宏 · 前端工程師 · Designed with Vue 3 + PrimeVue</p>
    </footer>
  </section>
</template>
