<script setup lang="ts">
const experiences = [
  {
    company: '沐創資訊有限公司',
    industry: '電腦軟體服務業',
    role: '前端軟體工程師',
    period: '2024/12 ~ 仍在職',
    location: '台北市中山區',
    salary: '月薪 50,000 / 年薪 600,000',
    duration: '~6個月',
    current: true,
    tags: ['Angular', 'React', 'JavaScript', 'CSS', '金融系統'],
    points: [
      '開發應收帳款系統、網路銀行、無障礙網銀及無障礙匯利率官方網站等金融業專案',
      '採前後端分離架構，使用 Angular、React 進行新專案開發及既有系統維護',
      '負責釐清需求、前端問題排除，與後端工程師密切溝通確保 API 串接規格',
      '關注程式碼可維護性、使用者體驗與無障礙設計',
    ],
  },
  {
    company: '桃苗汽車股份有限公司',
    industry: '汽機車及零配件批發業 500人以上',
    role: '服務人員（客服專員）',
    period: '2020/04 ~ 2024/03',
    location: '桃園市中壢區',
    salary: '月薪 45,000 / 年薪 630,000',
    duration: '4 年',
    current: false,
    tags: ['客戶服務', '保固辦理', '影音配備', '出險理賠', '板金估價'],
    points: [
      '曾任廠區代表保固專員：辦理原廠保固業務、評估保固條件、審查損品',
      '曾任廠區代表影音專員：擔任外包廠商窗口，處理音響等外包配備售後服務',
      '主要擔任客戶與維修技師間的橋樑，協助保養、維修、改裝、板金估價、出險理賠及二手車業務',
    ],
  },
  {
    company: '威秀影城股份有限公司',
    industry: '電影片映演業',
    role: '外場服務員',
    period: '2016/09 ~ 2020/08',
    location: '台北市信義區',
    salary: '平均時薪 160 元',
    duration: '4 年',
    current: false,
    tags: ['人力規劃', '場館營運', '食物製前準備', '管理 9~12 人'],
    points: [
      '管理 9~12 人的外場服務團隊，負責人力規劃與控管',
      '協助場館日常營運、食物製前準備及顧客服務',
    ],
  },
]
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">工作 <span>經歷</span></h2>
      <p class="section-subtitle">總年資 7~8 年</p>
      <div class="timeline">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          :class="['timeline-item', { current: exp.current }]"
        >
          <div class="timeline-dot">
            <div class="dot-inner"></div>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <div class="card-meta">
                <span class="card-period">{{ exp.period }}</span>
                <span v-if="exp.current" class="current-badge">仍在職</span>
                <span class="card-duration">{{ exp.duration }}</span>
              </div>
              <h3 class="card-role">{{ exp.role }}</h3>
              <p class="card-company">{{ exp.company }}</p>
              <p class="card-detail">{{ exp.industry }} · {{ exp.location }}</p>
              <p class="card-salary">{{ exp.salary }}</p>
            </div>
            <ul class="card-points">
              <li v-for="(point, i) in exp.points" :key="i">{{ point }}</li>
            </ul>
            <div class="card-tags">
              <span v-for="tag in exp.tags" :key="tag" class="badge badge-primary">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, #38bdf8, #e2e8f0);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 20px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #e2e8f0;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-item.current .timeline-dot {
  background: #38bdf8;
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
}

.dot-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
}

.timeline-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 28px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;
}

.timeline-card:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.timeline-item.current .timeline-card {
  border-color: rgba(56, 189, 248, 0.3);
  background: linear-gradient(to bottom right, #fff, rgba(56, 189, 248, 0.02));
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.card-period {
  font-size: 0.82rem;
  color: #94a3b8;
  font-weight: 500;
}

.card-duration {
  font-size: 0.78rem;
  color: #cbd5e1;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  padding: 1px 8px;
}

.current-badge {
  font-size: 0.75rem;
  color: #0ea5e9;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 999px;
  padding: 1px 8px;
  font-weight: 600;
}

.card-role {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.card-company {
  font-size: 0.95rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 2px;
}

.card-detail {
  font-size: 0.82rem;
  color: #94a3b8;
  margin-bottom: 2px;
}

.card-salary {
  font-size: 0.82rem;
  color: #94a3b8;
  margin-bottom: 16px;
}

.card-points {
  list-style: none;
  margin-bottom: 16px;
}

.card-points li {
  position: relative;
  padding-left: 16px;
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 8px;
  line-height: 1.7;
}

.card-points li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #38bdf8;
  font-size: 0.8rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
