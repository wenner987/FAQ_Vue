<template>
    <div class="empty-block layout-center-column">
        <img class="empty" src="../assets/empty.png" />
        <p>{{label}}</p>
    </div>
</template>
<script>
export default {
    props:['label']
}
</script>
<style scoped>
.empty-block{
    width: 100%;
    min-height: 200px;
    font-size: 13px;
    clear: gray;
    /* background: lightcoral; */
}
.empty-block p{ color: gray; }
.empty-block .empty{
    width: 200px;
}
</style>