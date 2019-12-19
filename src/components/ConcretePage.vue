<template>
    <div class="concrete-wrapper">
        <el-container class="container">
            <el-header class="header">
                <toper></toper>
            </el-header>
            <el-main class="scroll-view" style="padding:0;">
                <!-- <el-button @click="addArticle()">添加文章</el-button> -->
                <!-- <el-button @click="updateArticle()">修改文章</el-button> -->
                <!-- <el-button @click="deleteArticle()">删除文章</el-button> -->
                <!-- <el-button @click="getAllArticle()">获取所有文章</el-button> -->
                <div class="container-main">
                    <div class="left"><problem-block :title="questionInfo.title" :context="questionInfo.context"></problem-block></div>
                    <!-- question=问题 artical=文章-->
                    <div class="right"><problem-info v-bind:data="questionInfo" type="question"></problem-info></div>
                    <div class="operate right">
                        <el-dialog :modal-append-to-body="false" title="回答问题" width="800px" :visible.sync="showAnswerComment">
                            <div class="edit_container" style="padding:20px;">
                                <quill-editor
                                    style="height:200px;"
                                    v-model="content" 
                                    ref="myQuillEditor"
                                    :options="editorOption" 
                                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                    @change="onEditorChange($event)">
                                </quill-editor>
                            </div>
                        </el-dialog>
                        <el-button type="success" @click="addAnswer()" round>我要回答</el-button>
                    </div>
                    <div class="left"><answer-block v-bind:quesid="questionInfo.qid"></answer-block></div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import Toper from './Toper'
import ProblemInfo from './ProblemInfo'
import ProblemBlock from './ProblemBlock.vue'
import AnswerBlock from './AnswerBlock.vue'
export default {
    components:{
        'toper': Toper,
        'problem-block': ProblemBlock,
        'problem-info':ProblemInfo,
        'answer-block':AnswerBlock
    },
    data(){
        return {
            showAnswerComment: false,
            questionInfo:{
                username: '',
                hot: 0,
                count: 0,
                time: '',
                title:'',
                context:'',
                qid: this.$route.query.qid
            }
        }
    },
    mounted(){
        let that = this;
        that.getQuestion();
    },
    methods:{
        //通过un获取user
        getUserById(){
            this.$postReqire(this, '/user/finduserbyname', 
                { 'username':'ss3295286' },
                (response) =>{
                    if(response.data['ERROR'] == 0){
                        
                    }else{ that.$createMessage('查找用户失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },

        //添加回答
        addAnswer(){
            this.$postReqire(this, '/answer/addAnswer', 
                { 'cQid':11, 'cUid':this.$store.state.user.uid, 'cAnsContext':'这是回答' },
                (response) =>{
                if(response.data['ERROR'] == 0){
                    
                }else{ that.$createMessage('回答失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },


        //获取问题
        getQuestion(){
            let that = this;
            this.$postReqire(this, '/question/getQuestion', 
                { 'cQid': this.$route.query.qid },
                (response) =>{
                if(response.data['ERROR'] == 0){
                    that.questionInfo.username = response.data['QUESTION']['C_USERNAME'];
                    that.questionInfo.hot = response.data['QUESTION']['C_HOT'];
                    that.questionInfo.count = response.data['QUESTION']['C_COUNT'];
                    that.questionInfo.time = response.data['QUESTION']['C_CREATE_TIME'];
                    that.questionInfo.title = response.data['QUESTION']['C_Q_TITLE'];
                    that.questionInfo.context = response.data['QUESTION']['C_Q_CONTEXT'];
                }else{ that.$createMessage('获取问题失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },

        //修改文章 
        updateArticle(){
            this.$postReqire(this, '/article/update', 
                { 'cArtid':2, 'cArtTitle':'修改后标题', 'cArtContext':'这是修改文章正文' },
                (response) =>{
                if(response.data['ERROR'] == 0){
                    
                }else{ that.$createMessage('修改文章失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },

        //删除文章 
        deleteArticle(){
            this.$postReqire(this, '/article/delete', 
                { 'cArtid':2 },
                (response) =>{
                if(response.data['ERROR'] == 0){
                    
                }else{ that.$createMessage('删除文章失败', 'error'); }
                },
                (error) => {
                    that.$createMessage('请检查网络连接', 'error');
                })
        },

        //获取所有文章
        getAllArticle(){
            this.$postReqire(this, '/article/getAll', { 'get':'get' },
                (response) =>{
                if(response.data['ERROR'] == 0){
                    
                }else{ that.$createMessage('获取全部文章失败', 'error'); }
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

.layout-center-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.concrete-wrapper{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    background: rgb(250, 250, 250);
    /* background: lightcoral; */
}

.concrete-wrapper .container{
    width: 100%;
    /* background: lightcoral; */
}
.concrete-wrapper .container .header{
    padding: 0;
}

.concrete-wrapper .container .container-main{
    width: 1150px;
    /* height: 1000px; */
    margin: 0 auto;
    background: lightblue;
}

.concrete-wrapper .container .container-main {
    width: 1150px;
    /* height: 1000px; */
    margin: 0 auto;
    background: lightblue;
}

.concrete-wrapper .container .container-main .left{
    width: 830px;
    float: left;
}
.concrete-wrapper .container .container-main .right{
    float: right;
}
</style>