<template>
  <div>
      <ComplexForm></ComplexForm>
  </div>
</template>

<script>
  import ComplexForm from './ComplexForm'
  export default {
    name: 'App',
    components: {
      ComplexForm
    }
  }
</script>

<style scoped>
  body{
    margin: 0;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
