<template>
  <n-config-provider>
    <!-- Hero / Welcome Page -->
    <section class="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <h1 class="text-4xl font-bold mb-4">歡迎來到我的申請頁面</h1>
      <n-button type="primary" size="large" @click="scrollToIntro">開始</n-button>
    </section>

    <!-- 個人簡介與申請動機 -->
    <section ref="intro" class="py-16 px-6 flex justify-center bg-gray-50">
      <n-card title="個人簡介與申請動機" class="max-w-3xl w-full">
        <div class="flex items-center space-x-6">
          <img src="" alt="我的照片" class="w-28 h-28 rounded-full object-cover" />
          <div>
            <h2 class="text-xl font-bold mb-2">你的名字</h2>
            <p class="mb-2">簡短的自我介紹...</p>
            <p class="text-gray-600">我想申請 WeHelp，因為...</p>
          </div>
        </div>
      </n-card>
    </section>

    <!-- 問題與回答 Cards -->
    <section class="py-16 px-6 bg-white">
      <n-space vertical size="large" class="max-w-3xl mx-auto">
        <n-card v-for="(qa, index) in questions" :key="index" :title="qa.question" hoverable>
          <p>{{ qa.answer }}</p>
        </n-card>
      </n-space>
    </section>

    <!-- Footer -->
    <footer class="py-8 text-center bg-gray-100 text-sm text-gray-500">
      © 2025 你的名字 | <a href="https://github.com/yourname" class="text-blue-600">GitHub</a>
    </footer>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const intro = ref(null)

const scrollToIntro = () => {
  intro.value?.scrollIntoView({ behavior: 'smooth' })
}

const questions = [
  { question: '目前的職業背景/科系？', answer: '...' },
  { question: '學習時間安排？', answer: '...' },
  { question: '負面情緒經歷與處理？', answer: '...' },
  { question: '最想用深度學習解決的問題？', answer: '...' },
  { question: '為何要學習基礎模型？', answer: '...' },
  { question: '其他想說的事情？', answer: '...' }
]
</script>
