<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <main-menu :is-fold="isFold"></main-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @fold-change="handleFoldChange"></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'

import { ref } from 'vue'
// import router from '@/router'
// import { localCache } from '@/utils/cache'
// function handleExitClick() {
//   // 删除token
//   localCache.removeCache('login-token')

//   // 跳转到登陆页面
//   router.push('/login')
// }

// 处理 Main-header 中的折叠变化
const isFold = ref(false)
function handleFoldChange(flag) {
  isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
  color: #000;
  height: 100%;
  .main-content {
    height: 100%;
    .el-aside {
      background-color: #001529;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-main {
      background-color: #ffd1d1;
    }
  }
}
</style>
