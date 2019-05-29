<template>
  <el-row>
    <el-col :span="5" class="logo">SYSTEM ADMIN</el-col>
    <el-col :offset="11" :span="4" style="padding-top: 10px;">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-col>
    <el-col :span="3" :offset="1" class="userinfo">
      <el-dropdown>
        <span class="el-dropdown-link userinfo-inner">
             <img src="../assets/user.png" />张某某
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
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

<style lang="scss" scoped>
.logo{
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  font-family: "微软雅黑";
  color: #ffffff;
}
.userinfo {
  text-align: right;
  float: right;
  line-height: 60px;
  .userinfo-inner {
    cursor: pointer;
    color:#fff;
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 10px 0px 10px 10px;
      float: right;
    }
  }
}
</style>
