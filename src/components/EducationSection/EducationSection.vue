<script setup lang="ts">
import './EducationSection.css'

const educations = [
  {
    school: '南臺科技大學',
    dept: '數位資訊傳播學系',
    level: '大學畢業',
    period: '2016/09 ~ 2020/06',
    notes: ['獲得 Adobe 國際認證', '初次學習 HTML、CSS 網頁設計', '使用 Adobe Dreamweaver 進行學習實作'],
  },
  {
    school: '忠信高中',
    dept: '資訊科',
    level: '高職畢業',
    period: '2012/09 ~ 2015/06',
    notes: ['修習計算機概論、電子邏輯閘等課程', '參加教育部智慧機器人輪型競速自走車比賽，榮獲高職組第 3 名'],
  },
]

const training = {
  org: '中壢資展國際（資策會）',
  name: '前端工程師養成班 第 57 屆',
  role: '小組組長',
  skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Node.js', 'React', 'RESTful API'],
  notes: [
    '擔任小組組長，執行會議主導、進度控管、困難排除、技術指導',
    '習得 HTML、CSS、JavaScript、jQuery、PHP、Node.js、React 和 RESTful API 等技術',
    '完成電商平台（PAWER）大型專題',
  ],
}
</script>

<template>
  <section id="education" class="section section-alt">
    <div class="container">
      <h2 class="section-title">學歷 <span>背景</span></h2>
      <p class="section-subtitle">學術教育與專業培訓</p>

      <div class="edu-grid">
        <div class="edu-cards">
          <div v-for="(edu, i) in educations" :key="i" class="edu-card">
            <div class="edu-icon">🎓</div>
            <div class="edu-content">
              <div class="edu-meta">
                <span class="edu-period">{{ edu.period }}</span>
                <span class="edu-level">{{ edu.level }}</span>
              </div>
              <h3 class="edu-school">{{ edu.school }}</h3>
              <p class="edu-dept">{{ edu.dept }}</p>
              <ul class="edu-notes">
                <li v-for="(note, j) in edu.notes" :key="j">{{ note }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="training-card">
          <div class="training-badge">專業培訓</div>
          <h3 class="training-org">{{ training.org }}</h3>
          <p class="training-name">{{ training.name }}</p>
          <p class="training-role">擔任職務：{{ training.role }}</p>
          <ul class="edu-notes" style="margin-bottom: 16px;">
            <li v-for="(note, i) in training.notes" :key="i">{{ note }}</li>
          </ul>
          <div class="training-skills">
            <span v-for="skill in training.skills" :key="skill" class="badge badge-primary">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
