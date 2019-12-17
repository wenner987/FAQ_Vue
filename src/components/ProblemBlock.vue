<template>
    <div class="problem-block-wrapper">
        <div class="problem-type">
            <span class="fa fa-info-circle">&nbsp;</span>问题
        </div>
        <div class="title">
            <span class="fa fa-file-text">&nbsp;</span>{{title}}
        </div>
        <div class="tags">
            <vtag label="缓存" type="LA"></vtag>
            <vtag label="数据库" type="LB"></vtag>
            <vtag label="应用" type="LC"></vtag>
        </div>
        <el-divider style="margin-top:5px;margin-bottom:5px;"></el-divider>
        <div class="context">
            <div v-html="context"></div>
        </div>
    </div>
</template>
<script>
import Tag from './Tag'
export default {
    props:['title', 'context'],
    components:{
        'vtag' : Tag
    },
    methods:{
    }
}
</script>
<style scoped>

.problem-block-wrapper{
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
.problem-block-wrapper .problem-type{
    width: 100%;
    margin-bottom: 5px;
    font-size: 12px;
    color: gray;
}
.problem-block-wrapper .title{
    font-size: 20px;
    font-weight: 600;
    color: #555555;
}
.problem-block-wrapper .tags{
    margin-top: 10px;
    font-size: 15px;
    color: gray;
    line-height: 20px;
}
.problem-block-wrapper .context{
    margin-top: 15px;
    font-size: 16px;
    color: gray;
}
</style>