<script setup lang="ts">
import { ref, onMounted } from 'vue'
import './SkillsSection.css'

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
