<template>
  <div class="panel-account">
    <el-form
      :model="account"
      label-width="60px"
      size="large"
      :rules="accountRules"
      status-icon
      ref="formRef"
    >
      <el-form-item label-position="left" label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label-position="left" label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'

const account = reactive({
  name: '',
  password: ''
})

// 定义校验规则
const accountRules = reactive({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 9, message: '用户名必须是3-9位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,20}$/,
      message: '密码必须是长度为6-20位、由数字或字母组成',
      trigger: 'blur'
    }
  ]
})

const useLoginStore = useStore()

// 执行账号的登录逻辑
const formRef = ref()
function loginAction() {
  formRef.value.validate((valid) => {
    if (valid) {
      ElMessage({
        message: '验证成功，登录的操作',
        type: 'success'
      })

      const name = account.name
      const password = account.password

      // console.log(name, password)
      //  向服务器发送网络请求（携带账号和密码）
      useLoginStore.dispatch('login/fetchAccountLogin', { name, password })
    } else {
      ElMessage.error('请输入正确的格式后再操作')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.panel-account {
  color: #000;
}
</style>
