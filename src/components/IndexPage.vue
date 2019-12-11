<template>
  <div class="wrapper">
    <el-container class="container">
      <el-header class="header">
        <toper></toper>
      </el-header>
      <el-main style="padding:0;">
        <div class="top-background layout-center-column">
          背景图
        </div>
        <div class="top-data-wrapper layout-ycenter-column">
          <show-block title="今日完成任务量" value="12" theme="color-blue"></show-block>
          <show-block title="今日发布任务量" value="37" theme="color-green"></show-block>
          <show-block title="今日回答" value="2" theme="color-purple"></show-block>
          <show-block title="" value="3117" theme="color-orange"></show-block>
        </div>
        <div class="container-main">
          <el-row :gutter="20">
            <el-col :span="17">
              <item-list></item-list>
            </el-col>
            <el-col :span="3">
              <rank-block></rank-block>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <footer></footer>
    </el-container>
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import Toper from './Toper.vue'
import Footer from './Footer.vue'
import ShowBlock from './ShowBlock.vue'
import ItemList from './ItemList.vue'
import RankBlock from './RankBlock.vue'
export default {
  name: 'Index',
  components:{
    'toper':Toper,
    'footer':Footer,
    'show-block': ShowBlock,
    'item-list': ItemList,
    'rank-block':RankBlock
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-center-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.layout-ycenter-column{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.wrapper{
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  overflow: auto;
  background: rgb(250, 250, 250);
}
.wrapper .container{
}
.top-background{
  width: 100%;
  height: 200px;
  font-size: 80px;
  background: linear-gradient(left, #4af683, #37b0f6);
  /* background: url("../assets/banner.png"); */
  background-size: auto 100%;
  background-position: right center;
  background-repeat: no-repeat;
}

.wrapper .container .header{
  margin: 0;
  padding: 0;
}

.top-data-wrapper{
  width: 900px;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
  /* background: lightcoral; */
}
.container-main{
  width: 1000px;
  min-height: 300px;
  margin: 0 auto;
  /* background: lightcoral; */
}
</style>
