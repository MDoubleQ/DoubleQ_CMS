<template>
  <div class="header-info">
    <div class="operation">
      <div class="icon">
        <el-icon><Bell /></el-icon>
      </div>
      <div class="icon">
        <el-icon><ChatLineRound /></el-icon>
      </div>
      <div class="icon">
        <div class="dot"></div>
        <el-icon><Postcard /></el-icon>
      </div>
    </div>
    <!-- 个人信息 -->
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar
            :size="30"
            src="https://avatars.githubusercontent.com/u/122364450?s=96&v=4"
          />
          <div class="name">info-name</div>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出登录</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><Warning /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Tools /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'

const router = useRouter()
function handleExitClick() {
  // 删除token
  localCache.removeCache('login-token')

  // 跳转到登陆页面
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header-info {
  color: #000;
  display: flex;
  align-items: center;
  .operation {
    display: flex;
    .icon {
      position: relative;
      width: 40px;
      display: flex;

      .el-icon {
        font-size: 20px;
      }

      .dot {
        position: absolute;
        z-index: 9;
        background-color: red;
        width: 6px;
        height: 6px;
        top: -3px;
        right: 14px;
        border-radius: 100%;
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    :glbal(.el-dropdown-menu_item) {
      line-height: 36px !important;
      // padding: 6px 22px;
    }
    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;

      .name {
        margin-left: 5px;
      }
    }
  }
}
</style>
