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

<style scoped>
.contact-section {
  background: #0f172a;
  position: relative;
  overflow: hidden;
  padding: 80px 0 0;
}

.contact-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 60% at 80% 20%, rgba(56, 189, 248, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 10% 80%, rgba(14, 165, 233, 0.04) 0%, transparent 60%);
  pointer-events: none;
}

.section-title.light {
  color: #f1f5f9;
}

.section-subtitle.light {
  color: #64748b;
}

.section-title span {
  color: #38bdf8;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

.contact-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 20px;
  transition: background 0.2s;
}

.contact-item:hover {
  background: rgba(56, 189, 248, 0.05);
  border-color: rgba(56, 189, 248, 0.15);
}

.contact-icon {
  font-size: 1.6rem;
  line-height: 1;
  flex-shrink: 0;
  padding-top: 2px;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #38bdf8;
  margin-bottom: 4px;
}

.contact-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 4px;
}

.contact-value.link {
  color: #f1f5f9;
  transition: color 0.2s;
}

.contact-value.link:hover {
  color: #38bdf8;
}

.contact-note {
  font-size: 0.8rem;
  color: #64748b;
}

.contact-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 32px;
}

.contact-footer-text {
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.8;
  padding-bottom: 48px;
}

.footer {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px 24px;
  text-align: center;
}

.footer p {
  font-size: 0.8rem;
  color: #475569;
}

@media (max-width: 600px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
