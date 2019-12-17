<template>
    <div class="new-question-wrapper">
        <el-container class="container">
            <el-header class="header">
                <toper></toper>
            </el-header>
            <el-main style="padding:0;">
                <div class="container-main">
                    <div class="panel">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="设置标题">
                                <el-input v-model="form.title"></el-input>
                            </el-form-item>
                            <el-form-item label="内容">
                                <div class="edit_container">
                                    <quill-editor
                                        v-model="content" 
                                        ref="myQuillEditor"
                                        :options="editorOption" 
                                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                        @change="onEditorChange($event)">
                                    </quill-editor>
                                </div>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="addQuestion()">立即创建</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import Toper from './Toper'
export default {
    components:{
        'toper': Toper
    },
    data() {
      return {
        form: {
          title: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        content: `<p>hello world</p>`,
        editorOption: {}
      }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        addQuestion(){
            this.$postReqire(this, '/question/addQuestion',
                {
                    'cUid':this.$store.state.user.uid,
                    'cQTitle':this.form.title,
                    'cQContext':this.content
                },
                (response) =>{
                    if(response.data['ERROR'] == 0){
                        
                    }else{ this.$createMessage('获取今日提问数量失败', 'error'); }
                },
                (error) => {
                    this.$createMessage('请检查网络连接', 'error');
                })
        }

    }
}
</script>
<style scoped>
.new-question-wrapper{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    background: rgb(250, 250, 250);
}
.new-question-wrapper .container{
    width: 100%;
    /* background: lightcoral; */
}
.new-question-wrapper .container .header{
    padding: 0;
}
.new-question-wrapper .container .container-main{
    width: 1000px;
    /* height: 1000px; */
    margin: 0 auto;
    /* background: lightblue; */
}

.new-question-wrapper .container .container-main .panel{
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: left;
    background: white;
    border-radius: 15px;
    padding: 40px;

    box-shadow: 0px 0px 15px 3px rgba(200,200,200,0.3);
}

.edit_container{
    margin-bottom: 30px;
}
</style>