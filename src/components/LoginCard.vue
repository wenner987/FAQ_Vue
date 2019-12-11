<template>
    <div class="login-card-wrapper">
        <el-card class="box-card">
            <el-tabs stretch="true" v-model="activeName">
                <el-tab-pane label="登录" name="login">
                    <div class="layout-center-column">
                        <img class="head" :class="{'ani-move':isLoading}" src="../assets/head/17180600414.jpg" />
                        <div class="form-wrapper">
                            <el-form v-loading="isLoading" label-position="right" :model="loginForm" class="form" label-width="70px">
                                <el-form-item class="input" label="用户名" prop="name">
                                    <el-input v-model="loginForm.id" placeholder="用户名"></el-input>
                                </el-form-item>
                                <el-form-item class="input" label="密码" prop="pass">
                                    <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="密码"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button class="btn-submit" type="primary" @click="login()">登录</el-button>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">
                    <div class="layout-center-column">
                        <div class="form-wrapper">
                            <el-form v-loading="isLoading" label-position="right" :model="loginForm" class="form" label-width="70px">
                                <br>
                                <el-form-item class="input" label="用户名" prop="name">
                                    <el-input v-model="RegisterForm.id" placeholder="登录时用户名"></el-input>
                                </el-form-item>
                                <el-form-item class="input" label="昵称" prop="nickname">
                                    <el-input v-model="RegisterForm.name" placeholder="对其他用户显示"></el-input>
                                </el-form-item>
                                <el-form-item class="input" label="密码" prop="pass">
                                    <el-input type="password" v-model="RegisterForm.pass" autocomplete="off" placeholder="登录时密码"></el-input>
                                </el-form-item>
                                <el-form-item class="input" label="确认密码" prop="pass">
                                    <el-input type="password" v-model="RegisterForm.checkpass" autocomplete="off" placeholder="确认密码"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button class="btn-submit" type="primary">注册</el-button>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
        isLoading: false,
        activeName: 'login',
        identifyCode_login: "",
        identifyCode_register: "",
        loginForm:{
            id:'1',
            pass:'1',
            userIdentifyCode:'',
            remember: false
        },
        RegisterForm:{
            id:'',
            name:'',
            pass:'',
            checkpass:'',
            userIdentifyCode:'',
            remember: false
        },
        rules: {
          name: [
            { required: true, message: '用户用不能为空', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
        login(){
            this.isLoading = true;
            let that = this;
            this.$http.post("api/user/login", this.$qs.stringify(
                {"username":this.loginForm.id, "password":this.loginForm.pass}))
            .then(function(response){
                that.isLoading = false;
                console.log(response.data);
                if(response.data['ERROR'] == 0){
                    that.$router.push("/index");
                }else{
                    that.$message({
                        showClose: true,
                        message: '登录失败',
                        type: 'error'
                    });
                }
            }).catch(function(error){
                that.isLoading = false;
                console.log(error);
            });
        }
    }
}
</script>
<style scoped>
.layout-center-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-card-wrapper{
}
.box-card{
    width: 400px;
    height: 500px;
}
.head{
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin: 20px;
}
.form-wrapper{
    width: 310px;
    /* background: lightcoral; */
}
</style>