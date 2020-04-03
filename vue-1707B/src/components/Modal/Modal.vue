<template>
  <transition name="modal">
    <!--阴影-->
    <div class="modal-mask" v-if="showModal">
      <!--中间居中-->
      <div class="modal-wrapper">

        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">

            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
            &nbsp;
            <button class="modal-default-button" @click="$emit('close')">ok</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Modal",
    props: {
      showModal: Boolean
    }

  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    width: 300px;
    background-color: #ffffff;
    padding: 20px 30px;
    margin: 0 auto;
    transition: all .3s ease;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #33c853;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-footer button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-enter-active ,.modal-leave-active{
    transition: all .3s ease;
  }
  .modal-leave-to {
    opacity: 0;
  }

  .modal-leave-active .modal-container {
    transform: scale(1.1);
  }

</style>