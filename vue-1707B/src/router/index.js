//配置 路由
//人生第一次 : 简单的路由
//权限 : 路由元信息


import Vue from 'vue';

import VueRouter from 'vue-router';

import routes from './routerConfig';


Vue.use(VueRouter);

let router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;



