<script setup lang="ts">
import './ContactSection.css'
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-bg"></div>
    <div class="container">
      <h2 class="section-title light">聯絡 <span>我</span></h2>
      <p class="section-subtitle light">有任何合作機會或問題，歡迎隨時聯繫</p>
      <div class="contact-grid">
        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div class="contact-info">
            <p class="contact-label">手機</p>
            <p class="contact-value">0910-128-494</p>
            <p class="contact-note">可聯絡時間 09:00 ~ 21:00</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">✉️</div>
          <div class="contact-info">
            <p class="contact-label">Email</p>
            <a class="contact-value link" href="mailto:seesaw226357@gmail.com">
              seesaw226357@gmail.com
            </a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div class="contact-info">
            <p class="contact-label">所在地</p>
            <p class="contact-value">新竹縣新豐鄉</p>
            <p class="contact-note">可前往台北 / 新北 / 桃園 / 新竹 / 台中</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">💼</div>
          <div class="contact-info">
            <p class="contact-label">工作意願</p>
            <p class="contact-value">全職，可遠端</p>
            <p class="contact-note">錄取後一個月可到職</p>
          </div>
        </div>
      </div>
      <div class="contact-divider"></div>
      <p class="contact-footer-text">
        擅長前端框架 Angular / React，具備金融業系統開發實務經驗，歡迎業界洽談合作。
      </p>
    </div>
    <footer class="footer">
      <p>© 2025 周彥宏 · 前端工程師 · Designed with Vue 3</p>
    </footer>
  </section>
</template>
