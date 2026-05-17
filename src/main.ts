import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

const ResumePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: ResumePreset,
    options: {
      darkModeSelector: false,
    },
  },
})

app.mount('#app')

// DEV ONLY: find overflowing elements via scrollWidth
if (import.meta.env.DEV) {
  setTimeout(() => {
    const docScrollW = document.documentElement.scrollWidth
    const docClientW = document.documentElement.clientWidth
    console.log('[RWD check] scrollWidth=', docScrollW, ' clientWidth=', docClientW, docScrollW > docClientW ? '⚠️ OVERFLOW!' : '✅ OK')
    document.querySelectorAll('*').forEach(el => {
      const h = el as HTMLElement
      if (h.scrollWidth > h.clientWidth + 2) {
        console.warn('[overflow src]', h.tagName, h.className?.slice(0, 80), '| scrollW=', h.scrollWidth, 'clientW=', h.clientWidth)
      }
    })
  }, 1500)
}
