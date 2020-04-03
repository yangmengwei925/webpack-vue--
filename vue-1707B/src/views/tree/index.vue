<template>
  <ul class="list">
    <tree-item
      :item="treeData"
    />

  </ul>
</template>

<script>
  /*
  * 1:数据 网络获取
  * 2:分析数据格式  有children 是文件夹 没有children 文件
  * 3:封装组件 递归
  *
  * 接收参数:
  * <tree-item
  *   :item:数据
  *
  *
  * />
  *
  *
  * */

  export default {
    name: "tree-index",
    data() {
      return{
        treeData: {
          name: '我的目录',
          children: [
            {name: '笔记1'},
            {name: '笔记2'},
            {
              name: '文件夹',
              children: [
                {
                  name: '子文件夹',
                  children: [
                    {name: '笔记'},
                    {name: '笔记'}
                  ]
                },
                {name: '笔记'},
                {name: '笔记'},
                {
                  name: '子文件夹',
                  children: [
                    {name: '笔记'},
                    {name: '笔记'}
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>