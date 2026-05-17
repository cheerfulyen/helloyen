<script setup lang="ts">
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

<style scoped>
.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.edu-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edu-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;
}

.edu-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.edu-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  line-height: 1;
  padding-top: 2px;
}

.edu-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.edu-period {
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 500;
}

.edu-level {
  font-size: 0.75rem;
  color: #0ea5e9;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 999px;
  padding: 1px 8px;
  font-weight: 600;
}

.edu-school {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2px;
}

.edu-dept {
  font-size: 0.88rem;
  color: #64748b;
  margin-bottom: 10px;
}

.edu-notes {
  list-style: none;
  padding: 0;
}

.edu-notes li {
  position: relative;
  padding-left: 14px;
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 4px;
  line-height: 1.6;
}

.edu-notes li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: #38bdf8;
  font-weight: 700;
}

.training-card {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 12px;
  padding: 28px;
  color: #f1f5f9;
  position: relative;
  overflow: hidden;
}

.training-card::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: rgba(56, 189, 248, 0.06);
}

.training-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 999px;
  padding: 3px 12px;
  margin-bottom: 16px;
}

.training-org {
  font-size: 1rem;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 4px;
}

.training-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 4px;
}

.training-role {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 16px;
}

.training-card .edu-notes li {
  color: #94a3b8;
}

.training-card .edu-notes li::before {
  color: #38bdf8;
}

.training-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 800px) {
  .edu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
