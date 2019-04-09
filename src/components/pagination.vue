<template>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="data.length">
    </el-pagination>

    <el-table
      :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      }
    },
    data () {
      return {
        data: [],
        currentPage:1,
        pagesize:20
      }
    }
  }
</script>

<style>

</style>
