<template>
  <div class="login-container">
    <p class="title">系统登陆</p>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
      <el-form-item prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm" type="primary" style="width:100%;" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "login",
    data() {
      let validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'))
        } else {
          callback();
        }
      }
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        logining: false,
        ruleForm: {
          name: '',
          checkPass: '',
        },
        rules: {
          name: [
            {validator: validateName, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm() {
        this.logining = true;
        setTimeout(() => {
          alert('submit!');
          this.logining = false
          this.$router.push({
            path:'/index'
          })
        }, 2000)
      },
    }
  }
</script>

<style scoped lang="less">
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 380px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
      font-size: 18px;
      letter-spacing: 1px;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
