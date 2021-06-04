<template>
  
    <div id="app" class="container-fluid mt-3">
       <div class="jumbotron">
          <h1>Agencia de Viajes Con Vue-Cli</h1>
          <Navbar />
     
          <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

/* import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import Vuelos from './components/Vuelos.vue'
 */




export default {
  name: 'App',
  components: {
    /* HelloWorld,
    Login,
    Vuelos */
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
</style>
