<template>
  <div id="slideBar" >
    <ul>
      <li
        :class="$route.matched[1].path===item.toPath?'active':''"
        @click="handleClick(item)"
        :key="key"
        v-for="(item,key) in asideData"
      >{{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {getAsideData} from "../../router/routerConfig";

  export default {
    name: "SlideBar",
    computed: {
      asideData() {
        // console.log(getAsideData());
        return getAsideData();
      }
    },

    mounted() {
      //er 人  一件事
      //$route 和 $router 什么区别
      //$router 可以做很多事  $router.push()
      //$route 当前路由信息
      console.log(this.$route);
      // console.log(this.asideData);
    },
    methods: {
      handleClick(item) {
        //跳转 如果跳转到当前路由
        if (item.toPath === this.$route.matched[1].path) {
          return
        }
        this.$router.push(item.toPath);
      }
    }
  }
</script>

<style scoped>

  #slideBar {
    position: absolute;
    left: 0;
    width: 200px;
    bottom: 0;
    overflow-y: auto;
    background-color: #10375c;
    top: 81px;
  }

  ul {
    padding: 0;
    margin: 0;
    cursor: pointer;

  }


  li {
    padding-left: 20px;
    line-height: 40px;
    background-color: #d4ebd0;
    list-style: none;
    margin-bottom: 1px;
  }

  li:hover, li.active {
    background-color: #00a8cc;
    color: #ffffff;
  }
</style>