<template>
    <div class="empty-block layout-center-column" :class="size">
        <img :class="size" src="../assets/empty.png" />
        <p>{{label}}</p>
    </div>
</template>
<script>
export default {
    props:{
        label:{

        },
        size:{
            default: "normal"
        }
    }
}
</script>
<style scoped>
.empty-block{
    width: 100%;
    margin-top: 10px;
    min-height: 100px;
    font-size: 13px;
    clear: gray;
    /* background: lightcoral; */
}
.empty-block p{ color: gray; }
.empty-block .normal{ width: 200px; }
.empty-block .mini{ width: 100px;}
</style>