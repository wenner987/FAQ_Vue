<template>
    <div class="login-wrapper layout-center-column">
        <login-card></login-card>
    </div>
</template>
<script>
import LoginCard from './LoginCard.vue'
export default {
    components:{
        'login-card': LoginCard
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

.layout-center-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-wrapper{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background: lightcoral; */
}
</style>