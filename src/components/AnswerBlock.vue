<template>
    <div id="answer-block-wrapper">
        <div v-if="isEmpty" class="reply-main layout-center-column"><empty-block label="还没有人回答此问题"></empty-block></div>
        <div v-else class="reply-main">
            <!-- <el-button @click="getAnswer()" size="mini">获取答案</el-button>
            <el-button @click="deleteAnswer()" size="mini">删除答案</el-button>
            <el-button @click="updateAnswer()" size="mini">修改答案</el-button>
            <el-button @click="addComment()" size="mini">添加评论</el-button>
            <el-button @click="getComment()" size="mini">获取评论</el-button> -->
            <el-container v-for="(item, index) in ansdataansdata" :key="index">
                <el-aside width="60px">
                    <img class="head" :src="item.head" />
                </el-aside>
                <el-main style="margin:0; padding:0;">
                    <div class="name">{{item.username}}</div>
                    <div class="content">
                        <div v-html="item.context"></div>
                    </div>
                    <div class="operate">
                        <el-button type="warning" size="small" round><span class="fa fa-thumbs-up">&nbsp;</span>12</el-button>
                        <el-dialog :modal-append-to-body="false" title="评论回答" width="800px" :visible.sync="showAddComment">
                            <div class="edit_container" style="padding:20px;">
                                <quill-editor
                                    style="height:200px;"
                                    v-model="content" 
                                    ref="myQuillEditor"
                                    :options="editorOption" 
                                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                    @change="onEditorChange($event)">
                                </quill-editor>
                                <el-button @click="addComment()" style="margin-top:100px;" type="primary" round>&emsp;<span class="fa fa-thumbs-up">&nbsp;</span>评论&emsp;</el-button>
                            </div>
                        </el-dialog>
                        <el-button size="small" type="primary" round @click="showCommentWin(item.uid, item.aid)"><span class="fa fa-pencil">&nbsp;</span>我要评论</el-button>
                    </div>
                    <div class="comment">
                        <el-container style="border-top:.5px dotted rgba(200,200,200,0.9); margin-top:20px;" v-for="(comm, index) in item.comments" :key="index">
                            <el-aside width="60px" style="margin-top:10px;">
                                <img class="head" :src="comm.head" />
                            </el-aside>
                            <el-main style="margin:0; padding:0;margin-top:10px;">
                                <div class="name">{{comm.username}}</div>
                                <div class="content">
                                    <div v-html="comm.context"></div>
                                </div>
                                <div class="operate">
                                    <el-link type="primary" :underline="false"><span class="fa fa-thumbs-up">&nbsp;</span>点赞(12)</el-link>
                                </div>
                            </el-main>
                        </el-container>
                    </div>
                    <el-divider></el-divider>
                </el-main>
            </el-container>
        </div>
    </div>
</template>
<script>
import EmptyBlock from './EmptyBlock'
var nowAid = 0, nowUid = 0;
export default {
    props:['quesid'],
    components:{
        'empty-block': EmptyBlock
    },
    data(){
        return{
            showAddComment: false,
            ansdataansdata:[],
            ansdata:[ {uid:1} ],
            content: `<p>hello world</p>`,
            editorOption: {}
        }
    },
    mounted(){
        this.getAnswer(this.quesid);
    },
    computed:{
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
        isEmpty(){
            return this.ansdataansdata.length == 0;
        }
    },
    methods:{
        showCommentWin(uidval, aidval){
            nowAid = aidval;
            nowUid = uidval;
            this.showAddComment=!this.showAddComment;
        },
        getAnswer(aimId){
            this.$postReqire(this, '/answer/getAnswer', {'qid': aimId},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    this.ansdataansdata = [];
                    for(let i=0; i<response.data['ANSWERS'].length; ++i){
                        var row = {
                            qid: response.data['ANSWERS'][i]['C_QID'],
                            uid: response.data['ANSWERS'][i]['C_UID'],
                            aid: response.data['ANSWERS'][i]['C_ANSID'],
                            head: require("@/assets/head/default_head.png"),
                            context: response.data['ANSWERS'][i]['C_ANS_CONTEXT'],
                            username: response.data['ANSWERS'][i]['C_USERNAME'],
                            comments:[]
                        };
                        let getHead = (user) => {
                            this.$postReqire(this, '/user/getUserById', {'uid': user.uid},
                            (response) =>{
                                if(response.data['ERROR'] == 0){
                                    user.head = require("@/assets/head/" + this.$getHeadLevel(response.data['USER']['cScore']));
                                }
                            }, (error) => {})
                        };
                        let getQuestionComment = (answer) => {
                            //1 answer   2 article
                            this.$postReqire(this, '/comment/get', {'commentType':2, 'commentId': answer.aid},
                                (response) =>{
                                    console.log('COMMENT:');
                                    console.log(response.data);
                                    if(response.data['ERROR'] == 0){
                                        for(let i=0; i<response.data['COMMENTS'].length; ++i){
                                            var commentRow = {
                                                uid: response.data['COMMENTS'][i]['C_UID'],
                                                aid: response.data['COMMENTS'][i]['C_ANSID'],
                                                username: response.data['COMMENTS'][i]['C_USERNAME'],
                                                score: response.data['COMMENTS'][i]['C_SCORE'],
                                                head: require("@/assets/head/" + this.$getHeadLevel(response.data['COMMENTS'][i]['C_SCORE'])),
                                                context: response.data['COMMENTS'][i]['C_CONTEXT'],
                                                time: response.data['COMMENTS'][i]['C_ANS_TIME']
                                            }
                                            console.log(commentRow);
                                            answer.comments.push(commentRow);
                                        }
                                    }
                                },
                                (error) => {})
                        }
                        getHead(row);
                        getQuestionComment(row);
                        this.ansdataansdata.push(row);
                    }
                }else{ this.$createMessage('获取今日提问数量失败', 'error'); }
                },
                (error) => {
                    alert(error);
                    this.$createMessage('请检查网络连接', 'error');
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

        addComment(uid, qid, context){
            //1文章  2回答
            this.$postReqire(this, '/comment/add', {'cUid':uid, 'cContext':context, 'cComType':2, 'cCommonId':qid},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    that.$createMessage('评论成功', 'success');
                }else{ that.$createMessage('添加评论失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },
        getComment(commentId){
            //1文章  2回答
            this.$postReqire(this, '/comment/get', {'commentType':2, 'commentId':commentId},
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
.layout-center-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#answer-block-wrapper{
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
#answer-block-wrapper .reply-main{
    width: 100%;

}
#answer-block-wrapper .reply-main .head{
    width: 45px;
    height: 45px;
    float: left;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 3px rgba(200,200,200,0.4);
}
#answer-block-wrapper .reply-main .name{
    width: 100%;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
    /* background: lightcoral; */
}
#answer-block-wrapper .reply-main .content{
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 20px;
    /* background: lightblue; */
}

#answer-block-wrapper .reply-main .comment{
    width: 100%;
    margin-top: 25px;
}
</style>