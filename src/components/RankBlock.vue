<template>
    <div class="recommend-block-wrapper">
        <div class="title">
            <span class="fa fa-rocket">&nbsp;</span>问答排行
        </div>
        <div class="container">
            <el-container class="item" v-for="(item, index) in userList" :key="index">
                <el-aside width="60px">
                    <img class="head" :src="item.head" />
                </el-aside>
                <el-main style="margin:5px; padding:0;">
                    <div class="name">
                        <label>{{item.username}}</label>
                        <el-button class="thumb" size="mini" type="info" round><span class="fa fa-thumbs-up">&nbsp;</span>+1</el-button>    
                    </div>
                    <div class="score">积分: {{item.score}}</div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>
<script>
export default {
    props:['userList'],
    computed:{
        userName:{ get(){ return this.$store.state.user.username; } },
        score:{ get(){ return this.$store.state.user.score; } },
        headPath:{
            get(){
                this.$getHeadLevel
            }
        },
    },
    methods:{
        test(){
            
        }
    }
}
</script>
<style scoped>
.recommend-block-wrapper{
    min-width: 300px;
    /* background: lightgoldenrodyellow; */
}
.recommend-block-wrapper .title{
    font-size: 15px;
    color: gray;
    text-align: left;

}
.recommend-block-wrapper .container .head{
    width: 50px;
    height: 50px;
    border-radius: 100%;
}
.recommend-block-wrapper .container .name{
    text-align: left;
    font-weight: 600;

}
.recommend-block-wrapper .container .score{
    text-align: left;
    line-height: 25px;
    font-size: 13px;
}
.recommend-block-wrapper .container .item{
    margin-top: 10px;
}
.recommend-block-wrapper .container .name .thumb{
    float: right;
}
</style>