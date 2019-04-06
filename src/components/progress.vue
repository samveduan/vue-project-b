<template>
  <div>
    <el-breadcrumb separator="/" class="margin-bottom-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>Progress 进度条</el-breadcrumb-item>
    </el-breadcrumb>

    <el-progress :percentage="0"></el-progress>
    <el-progress :percentage="70"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>
  export default {
    name: 'progress'
  }
</script>
