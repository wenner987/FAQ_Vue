<template>
    <div class="answer-block-wrapper">
        <div class="reply-main">
            <el-button @click="getAnswer()" size="mini">获取答案</el-button>
            <el-button @click="deleteAnswer()" size="mini">删除答案</el-button>
            <el-button @click="updateAnswer()" size="mini">修改答案</el-button>
            <el-button @click="addComment()" size="mini">添加评论</el-button>
            <el-button @click="getComment()" size="mini">获取评论</el-button>
            <el-container v-for="(item, index) in answerList" :key="index">
                <el-aside width="60px">
                    <img class="head" :src="circleUrl" />
                </el-aside>
                <el-main style="margin:0; padding:0;">
                    <div class="name">{{item.username}}</div>
                    <div class="content">
                        <div v-html="item.context"></div>
                    </div>
                    <div class="operate">
                        <el-button type="warning" round><span class="fa fa-thumbs-up">&nbsp;</span>12</el-button>
                        <el-button type="primary" round><span class="fa fa-pencil">&nbsp;</span>我要评论</el-button>
                    </div>
                    <div class="comment">
                        <el-container>
                            <el-aside width="60px">
                                <img class="head" :src="circleUrl" />
                            </el-aside>
                            <el-main style="margin:0; padding:0;">
                                <div class="name">Alphakin</div>
                                <div class="content">
                                    <article>
                                        它提供了Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。 [1] Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。
                                    </article>
                                </div>
                                <div class="operate">
                                    <el-button size="mini" type="info" round><span class="fa fa-thumbs-up">&nbsp;</span>12</el-button>
                                </div>
                            </el-main>
                        </el-container>
                    </div>
                </el-main>
            </el-container>
            <el-divider></el-divider>
        </div>
    </div>
</template>
<script>
export default {
    props:['data'],
    data(){
        return{
            circleUrl: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg",
            answerList:[]
        }
    },
    methods:{
        getAnswer(){
            this.$postReqire(this, '/answer/getAnswer', {'qid':4},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    this.answerList = [];
                    for(let i=0; i<response.data['ANSWERS'].length; ++i){
                        this.answerList.push({
                            qid: response.data['ANSWERS'][i]['C_QID'],
                            uid: response.data['ANSWERS'][i]['C_UID'],
                            aid: response.data['ANSWERS'][i]['C_ANSID'],
                            context: response.data['ANSWERS'][i]['C_ANS_CONTEXT'],
                            username: response.data['ANSWERS'][i]['C_USERNAME']
                            // thumb: response.data['ANSWERS']['cThumb'],
                        });
                    }
                }else{ that.$createMessage('获取今日提问数量失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },
        deleteAnswer(){
            this.$postReqire(this, '/answer/delete', {'ansid':1},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    // for(let i=0; i<response.data[''])
                }else{ that.$createMessage('删除回答失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },
        updateAnswer(){
            this.$postReqire(this, '/answer/update', {'cAnsid':4, 'cAnsContext':'<p>呵呵</p>'},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    // for(let i=0; i<response.data[''])
                }else{ that.$createMessage('修改回答失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },

        addComment(){
            //1文章  2回答
            this.$postReqire(this, '/comment/add', {'cUid':25, 'cContext':'<p>你才呵呵</p>', 'cComType':2, 'cCommonId':4},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    // for(let i=0; i<response.data[''])
                }else{ that.$createMessage('添加评论失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },
        getComment(){
            //1文章  2回答
            this.$postReqire(this, '/comment/get', {'commentType':2, 'commentId':4},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    // for(let i=0; i<response.data[''])
                }else{ that.$createMessage('获取评论失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        }
    }
}
</script>
<style scoped>
.answer-block-wrapper{
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 30px;
    text-align: left;
    background: white;
    border-radius: 15px;
    padding: 40px;


    box-shadow: 0px 0px 15px 3px rgba(200,200,200,0.3);
}
.answer-block-wrapper .reply-main{
    width: 100%;

}
.answer-block-wrapper .reply-main .head{
    width: 45px;
    height: 45px;
    float: left;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 3px rgba(200,200,200,0.3);
}
.answer-block-wrapper .reply-main .name{
    width: 100%;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
    /* background: lightcoral; */
}
.answer-block-wrapper .reply-main .content{
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 20px;
    /* background: lightblue; */
}

.answer-block-wrapper .reply-main .comment{
    width: 100%;
    margin-top: 25px;
}
</style>