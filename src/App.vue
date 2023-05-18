<template>
  <div class="app">
    <h1>App</h1>
    <router-link to="/main">主要</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
}

a {
  color: #000;
}
</style>
