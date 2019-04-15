<template>
  <div>
    <el-dropdown>
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu>
        <el-dropdown-item>北京</el-dropdown-item>
        <el-dropdown-item>上海</el-dropdown-item>
        <el-dropdown-item>深圳</el-dropdown-item>
        <el-dropdown-item>广州</el-dropdown-item>
        <el-dropdown-item>天津</el-dropdown-item>
        <el-dropdown-item>重庆</el-dropdown-item>
        <el-dropdown-item>昆明</el-dropdown-item>
        <el-dropdown-item>长沙</el-dropdown-item>
        <el-dropdown-item>沈阳</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <ul>
      <router-link to="/index/button/plain" tag="li">朴素按钮</router-link>
      <router-link :to="{name: 'round'}" tag="li">圆形按钮</router-link>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .el-dropdown {
    vertical-align: bottom;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  ul li{
    cursor: pointer;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
