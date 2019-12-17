<template>
    <div class="top-wrapper">
        <el-menu 
            :default-active="activeIndex" class="top-nav" mode="horizontal">
            <div class="logo animated flip"><span class="fa fa-file-text">&nbsp;&nbsp;</span>FAQ</div>

            <el-submenu style="margin-right:10%;" index="1" class="item">
                <template slot="title">
                    <el-badge is-dot class="badge">
                        <div><img class="mini-icon" src="../assets/head/default_head.png" />个人中心</div>
                    </el-badge>
                </template>
                <div class="user-block">
                    <div v-if="islogined">
                        <div class="head-block layout-center-column">
                            <img src="../assets/head/17180600414.jpg" />Alphakin
                        </div>
                        <div class="userinfo-list">
                            <table>
                                <tr><td>所属组</td><td>呵呵组</td></tr>
                                <tr><td>积分数</td><td>1242</td></tr>
                            </table>
                            <el-button @click="leaveTo('/user')" style="margin-top: 10px;width:80%; margin-left:10%;" size="small" type="info" round>详细信息</el-button>
                        </div>
                    </div>
                    <div v-else style="text-align: center; padding:20px;">
                        <empty-block size="mini" label="未登录"></empty-block>
                        <el-button @click="showLoginPanel=true" size="mini" type="warning" round>登录 / 注册</el-button>
                    </div>
                </div>
            </el-submenu>
            <el-submenu index="2" class="item" @select="handleSelect">
                <template slot="title">
                    <el-badge :value="message.length" class="badge">
                        <div><span class="fa fa-bell">&nbsp;</span>我的消息</div>
                    </el-badge>
                </template>
                <el-menu-item v-for="(item, index) in message" :key="index" index="index">
                    <div class="my-msg">
                        <label>
                            <span v-if="item.type=='sys'" class="fa fa-envelope-open-o">&nbsp;</span>
                            <span v-if="item.type=='usr'" class="fa fa-quote-left">&nbsp;</span>
                            {{item.content}}
                        </label>
                    </div>
                </el-menu-item>
            </el-submenu>
            <el-menu-item @click="leaveTo('/newquestion')" class="item">
                <span class="fa fa-question-circle">&nbsp;</span>我要提问
            </el-menu-item>
        </el-menu>
        <el-dialog :show-close="false" :modal-append-to-body="false" width="450px" :visible.sync="showLoginPanel">
            <login-card></login-card><br><br>
        </el-dialog>

    </div>
</template>
<script>
import LoginCard from './LoginCard.vue'
import EmptyBlock from './EmptyBlock'
export default {
    components:{
        'empty-block': EmptyBlock,
        'login-card': LoginCard
    },
    data() {
      return {
        activeIndex: '1',
        showLoginPanel: false,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        islogin: false,
        message:[]
      };
    },
    computed:{
        islogined :{
            get(){ return this.$store.state.islogined },
            set(){ }
        }
    },
    mounted(){
        let that = this;
        that.getUserMessage();
    },
    methods: {
        handleSelect(key, keyPath) {
            alert(key + ' ' + keyPath);
        },
        leaveTo(url){
            this.$router.push(url);
        },

        getUserMessage(){
            this.$postReqire(this, '/message/getMessage', {'uid':25},
                (response) => {
                    console.log(response.data);
                    if(response.data['ERROR'] == 0){
                        this.message = [];
                        for(let i=0; i<response.data['MESSAGES'].length; ++i){
                            // 1评论
                            if(response.data['MESSAGES'][i]['cMessageType'] == 1){
                                this.message.push({
                                    mid:response.data['MESSAGES'][i]['cMessageId'],
                                    type:'usr',
                                    content:response.data['MESSAGES'][i]['cMessageSource']
                                });
                            }
                        }
                    }else{ that.$createMessage('获取消息失败', 'warning'); }
                },
                (error) => { that.$createMessage('请检查网络连接', 'warning'); });
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

.top-wrapper{
    /* position: fixed;
    top: 0; */
    width: 100%;
    height: 60px;
    /* background: lightcoral; */
    box-shadow: 0px 0px 10px 4px rgba(200,200,200,0.3);
}

.top-wrapper .top-nav{

}

.top-wrapper .top-nav .item{
    float: right;
}

.top-wrapper .top-nav .logo{
    display: inline-block;
    float: left;
    width: 150px;
    font-size: 20px;
    font-weight: 600;
    line-height: 60px;
    outline: none;
    /* background: lightgoldenrodyellow; */
}

.badge div{
    /* background: lightcoral; */
    height: 30px;
    padding-right: 5px;
    line-height: 30px;
}

.single-item{
    width: 100px;
    background: none;
    border: none;
}
.single-item:hover{
    background: none;
}
.user-wrapper{
    width: 200px;
    height: 200px;
    /* background: lightgreen; */
}
.mini-icon{
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin-right: 5px;
}
.user-block .head-block{
    width: 100%;
    height: 100px;
    /* background-image: url("../assets/head-bg/default-head-background2.jpeg");
    background-position: center;
    background-size: 150%; */
    border-bottom: 0.5px solid rgba(200,200,200,0.5);
    font-size: 12px;
    font-weight: 600;
    color: gray;
}

.user-block .head-block img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-shadow: 0px 0px 6px 4px rgba(200,200,200,0.4);
}

.user-block .userinfo-list{
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
}
.user-block .userinfo-list table{
    width: 100%;
}
.user-block .userinfo-list tr{
    text-align: center;
    height: 20px;
    font-size: 13px;
    color: gray;
    line-height: 20px;
}
.user-block .userinfo-list tr td:nth-child(1){
    font-weight: 600;
}
.my-msg label{
    margin-left: 10px;
    margin-right: 10px;
    line-height: 20px;
}
</style>