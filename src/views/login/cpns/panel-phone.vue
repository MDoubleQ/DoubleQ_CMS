<template>
  <div class="panel-phone">
    <el-form label-width="60px" size="large">
      <el-form-item label="手机号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verify-code">
          <el-input></el-input>
          <span
            ><el-button class="verify-btn" type="primary"
              >获取验证码</el-button
            ></span
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.verify-code {
  display: flex;
  .verify-btn {
    width: 90px;
    margin-left: 6px;
  }
}
</style>
