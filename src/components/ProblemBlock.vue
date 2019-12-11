<template>
    <div class="problem-block-wrapper">
        <div class="problem-type">
            <span class="fa fa-info-circle">&nbsp;</span>问题
        </div>
        <div class="title">
            <span class="fa fa-file-text">&nbsp;</span>处理缓存的具体应用有哪些？处理缓存的具体应用有哪些？处理缓存的具体应用有哪些？处理缓存的具体应用有哪些？
        </div>
        <div class="tags">
            <vtag label="缓存" type="LA"></vtag>
            <vtag label="数据库" type="LB"></vtag>
            <vtag label="应用" type="LC"></vtag>
        </div>
        <el-divider style="margin-top:5px;margin-bottom:5px;"></el-divider>
        <div class="context">
            <article>
                redis是一个key-value存储系统。和Memcached类似，它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。在此基础上，redis支持各种不同方式的排序。与memcached一样，为了保证效率，数据都是缓存在内存中。区别的是redis会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了master-slave(主从)同步。
Redis 是一个高性能的key-<p>value数据库。 </p>的出现，很大程度补偿了memcached这类key/value存储的不足，在部 分场合可以对关系数据库起到很好的补充作用。它提供了Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。 [1] 
Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。
redis的官网地址，非常好记，是redis.io。（域名后缀io属于国家域名，是british Indian Ocean territory，即英属印度洋领地）
            </article>
        </div>
    </div>
</template>
<script>
import Tag from './Tag'
export default {
    components:{
        'vtag' : Tag
    }
    
}
</script>
<style scoped>

.problem-block-wrapper{
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: left;
    background: white;
    border-radius: 15px;
    padding: 40px;

    box-shadow: 0px 0px 15px 3px rgba(200,200,200,0.3);
}
.problem-block-wrapper .problem-type{
    width: 100%;
    margin-bottom: 5px;
    font-size: 12px;
    color: gray;
}
.problem-block-wrapper .title{
    font-size: 20px;
    font-weight: 600;
    color: #555555;
}
.problem-block-wrapper .tags{
    margin-top: 10px;
    font-size: 15px;
    color: gray;
    line-height: 20px;
}
.problem-block-wrapper .context{
    margin-top: 15px;
    font-size: 16px;
    color: gray;
}
</style>