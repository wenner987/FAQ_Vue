<template>
    <div class="show-block-wrapper layout-center-column" :class="theme">
        <label class="title">{{title}}</label><br>
        <label class="value">{{value}}</label>
    </div>
</template>
<script>
export default {
    props:['title','value','theme'],
    data(){
        return{
            isBlue:true
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
.show-block-wrapper{
    border-radius: 20px;
    margin: 10px;
    width: 200px;
    height: 150px;
    box-shadow: 0px 0px 10px 4px rgba(200,200,200,0.5);
}
.show-block-wrapper .title{
    font-size: 16px;
    font-weight: 600;
    color: white;
}
.show-block-wrapper .value{
    font-size: 35px;
    color: white;
}
.color-blue{
    background: linear-gradient(#64b4ff, #346eec);
}
.color-purple{
    background: linear-gradient(#d48bff, #9241c8);
}
.color-orange{
    background: linear-gradient(#fac099, #eb9533);
}
.color-green{
    background: linear-gradient(#85ff9f, #2fce5f);
}
</style>