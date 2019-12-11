<template>
    <div class="answer-block-wrapper">
        <div class="reply-main">
            <el-container>
                <el-aside width="60px">
                    <img class="head" :src="circleUrl" />
                </el-aside>
                <el-main style="margin:0; padding:0;">
                    <div class="name">Alphakin</div>
                    <div class="content">
                        <article>
                            它提供了Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。 [1] Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。
                        </article>
                    </div>
                    <div class="operate">
                        <el-button type="warning" round><span class="fa fa-thumbs-up">&nbsp;</span>12</el-button>
                        <el-button type="primary" round><span class="fa fa-pencil">&nbsp;</span>我要评论</el-button>
                    </div>
                    <div class="comment">
                        <el-container>
                            <el-aside width="60px">
                                <img class="head" :src="circleUrl" />
                            </el-aside>
                            <el-main style="margin:0; padding:0;">
                                <div class="name">Alphakin</div>
                                <div class="content">
                                    <article>
                                        它提供了Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。 [1] Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。
                                    </article>
                                </div>
                                <div class="operate">
                                    <el-button size="mini" type="info" round><span class="fa fa-thumbs-up">&nbsp;</span>12</el-button>
                                </div>
                            </el-main>
                        </el-container>
                    </div>
                </el-main>
            </el-container>
            <el-divider></el-divider>
        </div>
        <div class="reply-main">
            <el-container>
                <el-aside width="60px">
                    <img class="head" :src="circleUrl" />
                </el-aside>
                <el-main style="margin:0; padding:0;">
                    <div class="name">Alphakin</div>
                    <div class="content">
                        <article>
                            它提供了Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。 [1] Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。
                        </article>
                    </div>
                    <div class="operate">
                        <el-button type="warning" round><span class="fa fa-thumbs-up">&nbsp;</span>12</el-button>
                        <el-button type="primary" round><span class="fa fa-pencil">&nbsp;</span>我要评论</el-button>
                    </div>
                    <div class="comment">
                        <el-container>
                            <el-aside width="60px">
                                <img class="head" :src="circleUrl" />
                            </el-aside>
                            <el-main style="margin:0; padding:0;">
                                <div class="name">Alphakin</div>
                                <div class="content">
                                    <article>
                                        它提供了Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。 [1] Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。
                                    </article>
                                </div>
                                <div class="operate">
                                    <el-button size="mini" type="info" round><span class="fa fa-thumbs-up">&nbsp;</span>12</el-button>
                                </div>
                            </el-main>
                        </el-container>
                    </div>
                </el-main>
            </el-container>
            <el-divider></el-divider>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            circleUrl: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg"
        }
    }
}
</script>
<style scoped>
.answer-block-wrapper{
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 30px;
    text-align: left;
    background: white;
    border-radius: 15px;
    padding: 40px;


    box-shadow: 0px 0px 15px 3px rgba(200,200,200,0.3);
}
.answer-block-wrapper .reply-main{
    width: 100%;

}
.answer-block-wrapper .reply-main .head{
    width: 45px;
    height: 45px;
    float: left;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 3px rgba(200,200,200,0.3);
}
.answer-block-wrapper .reply-main .name{
    width: 100%;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
    /* background: lightcoral; */
}
.answer-block-wrapper .reply-main .content{
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 20px;
    /* background: lightblue; */
}

.answer-block-wrapper .reply-main .comment{
    width: 100%;
    margin-top: 25px;
}
</style>