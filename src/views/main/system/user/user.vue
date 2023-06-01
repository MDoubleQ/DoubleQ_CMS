<template>
  <div class="user">
    <user-search></user-search>
    <user-content
      ref="contentRef"
      @new-click="handleNewUserClick"
      @edit-click="handleEditUserClick"
    ></user-content>
    <user-modal ref="modalRef"></user-modal>
  </div>
</template>

<script setup>
import userSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'
import userModal from './cpns/user-modal.vue'
import { ref } from 'vue'
const modalRef = ref()
function handleNewUserClick() {
  modalRef.value?.setModalVisible()
}

function handleEditUserClick(itemData) {
  modalRef.value?.setModalVisible(false, itemData)
}
</script>

<style lang="less" scoped>
.user {
  color: #000;
}
</style>
