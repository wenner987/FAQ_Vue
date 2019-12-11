<template>
    <div class="tag-wrapper" :class="type">
        {{label}}
    </div>
</template>
<script>
export default {
    props:{
        type:{ type:String, required:true },
        label: {type:String, required:true}
    }
}
</script>
<style scoped>
.tag-wrapper{
    display: inline-block;
    height: 25px;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    line-height: 26px;
    color: white;
    cursor: pointer;
    margin-right: 5px;
    box-shadow: 0px 0px 6px 2px rgba(200,200,200,0.5);
}
.tag-wrapper:hover{
    transform: scale(1.1);
}
.LD{ background: lightgreen; }
.LC{ background: lightskyblue; }
.LB{ background: lightsalmon; }
.LA{ background: lightcoral; }
</style>