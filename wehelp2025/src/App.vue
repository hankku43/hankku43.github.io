<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <div :class="{ 'mode-dark': isDark }">

      <!-- Header -->
      <header class="site-header">
        <div class="left">
          <div class="brand">古亦弘 • WeHelp</div>
        </div>
        <div class="right">
          <n-switch v-model:value="isDark" size="small" aria-label="切換深色/淺色模式">
            <template #checked-icon>
              <span class="switch-icon">🌙</span>
            </template>
            <template #unchecked-icon>
              <span class="switch-icon">☀️</span>
            </template>
          </n-switch>
        </div>
      </header>

      <!-- Hero -->
      <section class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">歡迎 — 我是 古亦弘</h1>
          <p class="hero-sub">申請 WeHelp Academy｜前端工程師訓練生</p>
          <n-button type="primary" size="large" class="hero-btn" @click="scrollTo('intro')">開始閱讀</n-button>
          <div class="scroll-indicator" @click="scrollTo('intro')">⬇️</div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="vortex"></div>
        </div>
      </section>

      <!-- Intro -->
      <main class="main-content">
        <section ref="intro" class="intro-card">
          <n-card class="glass" title="個人簡介與申請動機">
            <div class="intro-grid">
              <div class="avatar-wrap">
                <div class="avatar">A</div>
              </div>
              <div>
                <h2 class="name">古亦弘</h2>
                <p class="short">我目前是一名前端工程師/應屆畢業生，熱衷於寫乾淨、有可讀性的前端程式碼，擅長 Vue 3 與現代化 UI 實作。</p>
                <p class="motivation">我想參加 WeHelp Academy，期望在 6 個月密集實作中提升大型專案協作能力，以及加強深度學習模型在前端或後端的整合技能。</p>
              </div>
            </div>
          </n-card>
        </section>

        <!-- Q&A Cards -->
        <section class="qa-list">
          <n-grid :cols="3" :x-gap="24" :y-gap="24" responsive>
            <n-grid-item v-for="(q, idx) in qas" :key="idx">
              <n-card class="glass qa-card" hoverable>
                <n-collapse>
                  <n-collapse-item :title="q.question">
                    <div class="qa-answer">
                      <p v-html="q.answer"></p>
                    </div>
                  </n-collapse-item>
                </n-collapse>
              </n-card>
            </n-grid-item>
          </n-grid>
        </section>

        <!-- Footer -->
        <footer class="site-footer">
          <div>
            © 2025 古亦弘 •
            <a href="#">GitHub</a> •
            <a href="#">Email</a> •
            <span class="social-icon">💼</span>
            <span class="social-icon">📧</span>
          </div>
        </footer>
      </main>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'

const isDark = ref(true)
const intro = ref(null)

const scrollTo = (id) => {
  if (id === 'intro') {
    intro.value?.scrollIntoView({ behavior: 'smooth' })
  }
}

// Q&A data
const qas = [
  {
    question: '目前的職業背景，若是剛畢業，畢業的科系為何？',
    answer: `我目前是一名前端全端工程師，畢業於國立臺灣大學森林系（學士與碩士皆為森林科學背景）。雖然本科與碩士專業為生技與植物研究，但我自學前端程式，完成多個專案與互動式小遊戲，成功轉職為 JAVA 全端工程師，具備跨領域問題解決能力與實務經驗。`
  },
  {
    question: '如果參與這個訓練，會怎麼安排學習時間？',
    answer: `我會採取系統化與有回饋的學習方式：<br>1) 平日：每日投入約 4 小時專注學習。<br>2) 假日：每日投入約 6 小時練習與專案實作。<br>3) 每週末：與同儕進行一次 code review，檢視程式品質並討論改進方案，以持續提升技術能力與合作效率。`
  },
  {
    question: '請描述一件產生明顯負面情緒的經歷，如何處理該情緒？',
    answer: `在專案中曾因溝通不良而導致功能延遲，當時感到焦慮。我先冷靜分析問題、整理需求與流程，並主動提出每日短會追蹤進度。最終，我學會拆解任務、建立清晰 API 與工作優先順序，不僅解決了專案瓶頸，也提升團隊協作效率。`
  },
  {
    question: '最想使用自己開發的深度學習模型解決什麼問題？',
    answer: `我希望開發一個自動化資料標註模型，降低人工標註成本並提升資料品質，藉此支援機器學習與 AI 應用，讓跨領域資料整合與分析更高效。`
  },
  {
    question: '若終究無法達到 OpenAI 的程度，為何要學習基礎模型的實作？',
    answer: `基礎模型的實作能讓我深入理解資料處理、訓練流程與模型評估。即便無法達到前沿水準，掌握底層能力仍可應用於實務產品，並為後續進階開發奠定穩固基礎。`
  },
  {
    question: '從上次提出申請至今，多做了哪些努力？',
    answer: `我完成了以下進修與專案：<br>• 開發 3 個前端專案，涵蓋 UI/UX 設計與互動效果。<br>• 熟練 Vue 3 Composition API 與前端測試流程。<br>• 練習 PyTorch 模型訓練，掌握資料前處理與模型驗證。<br>• 持續探索 AI 工具，提升跨領域整合能力與問題解決能力。`
  },
  {
    question: '其他想要對我們說的事情？',
    answer: `感謝 WeHelp 提供這次機會。我希望能加入重視實作與回饋的環境，與優秀同儕共同成長，持續拓展技術視野，並將跨領域的學習與實務能力應用於實際專案中。`
  },
]
</script>

