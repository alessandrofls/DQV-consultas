<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">DQV</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="http://www.ufrpe.br">UFRPE</b-nav-item>
      <b-nav-item href="http://www.siga.ufrpe.br" >Sig@</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
    <b-container>
      <router-view></router-view>
    </b-container>
    
  </div>
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
  color: #000;
  
}
html, body, #app, .container{
  width: 100%;
  height: 100%;
}

body{
  background-image: url('./assets/pattern.jpg');
  background-size: 50%;
}

#logo{
  width: 3%;
  height: 8%;
}
</style>
