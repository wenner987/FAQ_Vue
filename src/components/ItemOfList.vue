<template>
    <div class="item-of-list-wrapper" @click="toConcrete()">
        <div class="title">
            <el-row :gutter="20">
                <el-col :span="13">
                    <div class="grid-content bg-purple">
                        <div>
                            <span class="fa fa-file-o"></span>
                            {{itemdata.title}}
                        </div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple item-icon">
                        <label><span class="fa fa-eye">&nbsp;</span>{{itemdata.hot}}</label>
                        <label class="icon-score"><span class="fa fa-bookmark">&nbsp;</span>{{itemdata.score}}</label>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="tags">
            <div class="tags-icon fa fa-tags"></div>
            <vtag v-for="(tag, index) in itemdata.tags" :key="index" v-bind:label="tag.label" v-bind:type="tag.type"></vtag>
        </div>
    </div>
</template>
<script>
import Tag from './Tag'
export default {
    props:['itemdata'],
    components:{
        'vtag' : Tag
    },
    data(){
        return {
        }
    },
    methods:{
        toConcrete(){
            console.log("跳转题目:" + this.itemdata.index);
            this.$router.push("/concrete");
        }
    }
}
</script>
<style scoped>

.item-of-list-wrapper{
    width: 100%;
    padding: 10px;
    padding-left: 30px;
}
.item-of-list-wrapper .title{
    text-align: left;
    color: rgb(120,120,120);
    margin-bottom: 5px;
    font-weight: 600;
    /* background: lightblue; */
}
.item-of-list-wrapper .tags{
    text-align: left;
    color: gray;
}
.item-of-list-wrapper .tags .tags-icon{
    width: 20px;
    height: 20px;
    font-size: 13px;
    line-height: 20px;
    /* border-right: 0.5px solid rgba(100,100,100,0.4); */
}

.item-of-list-wrapper .title .item-icon{
    font-size: 13px;
    color: gray;
}
.item-of-list-wrapper .title .item-icon label{
    float: right;
}

.item-of-list-wrapper .title .item-icon .icon-score{
    margin-right: 20px;
    margin-left: 20px;
}
.item-of-list-wrapper .title .item-icon .icon-score span{
    color: orange;
}
</style>