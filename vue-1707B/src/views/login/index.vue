<template>
  <div>
    <h1 class="login" @click="toMain">Login</h1>

    <img src="../../assets/logo.png" alt="">

  </div>
</template>

<script>
  //引入
  export default {
    name: "Login",

    methods:{
      toMain() {
        this.$router.push('/main-index');
      }

    }
  }
</script>

<style scoped>
.login {
  cursor: pointer;
}
</style>