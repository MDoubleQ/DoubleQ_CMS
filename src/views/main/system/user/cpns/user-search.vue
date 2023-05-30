<template>
  <div class="user-search">
    <!-- 搜索表单 -->
    <el-form :model="searchForm" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入查询的用户名"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realName">
            <el-input
              v-model="searchForm.realName"
              placeholder="请输入查询的真实姓名"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input
              v-model="searchForm.cellphone"
              placeholder="请输入查询的电话号码"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select v-model="searchForm.enable" placeholder="请选择状态">
              <el-option label="启用" value="1" />
              <el-option label="禁用" value="0" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 重置和搜索按钮 -->
    <div class="button">
      <el-button icon="refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="search" @click="handleQueryClick" type="primary"
        >查询</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const searchForm = reactive({
  name: '',
  realName: '',
  cellphone: '',
  enable: 1,
  createAt: []
})

function handleResetClick() {
  searchForm.name = ''
  searchForm.realName = ''
  searchForm.cellphone = ''
  searchForm.enable = ''
  searchForm.createAt = ''
}

function handleQueryClick() {
  console.log('handleQueryClick')
}
</script>

<style lang="less" scoped>
.user-search {
  padding: 20px 0;
  background-color: #fff;
  border-radius: 6px;
  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
  .button {
    text-align: right;
    padding: 0 30px 10px 0;
    .el-button {
      height: 36px;
      padding: 0 20px;
    }
  }
}
</style>
