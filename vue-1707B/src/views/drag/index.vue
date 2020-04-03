<template>
  <div>
    <Drag v-slot:default="{left,top}">
      <div id="my_drag">
        left: <input type="text" :value="left">
        top: <input type="text" :value="top">
        姓名: <input type="text">
        姓名: <input type="text">
      </div>
    </Drag>
  </div>
</template>

<script>

  export default {
    name: "drag",

  }
</script>

<style scoped>

  #my_drag {

    width: 150px;
    height: 200px;
    background: #cccccc;
  }

</style>