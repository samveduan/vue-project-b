<template>
    <el-container id="container">
      <el-header>
        <Header/>
      </el-header>

      <el-container>
        <el-aside width="210px" style="overflow:hidden;">
          <div style="height: 60px;"></div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            style="width: 210px;"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title"><router-link to="/index/table">任务</router-link></span>
            </el-menu-item>
            <el-menu-item index="9">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/tabs">Tabs</router-link></span>
            </el-menu-item>
            <el-menu-item index="11">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/charts">Echarts</router-link></span>
            </el-menu-item>
            <el-menu-item index="13">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/vuex">态势</router-link></span>
            </el-menu-item>
            <el-menu-item index="15">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/element">Element</router-link></span>
            </el-menu-item>
            <el-menu-item index="15">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/bootstrap-table">BootstrapTable</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main id="main">
          <div id="mainIn">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
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
    },
    mounted: function(){

    }
  }
</script>

<style>
  .margin-bottom-20{
    margin-bottom: 20px;
  }
</style>

<style scoped>
  #container{
    height: 100%;
  }
  .el-header{
    z-index: 100000000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #20a0ff;
    color: #333;
  }
  #main {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    color: #333;
    height: 100%;
    width: 100%;
  }
  #mainIn{
    padding: 0 20px 30px 230px;
    border-top: 80px solid #ffffff;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
  .el-aside {
    background-color: #545c64;
    color: #333;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100000;
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
