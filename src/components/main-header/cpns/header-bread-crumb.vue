<template>
  <div class="header-bread-crumb">
    <el-breadcrumb separator-icon="CaretRight">
      <el-breadcrumb-item :to="{ path: '/' }"> homepage </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.header-bread {
  color: #000;
}
</style>
