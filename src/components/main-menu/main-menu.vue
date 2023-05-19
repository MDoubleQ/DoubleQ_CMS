<template>
  <div class="main-menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
      <h2>Double_Q管理</h2>
    </div>
    <div class="menu">
      <el-menu
        default-active="3"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <!-- 动态遍历菜单选项 -->
        <template v-for="item in userMenu" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">{{
                subItem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>商品统计</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item>用户管理</el-menu-item>
          <el-menu-item>部门管理</el-menu-item>
          <el-menu-item>菜单管理</el-menu-item>
          <el-menu-item>角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Goods /></el-icon>
            <span> 商品中心</span>
          </template>
          <el-menu-item>商品类别</el-menu-item>
          <el-menu-item>商品信息</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><ChatLineSquare /></el-icon>
            <span>随便聊聊</span>
          </template>
          <el-menu-item>你的故事</el-menu-item>
          <el-menu-item>故事列表</el-menu-item>
        </el-sub-menu> -->
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const useLoginStore = useStore()
const userMenu = computed(() => useLoginStore.state.login.userMenu)
console.log(userMenu)
</script>

<style lang="less" scoped>
.main-menu {
  color: #fff;
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    flex-direction: row;
    padding: 10px 16px;
    height: 30px;
    img {
      height: 30px;
      margin-right: 10px;
    }
  }

  .menu {
    .el-menu {
      border-right: none;
      // user-select: none;
      .el-sub-menu {
        .el-menu-item {
          padding-left: 50px;
          background-color: #0c2135;
          &:hover {
            color: #fff;
          }
        }
        .el-menu-item.is-active {
          background-color: #0a60bd;
        }
      }
    }
  }
}
</style>
