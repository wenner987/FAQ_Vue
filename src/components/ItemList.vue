<template>
    <div class="item-list-wrapper">
        <div class="header">
            <div class="title"><span class="fa fa-file-text-o">&nbsp;&nbsp;</span>热门问题</div>
            <div class="descibe">热门问题汇总，关于各种方面的问题。</div>
        </div>
        <div class="list">
            <nav class="nav">
                <li v-for="(item, index) in itemsdata" :key="index">
                    <item-of-list v-bind:itemdata="item"></item-of-list>
                </li>
            </nav>
            <div class="foot layout-center-column">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :hide-on-single-page="isOnePage"
                    :total="itemsdata.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import ItemOfList from './ItemOfList.vue'
export default {
    components:{
        'item-of-list':ItemOfList
    },
    props:{
        title:{ type: String },
        desc:{ type: String }
    },
    data(){
        return{
            isOnePage: true,
            itemsdata:[]
        }
    },
    mounted(){
        let that = this;
        that.getQuestionRank();
    },
    methods:{
        getQuestionRank(){
            this.$postReqire(this, '/question/getQuestionRank', {'index':0},
                (response) =>{
                if(response.data['ERROR'] == 0){
                    this.itemsdata = [];
                    for(let i=0; i<response.data['QUESTIONS'].length; ++i){
                        this.itemsdata.push({
                            index: 1,
                            qid: response.data['QUESTIONS'][i]['cQid'],
                            title: response.data['QUESTIONS'][i]['cQTitle'],
                            hot: response.data['QUESTIONS'][i]['cHot'],
                            score: 5,
                            tags:[
                                {
                                    label:"数据库",
                                    type:"LC"
                                },
                                {
                                    label:"缓存",
                                    type:"LA"
                                }
                            ]
                        });
                    }
                }else{ that.$createMessage('获取问题列表失败', 'error'); }
                },
                (error) => {
                that.$createMessage('请检查网络连接', 'error');
            });
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
.item-list-wrapper{
    width: 100%;
    border-radius: 10px;
    /* width: 100%; */
    box-shadow: 0px 0px 10px 3px rgba(200,200,200,0.3);
    background: white;
}
.item-list-wrapper .header{
    width: 100%;
    height: 70px;
    text-align: left;
    border-bottom: 0.5px solid rgba(200,200,200,0.5);
    border-radius: 10px 10px 0px 0px;
    /* box-shadow: 0px 5px 2px 1px rgba(200,200,200,0.3); */
    /* background: lightgrey; */
    padding-top: 3px;
}
.item-list-wrapper .header .title{
    font-size: 15px;
    font-weight: 600;
    line-height: 30px;
    margin-left: 30px;
    margin-top: 10px;
    color: gray;
    /* background: lightcoral; */
}
.item-list-wrapper .header .descibe{
    font-size: 10px;
    color: gray;
    margin-left: 30px;
}

.item-list-wrapper .list{
    width: 100%;
}
.item-list-wrapper .list .nav{
    list-style: none;
}
.item-list-wrapper .list .nav li:nth-child(odd){
    background: rgba(200,200,200,0.15);
}
.item-list-wrapper .list .nav li{
    transition-duration: .2s;
}
.item-list-wrapper .list .nav li:hover{
    background: rgb(235, 235, 235);
}
.item-list-wrapper .list .foot{
    width: 100%;
    height: 70px;
}
</style>