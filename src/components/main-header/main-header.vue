<template>
  <div class="main-header">
    <div class="menu-icon">
      <el-icon size="28" @click="handleMenuIconClick">
        <component :is="isFold ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">
        <!-- <header-bread-crumb></header-bread-crumb> -->
      </div>
      <div class="info">
        <header-info></header-info>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerInfo from './cpns/header-info.vue'
// import headerBreadCrumb from './cpns/header-bread-crumb.vue'
import { ref } from 'vue'

// 记录状态
const isFold = ref(false)

// 内部自定义事件
const emit = defineEmits(['foldChange'])
function handleMenuIconClick() {
  // 内部改变状态
  isFold.value = !isFold.value

  // 将事件和状态传递给父组件
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
