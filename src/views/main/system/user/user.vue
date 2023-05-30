<template>
  <div class="user">
    <user-search></user-search>
    <user-content></user-content>
  </div>
</template>

<script setup>
import userSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'
</script>

<style lang="less" scoped>
.user {
  color: #000;
}
</style>
