<template>
  <div class="action">
    <fileUpload/>
  </div>
</template>

<script>
  import fileUpload from '@/components/file-upload.vue';

  export default {

    components:{
      fileUpload
    }

  }
</script>

<style scoped>
  .action {
    padding: 10px;
  }
</style>