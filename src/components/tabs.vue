<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">

        <div class="block">
          <span class="demonstration">默认 Hover 指示器触发</span>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

      </el-tab-pane>
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
