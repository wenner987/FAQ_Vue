<template>
    <div class="concrete-wrapper">
        <el-container class="container">
            <el-header class="header">
                <toper></toper>
            </el-header>
            <el-main class="scroll-view" style="padding:0;">
                <div class="container-main">
                    <div class="left"><problem-block></problem-block></div>
                    <!-- question=问题 artical=文章-->
                    <div class="right"><problem-info type="question"></problem-info></div>
                    <div class="operate">
                        <button class="right">我要回答</button>
                    </div>
                    <div class="left"><answer-block></answer-block></div>
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