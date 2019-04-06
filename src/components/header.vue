<template>
  <el-row>
    <el-col :span="3" class="logo">联合作战指挥系统</el-col>
    <el-col :offset="13" :span="4" style="padding-top: 10px;">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-col>
    <el-col :span="4" style="padding-top: 20px; cursor: pointer;">
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>
.logo{
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  font-family: "微软雅黑";
}
</style>
