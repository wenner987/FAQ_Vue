<template>
    <div class="top-wrapper">
        <el-menu 
            :default-active="activeIndex" class="top-nav" mode="horizontal" @select="handleSelect">
            <div class="logo animated flip"><span class="fa fa-file-text">&nbsp;&nbsp;</span>FAQ</div>

            <el-submenu style="margin-right:150px;" index="1" class="item">
                <template slot="title">
                    <el-badge is-dot class="badge">
                        <div><img class="mini-icon" src="../assets/head/default_head.png" />个人中心</div>
                    </el-badge>
                </template>
                <div class="user-block">
                    <div class="head-block layout-center-column">
                        <img src="../assets/head/17180600414.jpg" />
                        Alphakin
                    </div>
                </div>
            </el-submenu>
            <el-submenu index="2" class="item">
                <template slot="title">
                    <el-badge :value="12" class="badge">
                        <div><span class="fa fa-bell">&nbsp;</span>我的消息</div>
                    </el-badge>
                </template>
                <el-menu-item>系统消息：你的回答被采纳</el-menu-item>
                <el-menu-item>他为你的文章点了赞</el-menu-item>
                <el-menu-item>系统消息：你的回答被采纳</el-menu-item>
            </el-submenu>
            <el-menu-item @click="leaveTo('/newquestion')" class="item">
                <span class="fa fa-question-circle">&nbsp;</span>我要提问
            </el-menu-item>
            
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      leaveTo(url){
          this.$router.push(url);
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

.top-wrapper{
    /* position: fixed;
    top: 0; */
    width: 100%;
    height: 60px;
    /* background: lightcoral; */
    box-shadow: 0px 0px 10px 4px rgba(200,200,200,0.3);
}

.top-wrapper .top-nav{

}

.top-wrapper .top-nav .item{
    float: right;
}

.top-wrapper .top-nav .logo{
    display: inline-block;
    float: left;
    width: 150px;
    font-size: 20px;
    font-weight: 600;
    line-height: 60px;
    outline: none;
    /* background: lightgoldenrodyellow; */
}

.badge div{
    /* background: lightcoral; */
    height: 30px;
    padding-right: 5px;
    line-height: 30px;
}

.single-item{
    width: 100px;
    background: none;
    border: none;
}
.single-item:hover{
    background: none;
}
.user-wrapper{
    width: 200px;
    height: 200px;
    /* background: lightgreen; */
}
.mini-icon{
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin-right: 5px;
}
.user-block .head-block{
    width: 100%;
    height: 100px;
    background-image: url("../assets/head-bg/default-head-background2.jpeg");
    background-position: center;
    background-size: 150%;
    font-size: 12px;
    font-weight: 600;
    color: gray;
}

.user-block .head-block img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 4px rgba(200,200,200,0.3);
}
</style>