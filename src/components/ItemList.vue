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
                    :total="30">
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
            itemsdata:[
                {
                    index: 1,
                    title:"Redis这个怎么办",
                    hot:3,
                    score:1,
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
                },
                {
                    index: 1,
                    title:"Redis这个怎么办",
                    hot:3,
                    score:1,
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
                },
                {
                    index: 1,
                    title:"Redis这个怎么办",
                    hot:3,
                    score:1,
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
                },
                {
                    index: 1,
                    title:"Redis这个怎么办",
                    hot:3,
                    score:1,
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
                },
                {
                    index: 1,
                    title:"Redis这个怎么办",
                    hot:3,
                    score:1,
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
                },
                {
                    index: 1,
                    title:"Redis这个怎么办",
                    hot:3,
                    score:1,
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
                },
                {
                    index: 1,
                    title:"怎样实现一个微服务架构?",
                    hot:10,
                    score:20,
                    tags:[
                        {
                            label:"数据库",
                            type:"LA"
                        },
                        {
                            label:"缓存",
                            type:"LD"
                        },
                        {
                            label:"Redis",
                            type:"LC"
                        }
                    ]
                },
                {
                    index: 1,
                    title:"Redis这个怎么办",
                    hot:33,
                    score:15,
                    tags:[
                        {
                            label:"数据库",
                            type:"LB"
                        },
                        {
                            label:"缓存",
                            type:"LC"
                        },
                        {
                            label:"Redis",
                            type:"LA"
                        }
                    ]
                }
            ]
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