<style>
:root {
  --bg-light: #f1f5f9;
  --text-light: #0f1724;
  --subtext-light: #475569;
  --card-bg-light: #ffffff;

  --bg-dark: #020617;
  --text-dark: #e6eef8;
  --subtext-dark: #cbd5e1;
  --card-bg-dark: #071226;
}

/* Reset & Base */
* {
  box-sizing: border-box;
}

body,
html,
#app {
  height: 100%;
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  background-color: var(--bg-light);
  color: var(--text-light);
  transition: background 0.5s, color 0.5s;
}

.mode-dark {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}

/* Header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 60;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  color: var(--text-light);
  transition: all 0.3s;
}

.mode-dark .site-header {
  background: rgba(0, 0, 0, 0.18);
  color: var(--text-dark);
}

.site-header .brand {
  font-weight: 600;
  font-size: 18px;
}

.switch-icon {
  display: inline-block;
  transition: transform 0.5s, opacity 0.5s;
}

.n-switch__button:hover .switch-icon {
  transform: rotate(20deg);
}

/* Hero */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(120deg, #f1f5f9, #e2e8f0);
  color: var(--text-light);
  transition: background 0.5s, color 0.5s;
}

.mode-dark .hero {
  background: linear-gradient(120deg, #020617, #071330);
  color: var(--text-dark);
}

.hero-title {
  font-size: 64px;
  margin: 0 0 16px;
  animation: fadeInUp 1s ease forwards;
  opacity: 0;
}

.hero-sub {
  margin: 0 0 32px;
  font-size: 22px;
  opacity: 0.9;
  animation: fadeInUp 1.2s ease forwards;
}

.hero-btn {
  transition: all 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.hero-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.scroll-indicator {
  margin-top: 24px;
  cursor: pointer;
  animation: bounce 2s infinite alternate;
  font-size: 28px;
}

/* Vortex */
.hero-visual {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.vortex {
  position: absolute;
  width: 1600px;
  height: 1600px;
  right: -400px;
  top: -400px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.12), transparent 35%),
    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.06), transparent 35%),
    radial-gradient(circle at 50% 50%, rgba(255, 200, 255, 0.08), transparent 50%);
  transform: rotate(0deg);
  filter: blur(80px);
  animation: rotateVortex 40s linear infinite;
}

/* Main Content */
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 40px 80px;
  color: var(--text-light);
  transition: color 0.5s;
}

.mode-dark .main-content {
  color: var(--text-dark);
}

/* Glass Card */
.glass {
  background: transparent;
  transition: all 0.4s;
}

.glass .n-card__body {
  background: var(--card-bg-light) !important;
  color: var(--text-light) !important;
  border-radius: 12px;
  transition: all 0.4s;
}

.mode-dark .glass .n-card__body {
  background: var(--card-bg-dark) !important;
  color: var(--text-dark) !important;
  border: 1px solid rgba(255, 255, 255, 0.04) !important;
}

.glass.qa-card:hover .n-card__body {
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12) !important;
  transform: translateY(-3px);
  transition: all 0.35s ease;
}

/* Intro Grid */
.intro-grid {
  display: flex;
  gap: 40px;
  align-items: center;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f5d75, #2b3a67);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: white;
  transition: background 0.4s;
}

.mode-dark .avatar {
  background: linear-gradient(135deg, #1f2937, #0b0e17);
}

.name {
  margin: 0 0 8px;
  font-size: 32px;
}

.short,
.motivation {
  margin: 0 0 12px;
  font-size: 18px;
  color: var(--subtext-light);
  transition: color 0.4s;
}

.mode-dark .short,
.mode-dark .motivation,
.mode-dark .qa-answer,
.mode-dark .site-footer {
  color: var(--subtext-dark);
}

/* QA */
.qa-list {
  margin-top: 60px;
}

.qa-answer {
  line-height: 1.9;
  font-size: 16px;
  color: var(--subtext-light);
  transition: color 0.3s;
}

/* Footer */
.site-footer {
  margin-top: 64px;
  text-align: center;
  font-size: 14px;
  color: var(--subtext-light);
  transition: color 0.3s;
}

.site-footer a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s;
}

.mode-dark .site-footer a {
  color: var(--text-dark);
}

.social-icon {
  margin-left: 6px;
  transition: transform 0.3s, color 0.3s;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #ffbb33;
}

/* Animations */
@keyframes rotateVortex {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

/* Responsive */
@media (max-width:1024px) {
  .intro-grid {
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    margin: 0 auto;
  }
}

@media (max-width:640px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-sub {
    font-size: 16px;
  }

  .hero-btn {
    width: 90%;
  }

  .intro-grid {
    gap: 24px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    font-size: 36px;
    margin: 0 auto;
  }

  n-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
