<template>
    <div class="recommend-block-wrapper">
        <div class="title">
            <span class="fa fa-rocket">&nbsp;</span>问答排行
        </div>
        <div class="container">
            <el-container class="item">
                <el-aside width="60px">
                    <img class="head" src="../assets/head/17180600418.jpeg" />
                </el-aside>
                <el-main style="margin:5px; padding:0;">
                    <div class="name">
                        <label>Alphakin</label>
                        <el-button class="thumb" size="mini" type="info" round><span class="fa fa-thumbs-up">&nbsp;</span>+1</el-button>    
                    </div>
                    <div class="score">积分: 1234</div>
                </el-main>
            </el-container>

            <el-container class="item">
                <el-aside width="60px">
                    <img class="head" src="../assets/head/17180600416.jpg" />
                </el-aside>
                <el-main style="margin:5px; padding:0;">
                    <div class="name">
                        <label>墨尔本</label>
                        <el-button class="thumb" size="mini" type="info" round><span class="fa fa-thumbs-up">&nbsp;</span>+1</el-button>    
                    </div>
                    <div class="score">积分: 1002</div>
                </el-main>
            </el-container>

            <el-container class="item">
                <el-aside width="60px">
                    <img class="head" src="../assets/head/17180600419.jpg" />
                </el-aside>
                <el-main style="margin:5px; padding:0;">
                    <div class="name">
                        <label>PiKa</label>
                        <el-button class="thumb" size="mini" type="info" round><span class="fa fa-thumbs-up">&nbsp;</span>+1</el-button>    
                    </div>
                    <div class="score">积分: 992</div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>
<script>
export default {
    
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