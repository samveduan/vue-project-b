<template>
  <el-row>
    <el-col :span="5" class="logo">X X X X X X系统</el-col>
    <el-col :offset="12" :span="4" style="padding-top: 10px;">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-col>
    <el-col :span="2" :offset="1" style="padding-top: 20px; cursor: pointer;">
      <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>北京</el-dropdown-item>
          <el-dropdown-item>上海</el-dropdown-item>
          <el-dropdown-item>广州</el-dropdown-item>
          <el-dropdown-item divided>深圳</el-dropdown-item>
          <el-dropdown-item disabled>天津</el-dropdown-item>
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
