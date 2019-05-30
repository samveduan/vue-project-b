<template>
  <div>
    <el-breadcrumb separator="/" class="margin-bottom-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>Table 表格</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="padding-bottom: 20px;">
      <el-button @click="dialogFormVisible = true">添加</el-button>

      <el-button @click="dialogFormVisible2 = true">编辑</el-button>
    </div>

    <el-dialog title="添加节点" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="IP" :label-width="formLabelWidth" prop="ip">
          <el-input v-model="ruleForm.ip" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="所属单位" :label-width="formLabelWidth" prop="company">
          <el-input v-model="ruleForm.company" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="研制单位" :label-width="formLabelWidth" prop="developer">
          <el-input v-model="ruleForm.developer" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm'); dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm');">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加节点" :visible.sync="dialogFormVisible2" @close=''>
      <el-form ref="ruleForm2">

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

    <div style="padding-top: 20px;">
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        dialogFormVisible2: false,
        ruleForm: {
          name: '',
          ip: '',
          company: '',
          developer: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          ip: [
            { required: true, message: '请输入ip', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          company: [
            { required: true, message: '请输入所属单位', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          developer: [
            { required: true, message: '请输入研制单位', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        formLabelWidth: '100px'
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const h = this.$createElement;

            this.$notify({
              title: '提交成功',
              message: h('i', { style: 'color: teal'}, '提交成功！')
            });

            this.dialogFormVisible = false;

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      closeDialog () {
          this.$refs.ruleForm.clearValidate();
          this.$refs.ruleForm.resetFields();
      }
    },
    mounted(){
      let _this = this;
      this.$HTTP.get("get_table_data")
        .then(function(res){
          _this.tableData = res.data;
        })
        .catch(function(err){
            console.log(err);
        })
    }
  }
</script>
