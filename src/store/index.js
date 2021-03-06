import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        url:'http://121.36.33.215:8080',
        user:{
            uid:25,
            username:'ss3295286',
            head: require('@/assets/head/default_head.png'),
            score:11,
            gid:1
        },
        common:{
            questionAmount: 0
        },
        // url:'http://39.105.58.247:17777',
        isAuto: true,
        islogined: false
    }
});

export default store;