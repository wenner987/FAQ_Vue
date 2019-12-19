<template>
    <div class="login-card-wrapper">
        <el-tabs stretch="true" v-model="activeName" @tab-click="handleClick">
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
                            <el-form-item>
                                <el-switch
                                    style="float:right;margin-bottom:15px;"
                                    v-model="isAuto"
                                    active-text="记住登录凭证">
                                </el-switch>
                            </el-form-item>
                        </el-form>
                        <el-button class="btn-submit" type="primary" @click="login()" round>&emsp;&emsp;登录&emsp;&emsp;</el-button>
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
                            <el-form-item label="所属组">
                                <el-select @click="getAllGroup()" v-model="RegisterForm.groupInfo[0].value" placeholder="选择组">
                                    <el-option v-for="(item, index) in RegisterForm.groupInfo" :key="index" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="input" label="邮箱" prop="mail">
                                <el-input type="text" v-model="RegisterForm.mail" autocomplete="off" placeholder="输入邮箱"></el-input>
                            </el-form-item>
                            <el-form-item class="input" label="密码" prop="pass">
                                <el-input type="password" v-model="RegisterForm.pass" autocomplete="off" placeholder="登录时密码"></el-input>
                            </el-form-item>
                            <el-form-item class="input" label="确认密码" prop="pass">
                                <el-input type="password" v-model="RegisterForm.checkpass" autocomplete="off" placeholder="确认密码"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-button class="btn-submit" type="primary" @click="registe()" round>&emsp;&emsp;注册&emsp;&emsp;</el-button>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
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
            isAuto: false,
            loginForm:{
                id:"ss3295286",
                pass:'3295286',
                remember: false
            },
            RegisterForm:{
                id:'ss3295286',
                mail:'3292709045@qq.com',
                nowgroup:'1',
                pass:'3295286',
                checkpass:'3295286',
                groupInfo:[{}]
            },
            
            // ,
            // rules: {
            //     name: [
            //         { required: true, message: '用户用不能为空', trigger: 'blur' },
            //         { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            //     ]
            // }
        };
    },
    computed:{
        headPath:{
            get(){ return this.$store.state.user.head; }
        },
        isAuto: {
            get(){ return this.$store.state.isAuto; }
        }
    },
    mounted(){
        let that = this;
        that.getAllGroup();
    },
    methods:{
        handleClick(tab, event){
            console.log(tab, event);
        },
        login(){
            let that = this;
            this.$postReqire(this, '/user/login', 
                {
                    "username": this.loginForm.id, 
                    "password": this.loginForm.pass,
                    "autoLogin": 0
                },
                (response) => {
                    that.isLoading = false;
                    if(response.data['ERROR'] == 0){
                        that.$store.state.user.uid = response.data['USER_INFO']['cUid'];
                        that.$store.state.user.username = response.data['USER_INFO']['cUsername'];
                        that.$store.state.user.score = response.data['USER_INFO']['cScore'];
                        that.$store.state.user.gid = response.data['USER_INFO']['cGid'];
                        that.$createMessage('登录成功', 'success');
                        this.$cookies.set("username", response.data['USER_INFO']['cUsername']);
                        this.$cookies.set("password", this.loginForm.pass);
                        this.$cookies.set("score", response.data['USER_INFO']['cScore']);
                        this.$store.state.user.head = require("@/assets/head/" + that.$getHeadLevel(response.data['USER_INFO']['cScore']));
                        this.$store.state.islogined = true;
                    }else{ that.$createMessage('登录失败', 'error'); }
                },
                (error) => { alert(error); that.$createMessage('请检查网络连接', 'error'); });
        },
        registe(){
            let that = this;
            this.$postReqire(this, '/user/register', 
                {
                    "cUsername":this.RegisterForm.id,
                    "cPassword":this.RegisterForm.pass,
                    "cMailBox":this.RegisterForm.mail,
                    "cGid":this.RegisterForm.nowgroup
                },
                (response) => {
                    that.isLoading = false;
                    if(response.data['ERROR'] == 0){
                        that.$createMessage('注册成功', 'success');
                    }else{ that.$createMessage('注册失败', 'error'); }
                },
                (error) => {
                    that.isLoading = false;
                    that.$createMessage('请检查网络连接', 'error');
                });
        },
        getAllGroup(){
            let that = this;
            this.$postReqire(this, '/group/getAllGroup', {'get':'get'},
                (response) => {
                    that.isLoading = false;
                    if(response.data['ERROR'] == 0){
                        that.RegisterForm.groupInfo = [];
                        for(var i = 0;i<response.data['GROUPS'].length;i++){
                            that.RegisterForm.groupInfo.push({
                                'value': response.data['GROUPS'][i]['cGid'],
                                'label': response.data['GROUPS'][i]['cGroupName'],
                            });
                        }
                    }else{ that.$createMessage('获取组信息失败', 'error'); }
                },
                (error) => {
                    that.isLoading = false;
                    that.$createMessage('请检查网络连接', 'error');
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
    margin-left: 20px;
    margin-right: 20px;
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