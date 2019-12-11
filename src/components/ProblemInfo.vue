<template>
    <div class="problem-info-wrapper layout-center-column">
        <div class="user-wrapper">
            <img class="head" :src="circleUrl" />
            <div class="name layout-center-column">
                <div v-if="type === 'article'"><label>作者</label></div>
                <div v-else><label>提问者</label></div>
                <label class="name-val">Alphakin</label>
            </div>
        </div>
        <el-divider style="margin-top:5px;margin-bottom:5px;"></el-divider>
        <table class="problem-desc">
            <tr v-if="type === 'question'">
                <td>问题悬赏</td>
                <td><span class="fa fa-star" style="color:orange;">&nbsp;</span>10</td>
            </tr>
            <tr>
                <td>浏览次数</td>
                <td>231</td>
            </tr>
            <tr>
                <td v-if="type === 'article'">评论数量</td>
                <td v-if="type === 'question'">回答数量</td>
                <td>3</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props:["type"],
    data(){
        return{
            circleUrl: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg"
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
.problem-info-wrapper{
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box;
    padding: 30px;
    width: 300px;
    border-radius: 15px;
    background: white;
    margin-top: 30px;
    box-shadow: 0px 0px 15px 3px rgba(200,200,200,0.3);
}
.problem-info-wrapper .user-wrapper{
    /* background: red; */
}
.problem-info-wrapper .user-wrapper .head{
    display: inline-block;
    width: 60px;
    height: 60px;
    float: left;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 3px rgba(200,200,200,0.3);
}
.problem-info-wrapper .user-wrapper .name{
    display: inline-block;
    font-size: 14px;
    height: 60px;
    width: 100px;
    float: right;
    text-align: center;
    /* background: lightcoral; */
}
.problem-info-wrapper .user-wrapper .name *{
    display: block;
    font-weight: 600;
    color: gray;
    margin-top: 6px;
}
.problem-info-wrapper .problem-desc{
    width: 230px;
    /* background: lightcyan; */
}
.problem-info-wrapper .problem-desc tr td{
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
}
.problem-info-wrapper .problem-desc tr td:nth-child(1){
    float: left;
}
.problem-info-wrapper .problem-desc tr td:nth-child(2){
    float: right;
}
</style>