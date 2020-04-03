<template>
  <div>

    <button @click="sendRequest">发送请求通过代理</button>
    <button @click="sendRequest1">发送请求到webpack自带的before</button>
    <button @click="add">add</button>

    <div v-if="obj">{{obj.msg}}</div>
  </div>
  
</template>

<script>
  import $request from '@/utils/request';
  export default {
    name: "SHow",
    data() {
      return{
        obj: null
      }
    },

    methods:{
      add() {
        consol.lo(111);
      },
      async sendRequest() {

        /*
        * Access to XMLHttpRequest at 'http://localhost:9999/list'
        * from origin 'http://localhost:8889' has been blocked by CORS policy:
        * No 'Access-Control-Allow-Origin'
        * header is present on the requested resource.
        * */
        let res = await $request.get('/list');
        this.obj = res;
      },

      async sendRequest1() {


        /*
        * Access to XMLHttpRequest at 'http://localhost:9999/list'
        * from origin 'http://localhost:8889' has been blocked by CORS policy:
        * No 'Access-Control-Allow-Origin'
        * header is present on the requested resource.
        * */
        let res = await $request.get('/open');
        this.obj = res;
      }
    }
  }
</script>

<style scoped>

</style>