<template>
  <div>
    <el-breadcrumb separator="/" class="margin-bottom-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>服务器</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary" @click="dialogFormVisible = true" icon="el-icon-plus">添加</el-button>

    <el-dialog title="添加服务器" :visible.sync="dialogFormVisible" ref="dialog">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="类型" prop="type">
          <el-input v-model="ruleForm.type"></el-input>
        </el-form-item>

        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="IP" prop="ip">
          <el-input v-model="ruleForm.ip"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>

    <el-row>
      <el-col :span="24">
        <template>
        <el-table
          :data="tableData3"
          border
          style="width: 100%; margin-top: 20px;">
          <el-table-column
            prop="type"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ip"
            label="IP">
          </el-table-column>
        </el-table>
      </template>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          type: '保密系统1',
          name: '机器1',
          ip: '10.10.1.110'
        }, {
          type: '保密系统2',
          name: '机器2',
          ip: '10.10.1.111'
        }, {
          type: '保密系统3',
          name: '机器3',
          ip: '10.10.1.112'
        }, {
          type: '保密系统4',
          name: '机器4',
          ip: '10.10.1.113'
        }, {
          type: '保密系统5',
          name: '机器5',
          ip: '10.10.1.114'
        }, {
          type: '保密系统6',
          name: '机器6',
          ip: '10.10.1.115'
        }, {
          type: '保密系统7',
          name: '机器7',
          ip: '10.10.1.116'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        ruleForm: {
          name: '',
          type: '',
          ip: ''
        },
        rules: {
          type: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          ip: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.dialogFormVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.dialogFormVisible = false;
      }
    }
  };
</script>

<style>

</style>
