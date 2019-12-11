<template>
    <div class="user-center-wrapper">

        <el-container class="container">
            <el-header class="header">
                <toper></toper>
            </el-header>
            <el-main style="padding:0;">
                <div style="height:220px;">
                    <div class="userbg">
                        <el-tooltip content="更换头像" placement="bottom">
                            <img class="head" @click="isChangeHead=true" src="../assets/head/17180600414.jpg" />
                        </el-tooltip>
                    </div>
                </div>
                <div class="container-main">
                    <el-tabs tab-position="left">
                        <el-tab-pane label="个人信息">
                            <div class="panel-main">
                                <el-form ref="form" :model="form" label-width="80px">
                                    <el-form-item label="用户名">
                                        <label>17180600414</label>
                                    </el-form-item>
                                    <el-form-item label="邮箱">
                                        <label>3292709045@qq.com</label>
                                    </el-form-item>
                                    <el-form-item label="电话">
                                        <label>153****3323</label>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="修改信息">
                            <empty-block label="暂无此功能" v-if="isHaveArticle"></empty-block>
                        </el-tab-pane>
                        <el-tab-pane label="我的小组">
                            <div class="panel-main">
                                <label class="title"><span class="fa fa-group">&nbsp;</span>小组编号</label>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="我的问答">
                            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                <el-tab-pane label="我的问题" name="first"><br>
                                    <empty-block label="没有提出过问题" v-if="false"></empty-block>
                                    <div class="panel-main">
                                        <el-table
                                            :data="tableData"
                                            style="width: 100%; background:none;">
                                            <el-table-column
                                                prop="date"
                                                label="日期"
                                                width="180">
                                            </el-table-column>
                                            <el-table-column
                                                prop="name"
                                                label="姓名"
                                                width="180">
                                            </el-table-column>
                                            <el-table-column
                                                prop="address"
                                                label="地址">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="我的回答" name="second"><br>
                                    <empty-block label="没有回答过问题" v-if="isHaveArticle"></empty-block>
                                </el-tab-pane>
                            </el-tabs>
                        </el-tab-pane>
                        <el-tab-pane label="我的文章">
                            <empty-block label="未发布过文章" v-if="isHaveArticle"></empty-block>
                            <div class="panel-main">
                                
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="消息中心">
                            <empty-block label="消息为空" v-if="isHaveArticle"></empty-block>
                            <div class="panel-main">
                                
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-main>
        </el-container>
        <el-dialog title="更换头像" :visible.sync="isChangeHead">
            呵呵
        </el-dialog>
    </div>
</template>
<script>
import Toper from './Toper'
import EmptyBlock from './EmptyBlock'
export default {
    components:{
        'toper': Toper,
        'empty-block': EmptyBlock
    },
    data(){
        return{
            isChangeHead: false,
            isHaveArticle: true,
            activeName: 'first',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                type: [],
                resource: '',
                desc: ''
            }
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
.user-center-wrapper{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    background: rgb(250, 250, 250);
}
.user-center-wrapper .container{
    width: 100%;
    /* background: lightcoral; */
}
.user-center-wrapper .container .header{
    padding: 0;
}

.user-center-wrapper .container .userbg{
    width: 100%;
    height: 150px;
    background-color: red;
    background-image: url('../assets/userbg.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: left;
}

.user-center-wrapper .container .userbg .head{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 4px solid white;
    position: relative;
    left: +300px;
    top: +80px;
    transition-duration: 0.4s;
    cursor: pointer;
    box-shadow: 0px 0px 15px 3px rgba(100,100,100,0.3);
}
.user-center-wrapper .container .userbg .head:hover{
    transform: scale(1.05);
    box-shadow: 0px 0px 30px 6px rgba(100,100,100,0.3);
}

.user-center-wrapper .container .container-main{
    width: 1000px;
    overflow: hidden;
    /* height: 1000px; */
    margin: 0 auto;
    /* background: lightblue; */
}

.user-center-wrapper .container .container-main .panel-main{
    width: 100%;
    min-height: 300px;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    /* background: lightcoral; */
}

.user-center-wrapper .container .container-main .panel-main .title{
    font-size: 15px;
    font-weight: 600;
    color: rgb(77, 77, 77);
}
</style>