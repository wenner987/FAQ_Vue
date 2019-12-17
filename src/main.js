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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
