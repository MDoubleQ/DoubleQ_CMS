<template>
  <div class="user-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建用户' : '编辑用户'"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realName">
            <el-input
              v-model="formData.realName"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="isNewRef">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入电话号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select
              v-model="formData.roleId"
              placeholder="请选择角色"
              style="width: 100%"
            >
              <template v-for="item in entireRoles" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              v-model="formData.departmentId"
              placeholder="请选择部门"
              style="width: 100%"
            >
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
              ></el-select
            >
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button
            type="primary"
            @click=";(dialogVisible = false), handleConfirmClick()"
          >
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
const dialogVisible = ref(false)
const mainStore = useStore()
const systemStore = useStore()
const formData = reactive({
  name: '',
  realName: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const isNewRef = ref(true)
const editData = ref()
// 设置dialogVisible的方法
function setModalVisible(isNew = true, itemData) {
  // 弹出窗口
  dialogVisible.value = true
  // 设置isNewRef的值
  isNewRef.value = isNew
  // 如果是编辑按钮，并且存在itemData，则将数据填充到表单中
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 否则如果是新建，则清空，之前被保存的数据
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}

// 点击了确定按钮的逻辑
function handleConfirmClick() {
  console.log('点击了确认按钮')
  // 取消对话框
  dialogVisible.value = false
  // 判断是新建用户，还是编辑用户
  if (isNewRef.value) {
    // 创建新的用户
    systemStore.dispatch('system/newUserDataAction', formData)
  } else {
    systemStore.dispatch('system/editUserDataAction', {
      id: editData.value.id,
      userInfo: formData
    })
  }
  console.log(editData.value.id)
}
// 获取部门数据和角色列表
mainStore.dispatch('main/fetchEntireDateAction')
const { entireDepartments, entireRoles } = toRefs(mainStore.state.main)
// 由于异步动作需要一些时间来完成，此时数据为undefined
// console.log(entireDepartments, entireRoles)

// 可以在数据完全获取后在访问
// onMounted(async () => {
//   // 获取部门数据和角色列表
//   await mainStore.dispatch('main/fetchEntireDateAction')
//   const { entireDepartments, entireRoles } = mainStore.state.main

//   // 打印获取到的数据
//   console.log(entireDepartments, entireRoles)
// })

defineExpose({ setModalVisible })
</script>

<style lang="less" scoped>
.user-modal {
  color: #000;
}
</style>
