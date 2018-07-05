<template>
  <b-container fluid id="app">
    <b-navbar variant="dark" type="light">
    <b-navbar-brand href="#"><img id="logo" src="./assets/UFRPE.png" alt=""></b-navbar-brand>
  </b-navbar>
    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body, .container{
  height: 100%;
  width: 100%;
}

#logo{
  width: 40px;
  height: 60px;
}
</style>
