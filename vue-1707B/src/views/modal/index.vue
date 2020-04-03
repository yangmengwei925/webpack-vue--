<template>
  <div>

    <button @click="showModal = true">弹出模态框</button>
    <button @click="show=!show">动画</button>

    <transition name="anim">
      <div class="box" v-if="show">

      </div>
    </transition>

    <Modal :showModal="showModal" @close="showModal=false">
      <!--头部-->
      <!--具名插槽  一个有名字的插槽 名字 :header -->
      <h3 slot="header">头部头部头部头部头部</h3>
      <!---->
      <div slot="body">
        姓名: <input type="text">
        <br>
        性别: <input type="text">
      </div>
      <!--尾部-->
      <div slot="footer">
        <el-button>确定</el-button>
      </div>

    </Modal>

  </div>
</template>

<script>
  export default {
    name: "modal-index",
    data() {
      return {
        showModal: false,
        show: false
      }
    }
  }
</script>

<style scoped>

  .body {
    width: 200px;
  }

  .box {
    width: 200px;
    height: 200px;
    background: #00a8cc;
  }


  /*
   刚开始动画 存在的类 一旦dom被插入 就立刻移除
  */
  .anim-enter {
    opacity: 0;
  }

  /*
    整个动画执行过程都会存在的类
  */


  .anim-enter-to {
    opacity: .5;
  }

  .anim-enter-active {
    transition: all .5s linear;
  }

  /*离开*/
  /*.anim-leave {*/
  /*  opacity: 0;*/
  /*}*/

  .anim-leave-to {
    opacity: 0;
  }

  .anim-leave-active {
    transition: all .5s linear;
  }


</style>