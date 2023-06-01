<template>
  <div class="user-content">
    <div class="user-content-header">
      <h3>用户列表</h3>
      <div class="new-button">
        <el-button type="primary" @click="handleNewUserClick"
          >新建用户</el-button
        >
      </div>
    </div>
    <div class="user-content-table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection" />
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="60px"
        />
        <el-table-column
          align="center"
          prop="name"
          label="用户名"
          width="120px"
        />
        <el-table-column
          align="center"
          prop="realname"
          label="真实姓名"
          width="120px"
        />
        <el-table-column
          align="center"
          prop="cellphone"
          label="手机号码"
          width="150px"
        />
        <el-table-column align="center" prop="enable" label="状态" width="80px">
          <template #default="scope">
            <el-button
              :type="scope.row.enable ? 'primary' : 'danger'"
              size="small"
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createAt" label="创建时间" />
        <el-table-column align="center" prop="updateAt" label="更新时间" />
        <el-table-column align="center" label="操作" width="180px">
          <template #default="scope">
            <el-button
              icon="edit"
              size="small"
              type="primary"
              text
              @click="handleEditBtnClick(scope.row)"
              >编辑</el-button
            >
            <el-button icon="delete" size="small" type="danger" text
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="user-content-pagination">分页</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { toRefs } from 'vue'
const userSystemStore = useStore()
const emits = defineEmits(['newClick', 'editClick'])
userSystemStore.dispatch('system/postUsersListAction')
// const { usersList, usersTotalCount } = computed({
//   ...mapState('system', ['usersList', 'usersTotalCount'])
// })
const { usersList } = toRefs(userSystemStore.state.system)

// console.log(usersList)

// 新建用户的操作
function handleNewUserClick() {
  emits('newClick')
}

// 编辑用户的操作
function handleEditBtnClick(itemData) {
  emits('editClick', itemData)
  console.log('点击了编辑按钮')
}
</script>

<style lang="less" scoped>
.user-content {
  color: #000;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 6px;
  padding: 20px;
  .user-content-header {
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .user-content-table {
    margin: 12px 0;
  }
}
</style>
