/*
 *@description:登录页面
 *@Author:@rennan
 *@Date:2024-09-09 08:55:55
 *@version: V1.0.0
*/

<template>
  <div class="container">
    <div class="login_box">
      <!-- 登录表单 -->
      <div class="login_form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 处理登录成功的逻辑
          console.log(this.ruleForm);
          // 拿到用户名密码信息，然后发送请求到后端进行验证
          // 如果验证成功，后端会返回一个token，前端需要将token保存到本地
          // 然后跳转到首页
          if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123456') {
            //登录更改的提示
            this.$message({
              message: '登录成功',
              type: 'success',
              duration:2000
            });
            this.$router.replace('/home')
          }else{
            this.$message.error('用户名或密码错误');
          }
          // this.$router.replace('/home')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
// .el-form-item__label {
//   color: #fff;
// }
.el-button {
  width: 100%;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/bg.jpg') no-repeat;
  background-size: 100% 100%;

  .login_box {
    width: 35%;
    height: 40%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .login_form {
      width: 80%;
      height: 80%;
      padding: 50px 0;
    }
  }
}
</style>