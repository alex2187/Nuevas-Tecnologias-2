<template >

  <section class="src-components-navbar">
    <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <!-- Opcion raiz "/" -->
      <router-link to="/inicio">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>  

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- opcion ruta binding para routearlo y mandarlo a la direccion que queremos debemos envolver
          la etiqueta a en otra etiqueta que usa vuecli que se llama router-link  y dentro de la etiqueta ponemos un to
          para poner la ruta de direccion -->

          <li class="nav-item">
            <router-link  to="/reserva">
              <a class="nav-link" href="#">Reserva</a>
            </router-link>          
          </li>

           
          <li class="nav-item" >
            <router-link to="/origenDestino" >
              <a class="nav-link" href="#">CRUD Origen y Destino</a>
            </router-link>
          </li> 


           <li class="nav-item" >
            <router-link to="/apiRestFull" >
              <a class="nav-link" href="#">Informe</a>
            </router-link>
          </li>
          
           <li class="nav-item">
            <router-link to="/login">
              <a class="nav-link" href="#">Login</a>
            </router-link>
           </li>

          <button type="button" class="logoutButton" @click="logout">
           Logout
          </button>

        </ul>
      </div>
    </nav>
  </section>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      logout () {
      this.$router.push({ name: 'Home' })
      this.$store.dispatch('logout')
    }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>
