<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs v-model="activeName" type="border-card" stretch>
        <el-tab-pane label="账号登陆" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span>账号登陆</span>
            </div>
          </template>
          <panel-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </div>
          </template>
          <panel-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="check-box">
      <el-checkbox v-model="isRemberPassword" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      @click="loginBtnClick"
      class="login-btn"
      size="large"
      type="primary"
    >
      <span>登录</span>
    </el-button>
  </div>
</template>

<script setup>
import { localCache } from '@/utils/cache'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'
import { ref, watch } from 'vue'
const isRemberPassword = ref(localCache.getCache('isRemberPassword') ?? false)
const activeName = ref('account')

// 侦听是否记住密码，对checkbox进行勾选
watch(isRemberPassword, (newValue) => {
  console.log(newValue)
  localCache.setCache('isRemberPassword', newValue)
})

const accountRef = ref()

function loginBtnClick() {
  if (activeName.value === 'account') {
    // 1. 获取子组件的实例
    accountRef.value?.loginAction(isRemberPassword.value)
    // 2. 调用方法

    // console.log('用户进行账号登陆')
  } else {
    console.log('用户进行手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  color: #000;
  width: 300px;
  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .check-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 6px;
    width: 100%;
  }
}
</style>
