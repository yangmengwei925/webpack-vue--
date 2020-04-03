import Vue from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// import './sass/index.css';

new Vue({
  el: '#app',
  template: '<App></App>',
  components: {App}
});

