<template>
  <div id="main">
    <Header></Header>
    <!--
    npm run dev 之前 大的改动 重新build
    -->
    <SlideBar></SlideBar>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header';
  import SlideBar from '../../components/SlideBar/SlideBar';
  export default {
    name: "Main-index",
    components: {
      Header, SlideBar
    }
  }
</script>

<style scoped>
  #main {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
  #content {
    position: absolute;
    top: 81px;
    left: 200px;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    /*overflow-y: auto;*/
  }
</style>