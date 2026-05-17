<script setup lang="ts">
import './assets/main.css'
import NavBar from './components/NavBar/NavBar.vue'
import HeroSection from './components/HeroSection/HeroSection.vue'
import AboutSection from './components/AboutSection/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection/ExperienceSection.vue'
import EducationSection from './components/EducationSection/EducationSection.vue'
import SkillsSection from './components/SkillsSection/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection/ProjectsSection.vue'
import ContactSection from './components/ContactSection/ContactSection.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>
