<!-- 
標準的vue寫法:
<script setup></script> 
<templete></templete>
<style scope></style>

語法範例1:
  嵌入純文字:   {{ 變數名稱 }}
  嵌入屬性:     <div v-bing:屬性名稱="變數名稱">內文</div>
                <div :屬性名稱="變數名稱">內文</div>
  嵌入HTML標籤: <div v-html="變數名稱">

  常用變化:
    文字變換大寫 {{ 變數名稱.toUpperCase() }}
    搭配三元運算  :color="布林值變數?'red':'green'"

語法範例2:
  判斷式: <div v-if="變數名稱 >=< 2000"></div>
          <div v-else-if="判斷式"></div>
          <div v-else></div>

  迴圈:   <div v-for="變數 in 陣列變數">陣列中有 {{變數}}</div>
          <div v-for="(變數, 序數) in 陣列變數">陣列中第{{序數}}個是{{變數}}</div>
          <div v-for="(value, key) in 物件變數">物件中有{{key}}的值是{{value}}</div>

語法範例3:
  事件處理:  <button v-on:click="方法變數"></button>
            <button @click="方法變數"></button>
            <button @mouseover="方法變數"></button>
    修飾字:  <button @click.once="方法變數"></button> 僅觸發一次
            <a @click.prevent="方法變數" href="網址"></a> 停止預設行為(a 標籤點擊不會導向)

語法範例4:
  響應式: 
  <script set up>
    let 變數名稱 = ref("內容");
    let 方法名稱 = function(){變數名稱.value =  "新內容"};
  </script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  <templete>
   <div @click="方法名稱">{{ 變數名稱 }}</div>
  </templete>

  輸入元件響應:
  <script set up>
    let 變數名稱 = ref("內容");
    let gender = ref(null);
    let array = ref([]);
  </script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  <templete>
    <input type="text" v-model="變數名稱"></input>
    <span> {{變數名稱}} </span>

    <input type="radio" value="F" v-model="gender">
    <input type="radio" value="M" v-model="gender">
    <span> 性別: {{gender}} </span>

    <input type="checkbox" value="A" v-model="array">
    <input type="checkbox" value="B" v-model="array">
    <input type="checkbox" value="C" v-model="array">
    <span> 選擇的有: {{array}} </span>

    <select v-model="gender">
      <option value="" selected disabled>請選擇</option>
      <option value="M">男</option>
      <option value="F">女</option>
    </select>
    <span> 性別: {{gender}} </span>

  </templete>
-->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloWeHelp from './views/HelloWeHelp.vue'
</script>

<template>
  <HelloWeHelp />
<!--
    <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
-->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
