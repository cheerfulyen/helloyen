<script setup lang="ts">
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import './ExperienceSection.css'

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
          <Card>
            <template #content>
              <div class="card-meta">
                <span class="card-period">{{ exp.period }}</span>
                <Tag v-if="exp.current" value="仍在職" severity="info" />
                <span class="card-duration">{{ exp.duration }}</span>
              </div>
              <h3 class="card-role">{{ exp.role }}</h3>
              <p class="card-company">{{ exp.company }}</p>
              <p class="card-detail">{{ exp.industry }} · {{ exp.location }}</p>
              <p class="card-salary">{{ exp.salary }}</p>
              <ul class="card-points">
                <li v-for="(point, i) in exp.points" :key="i">{{ point }}</li>
              </ul>
              <div class="card-tags">
                <Tag v-for="tag in exp.tags" :key="tag" :value="tag" />
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
