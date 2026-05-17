<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  emoji: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    emoji: '🖥️',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS / SCSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Angular', level: 80 },
      { name: 'Bootstrap', level: 75 },
      { name: 'jQuery', level: 80 },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'PHP', level: 60 },
      { name: 'MySQL', level: 65 },
      { name: 'WebSocket', level: 60 },
      { name: 'RESTful API', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    emoji: '🛠️',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'Postman', level: 75 },
    ],
  },
  {
    title: 'Design Tools',
    emoji: '🎨',
    skills: [
      { name: 'Figma', level: 65 },
      { name: 'Photoshop', level: 55 },
    ],
  },
]

const animated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animated.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  const el = document.getElementById('skills')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">技能 <span>專長</span></h2>
      <p class="section-subtitle">各項技術的熟練程度</p>
      <div class="skills-grid">
        <div v-for="cat in categories" :key="cat.title" class="skill-card">
          <div class="skill-card-header">
            <span class="skill-emoji">{{ cat.emoji }}</span>
            <h3 class="skill-cat-title">{{ cat.title }}</h3>
          </div>
          <div class="skill-list">
            <div v-for="skill in cat.skills" :key="skill.name" class="skill-item">
              <div class="skill-label">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-pct">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar-bg">
                <div
                  class="skill-bar-fill"
                  :style="{ width: animated ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.skill-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;
}

.skill-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
}

.skill-emoji {
  font-size: 1.4rem;
  line-height: 1;
}

.skill-cat-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.skill-item {}

.skill-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.skill-name {
  font-size: 0.88rem;
  font-weight: 500;
  color: #334155;
}

.skill-pct {
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 500;
}

.skill-bar-bg {
  height: 6px;
  background: #f1f5f9;
  border-radius: 999px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(to right, #38bdf8, #0ea5e9);
  border-radius: 999px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 700px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
