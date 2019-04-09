<template>
  <div>
    <el-form :model="numberValidateForm" :rules="rules" ref="numberValidateForm" label-width="80px" size="mini ">
      <el-form-item label="年龄" prop="age">
        <el-input type="age" v-model.number="numberValidateForm.age"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">提 交</el-button>
        <el-button @click="resetForm('numberValidateForm')">取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      numberValidateForm: {
        age: ''
      },
      rules: {
        age: [
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){
          alert('submit');
        }else{
          console.log('error submit!!');
          return false;
        }
      })
    },
    resetForm(formName){
      this.$refs[formName].resetFields();
    }
  }
}
</script>
