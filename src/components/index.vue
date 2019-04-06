<template>
  <div>
    <el-container>
      <el-header id="header">
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="210px" style="height: 576px;">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">

                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title"><router-link to="/">登录</router-link></span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-tickets"></i>
                  <span slot="title"><router-link to="/user">用户</router-link></span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-date"></i>
                  <span slot="title"><router-link to="/about">DatePicker 日期选择器</router-link></span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title"><router-link to="/table">Table 表格</router-link></span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-loading"></i>
                  <span slot="title"><router-link to="/progress">Progress 进度条</router-link></span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-arrow-right"></i>
                  <span slot="title"><router-link to="/transfer">Transfer 穿梭框</router-link></span>
                </el-menu-item>
              </el-menu>
        </el-aside>

        <el-container>
          <el-main><router-view></router-view></el-main>
          <el-footer height="30">中央军委办公厅第五十一研究所</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from './header'
  export default {
    components: {
      Header
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.margin-bottom-20{
  margin-bottom: 20px;
}
</style>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }

  .el-footer{
    line-height: 30px;
    text-align: right;
    font-size: 12px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #FFFFFF;
    color: #333;
  }

  .el-aside a{
    color:#ffffff;
    text-decoration: none;
  }
  .el-aside a:link{
    color:#ffffff;
  }
  .el-aside a:hover{
    color:#ffffff;
  }
</style>

