<template>
  <div>
    首页
    <el-button @click="onClick1">默认按钮</el-button>
    <el-button @click="alert">默认按钮</el-button>
  </div>
</template>

<script>
import request from '../helpers/request.js'
window.request = request

export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    onClick1() {
      this.$message.error("错了哦，这是一条错误消息");
    },
    alert() {
      this.$alert();
    }
  }
};
</script>

<style>
</style>