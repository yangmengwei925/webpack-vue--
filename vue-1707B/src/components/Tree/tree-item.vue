<template>
  <li class="file">
    <!--1:数据渲染出来-->
    <div
    @click="toggle"
    :class="{bold:isFolder}"
    >{{item.name}}

      <!-- 加号减号-->
      <span v-if="isFolder">[{{isOpen?'-':'+'}}]</span>
    </div>
    <ul v-show="isOpen">
      <tree-item
        v-for="(child,index) in item.children"
        :item="child"
        :key="index"
      >
      </tree-item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "tree-item",
    props: {
      item: Object,

    },
    data() {
      return{
        isOpen: false
      }
    },
    computed:{

      isFolder() {
        return this.item.children
          && this.item.children.length;

      }
    },
    methods:{

      toggle() {
        //判断是不是文件夹
        if (this.isFolder) {
          this.isOpen = !this.isOpen;
        }
      }
    }

  }
</script>

<style scoped>
  .file {
    user-select: none;
  }

  .bold {
    color: #ff6f62;
    font-weight: bold;

  }
</style>