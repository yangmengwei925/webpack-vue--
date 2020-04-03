import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './components'
import {Button} from "element-ui";

Vue.use(Button);

//报错  图标 .png  .jpg . gif
// import 'element-ui/lib/theme-chalk/index.css'

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
});

window.$vm = vm;