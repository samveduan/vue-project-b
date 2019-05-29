<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: '',
      config: '',
      role: ''
    }
  },
  mounted(){
    let _this = this;
    this.$axios.get("http://127.0.0.1:8000")
      .then(function(response){
        _this.user = response.data.user;
        _this.config = response.data.config;
        _this.role = response.data.role;
      })
      .catch(function(err){
        console.log(err);
      })
  }
}
</script>

<style>

</style>
