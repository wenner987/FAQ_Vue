// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import qs from 'qs'
import ElementUI from 'element-ui'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(VueCookies)
Vue.prototype.$qs = qs
Vue.prototype.$http = axios
Vue.prototype.$postReqire = function(fromObj, interfacePath, parameters = {'get':'get'}, callback_success, callback_fail){
    let url = this.$store.state.url + interfacePath;
    this.$http.post(url, this.$qs.stringify(parameters))
        .then(callback_success)
        .catch(callback_fail)
}
Vue.prototype.$createMessage = function(label, type){
  this.$message({
    showClose: true,
    message: label,
    type: type
  });
}
Vue.prototype.$getHeadLevel = function(score){
  let limit = [25, 50, 75, 100]
  let res = limit.length;
  for(let i=0; i<limit.length; ++i){
    // alert(parseInt(score));
    if(score < limit[i]){
      res = (i+1).toString();
      break;
    }
  }
  res = res + ".png";
  // alert(res);
  return res;
}
Vue.prototype.$certify = function(){
    if(this.$cookies.get("username") == null && this.$cookies.get("password") == null) return;
    this.$postReqire(this.$store.state.url, '/user/login', 
      {
          "username": this.$cookies.get("username"), 
          "password": this.$cookies.get("password"),
          "autoLogin": 0
      },
      (response) => {
          if(response.data['ERROR'] == 0){
            this.$store.state.islogined = true;
            this.$store.state.user.score = response.data['USER_INFO']['cScore'];
            this.$store.state.user.head = require("@/assets/head/" + this.$getHeadLevel(response.data['USER_INFO']['cScore']));
          }else{ this.$store.state.user.head = require("@/assets/head/default_head.png"); }
      },
      (error) => { this.$store.state.user.head = require("@/assets/head/default_head.png"); });
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
