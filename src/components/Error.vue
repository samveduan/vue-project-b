<template>
  <div>
    This page is not found!
  </div>
</template>

<script>
export default {
  data(){
    return {
      elementData: '',
      timeout: ''
    }
  },
  methods: {

  },
  mounted(){
    this.$HTTP.get("")
      .then(function(res){

      })
      .catch(function(err){

      })
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
