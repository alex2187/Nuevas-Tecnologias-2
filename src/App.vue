<template>
    <div id="app" class="container-fluid mt-3">
      <img class="logo1" src="./assets/ort2.jpg" alt="">
          <h1>Agencia de Viajes con Vue-Cli</h1>
          <Navbar />
          <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
  




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.jumbotron{
  background-color: rgba(68, 32, 32, 0.986);
  color:white;
}
h1{
  font-family: Copperplate, Papyrus, fantasy;
  font-style: oblique;
}
.logo1{
  position: absolute;
  left: 0px;
  top: 0px;
   width: 135px;
    height: 70px;
}
</style>
