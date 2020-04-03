import Drag from './Drag/drag';
import GridView from './GridView/GridView';
import Modal from './Modal/Modal';
import Tree from './Tree/tree-item';
import Vue from 'vue';

//全局注册
Vue.component('Drag', Drag);
Vue.component('GridView', GridView);
Vue.component('Modal', Modal);
Vue.component('tree-item', Tree);


//
// 发包 --npm  下载
// Vue.use({install:(Vue)=>{
//    Vue.extend()
// }})
// Vuex
// Router