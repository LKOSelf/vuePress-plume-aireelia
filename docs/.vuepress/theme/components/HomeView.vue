<script setup lang="ts">

</script>

<template>
  <main class="home">
    <div class="desc">
    <h1 class = "hero-name">LKOSelf</h1>
    <h2 class = "hero-tagline">——Live and learn!</h2>
    <p class="hero-text">欢迎来到我的博客，愿这里的每一个字都能与你共鸣.</p>
    <RouterLink to="/blog/" class="button">博客</RouterLink>
    <RouterLink to="/notes/" class="button">知识库</RouterLink>
    </div>
    <ImageCard
    image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
    title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
    description="今天照片中的灯塔位于葡萄牙南部海岸阿尔加维的卡沃埃罗。阿尔凡齐纳灯塔建于1919年，照耀着大海，帮助船只在该地区周围危险的水域航行。这座灯塔是著名的旅游胜地，同时也是该地区与海洋紧密联系的象征。如果你有幸住在灯塔附近，那么本周末就是拜访灯塔的最佳时机。"
    href="/"
    author="Andreas Kunz"
    date="2024/08/16"
    class="home-image"
  />
</main>
</template>
