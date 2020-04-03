<template>
  <div id="drag" @mousedown="mousedown" :style="{left:left+'px',top:top+'px'}">
    <slot :left="left" :top="top"></slot>
  </div>
</template>

<script>
  export default {
    name: "drag",

    data() {
      return {

        left: 100,
        top: 0
      }
    },

    methods: {
      mousedown(ev) {
        let disX = ev.clientX - this.left;
        let disY = ev.clientY - this.top;

        document.onmousemove = (event) => {

          // function 里面的this指向的是函数的拥有者
          //this 指向谁? event  onmousemove  vue实例  window  document

          let left = event.clientX - disX;
          let top = event.clientY - disY;
          this.left = left;
          this.top = top;
          if (left < 0) {
            this.left = 0;
          }
          if (top < 0) {
            this.top = 0;
          }
        };

        document.onmouseup = function () {

          document.onmousemove = null;
          document.onmouseup = null;

        };
      }
    }
  }
</script>

<style scoped>
  #drag {
    position: absolute;
    cursor: pointer;
    user-select: none;

  }


</style>