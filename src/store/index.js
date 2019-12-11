import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    THEME:{
        mainThemeColor: "blue"
    }
})

export default store