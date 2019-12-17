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
          <show-block title="今日回答问题量" :value="staticValue.answerToday" theme="color-blue"></show-block>
          <show-block title="今日发布问题量" :value="staticValue.questionToday" theme="color-green"></show-block>
          <show-block title="今日发布文章数" :value="staticValue.articleToday" theme="color-purple"></show-block>
          <show-block title="dd" value="3117" theme="color-orange"></show-block>
        </div>
        <div class="container-main">
          <el-row :gutter="20">
            <el-col :span="17">
              <item-list></item-list>
            </el-col>
            <el-col :span="3">
              <rank-block v-bind:userList="userData"></rank-block>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
    <footer></footer>
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
      staticValue: {
        answerToday: 1,
        questionToday: 1,
        articleToday: 1
      },
      userData:[{}]
    }
  },
  mounted(){
    let that = this;
    that.getTodayAnswer();
    that.getTodayAnswer();
    that.getTodayArticle();
    that.getUserRank()
  },
  methods:{
    // 获取回答数量
    getTodayAnswer(){
      this.$postReqire(this, '/answer/getTodayAnswer', {'get':'get'},
        (response) =>{
          if(response.data['ERROR'] == 0){
            this.staticValue.answerToday = response.data['COUNT'];
          }else{ this.$createMessage('获取今日回答数量失败', 'error'); }
        },
        (error) => {
          this.$createMessage('请检查网络连接', 'error');
        })
    },
    // 获取提问数量
    getTodayQuestion(){
      this.$postReqire(this, '/question/getTodayQuestion', {'get':'get'},
        (response) =>{
          if(response.data['ERROR'] == 0){
            this.staticValue.questionToday = response.data['COUNT'];
          }else{ that.$createMessage('获取今日提问数量失败', 'error'); }
        },
        (error) => {
          that.$createMessage('请检查网络连接', 'error');
        })
    },
    // 获取今日文章数量
    getTodayArticle(){
      this.$postReqire(this, '/article/getTodayArticle', {'get':'get'},
        (response) =>{
          if(response.data['ERROR'] == 0){
            this.staticValue.articleToday = response.data['COUNT'];
          }else{ that.$createMessage('获取今日文章数量失败', 'error'); }
        },
        (error) => {
          that.$createMessage('请检查网络连接', 'error');
        })
    },
    // 获取用户排行
    getUserRank(){
      this.$postReqire(this, '/user/getUserRank', {'get':'get'},
        (response) =>{
          if(response.data['ERROR'] == 0){
            this.userData = [];
            for(let i=0; i<response.data['USERS'].length; ++i){
              this.userData.push({
                'username':response.data['USERS'][i]['cUsername'],
                'score':response.data['USERS'][i]['cScore']
              })
            }
          }else{ that.$createMessage('获取列表失败', 'error'); }
        },
        (error) => {
          that.$createMessage('请检查网络连接', 'error');
        })
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
  margin-bottom: 100px;
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
