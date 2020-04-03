<template>
  <div id="editor">
    <!--
    编辑
    -->
    <textarea :value="input" @input="update"></textarea>
    <!--
      显示 markdown转换之后的结果
    -->
    <div id="show" v-html="compliedMarkdown"></div>

  </div>
</template>

<script>
  export default {
    name: "markdowm",
    data() {
      return {
        input: '# Hello'
      }
    },
    computed: {
      //转换之后的结果
      compliedMarkdown() {
        return marked(this.input, {});
      },
    },
    methods: {
      update: _.debounce(function (ev) {
        this.input = ev.target.value;
        //300ms 更新一次
      }, 300)
    }
  }
</script>

<style scoped>
  html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    /*color: #333;*/
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    position: absolute;
    bottom: 0;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
    position: absolute;
    bottom: 0;
  }

  #show {
    left: 50%;
  }

  #show code {
    color: #f66;
  }
</style>