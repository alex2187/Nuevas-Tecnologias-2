<template>
  <section class="src-components-api-rest-full">
    <div class="jumbotron">
      <h1>Informe de Reservas</h1>
      <hr />

      <!-- <button class="btn btn-success mr-3" @click="getUsuarios()">GET</button>
      <button class="btn btn-info mr-3" @click="postUsuario()">POST</button>

      <div
        class="media alert alert-info mt-3"
        v-for="(usuario, index) in usuarios"
        :key="index"
      >
        <img
          :src="usuario.foto"
          width="280"
          :alt="usuario.nombre"
          :style="{ 'border-radius': '20px' }"
        />
        <div class="media-body ml-4">
          <h4>
            <u
              >Usuario {{ index + 1 }} - ID: {{ usuario.id }} - creado:
              {{ convertirFmtFyh(usuario.createdAt) }}</u
            >
          </h4>
          <br />
          <p>
            Nombre: <b>{{ usuario.nombre }}</b>
          </p>
          <p>
            Descripción: <i>{{ usuario.descripcion }}</i>
          </p>
          <p>Comentarios: {{ usuario.comentarios }}</p>
          <p>
            Dirección:
            <i
              ><u>{{ usuario.direccion }}</u></i
            >
            - <b>{{ usuario.coordenadas }}</b>
          </p>

          <button class="btn btn-warning mr-3" @click="putUsuario(usuario.id)">
            PUT
          </button>
          <button
            class="btn btn-danger mr-3"
            @click="deleteUsuario(usuario.id)"
          >
            DELETE
          </button>
        </div>
      </div> -->


<!--  -----------------------------------------Prueba--------------------------------------- -->



      <div class="media alert alert-info mt-3" v-for="(usuario,index) in usuarios" :key="index">
          <img :src="usuario.Foto" width="180" :alt="usuario.Nombre" :style="{'border-radius': '10px'}">
          <div class="media-body ml-4">
            <h4><u>Usuario {{ index+1 }} - ID: {{usuario.id}}</u></h4>
            <br>
            <p>Nombre: <b>{{usuario.Nombre}}</b></p>
            <p>Apellido: <i>{{usuario.Apellido}}</i></p>
            <p>Origen: {{usuario.Origen}}</p>
            <p>Destino: {{usuario.Destino}}</p>
            <p>Fecha de Partida: {{convertirFmtFyh(usuario.Partida)}}</p>
            <p>Fecha de Regreso: {{convertirFmtFyh(usuario.Regreso)}} </p>

            <!-- <p>Dirección: <i><u>{{usuario.direccion}}</u></i> - <b>{{usuario.coordenadas}}</b></p> -->

            <button class="btn btn-warning mr-3" @click="putUsuario(usuario.id)">PUT</button>
            <button class="btn btn-danger mr-3" @click="deleteUsuario(usuario.id)">DELETE</button>

          </div>
        </div>  

    </div>

    <!-- <pre>{{usuarios}}</pre> -->
  </section>
</template>



<script lang="js">

  export default  {
    name: 'src-components-api-rest-full',
    props: [],
    mounted () {
      //console.log('ApiRestFull -> mounted')
      this.getUsuarios()

      this.refInterval = setInterval(() => {
        this.timer++
        console.log('ApiRestFull -> timer ' + this.timer)
      }, 1000);
    },
    /* --------------------------------------------------------------- */
    //Actualización de la vista del componente
    beforeUpdate() {
      console.log('ApiRestFull -> beforeUpdate')
    },
    updated() {
      console.log('ApiRestFull -> updated')
    },
    /* --------------------------------------------------------------- */
    //Destrucción del componente
    beforeDestroy() {
      console.log('ApiRestFull -> beforeDestroy')
    },
    destroyed() {
      console.log('ApiRestFull -> destroyed')

      clearInterval(this.refInterval)
    },

    
    data () {
      return {
        urlUsuarios: 'https://60a6c74ab970910017eb25e0.mockapi.io/Reserva/',
        usuarios: []

        //timer : 0,
        //refInterval : null

      }
    },
    methods: {
    convertirFmtFyh(fyh) {
        return new Date(fyh).toLocaleString()
      },

      /* --------------------------------------- */
      /*             API REST -> GET             */
      /* --------------------------------------- */
      async getUsuarios() {
        console.log('getUsuarios')
        try {
          let respuesta = await this.axios(this.urlUsuarios)
          console.log('AXIOS GET',respuesta.data)
          this.usuarios = respuesta.data
        }
        catch(error) {
          console.log(error)
        }
      },
      /* --------------------------------------- */
      /*            API REST -> POST             */
      /* --------------------------------------- */
      async postUsuario() {
        console.log('postUsuario')

        let usuario = {
          nombre: "Juan",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-128.png",
          descripcion: "Usuario del sistema A",
          coordenadas: [
          "1234",
          "4321"
          ],
          comentarios: "Hola como están!",
          direccion: "CABA 123"          
        }

        try {
          let respuesta = await this.axios.post(this.urlUsuarios, usuario, {'content-type':'application/json'})
          console.log('AXIOS POST',respuesta.data)

          //this.getUsuarios()

          let user = respuesta.data
          this.usuarios.push(user)
        }
        catch(error) {
          console.log(error)
        }

      },
      /* --------------------------------------- */
      /*            API REST -> PUT              */
      /* --------------------------------------- */
      async putUsuario(id) {
        console.log('putUsuario',id)

        let usuario = {
          nombre: "María",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png",
          descripcion: "Usuaria del sistema B",
          coordenadas: [
          "7890",
          "0987"
          ],
          comentarios: "Estoy muy bien!",
          direccion: "CABA 456"          
        }

        try {
          let respuesta = await this.axios.put(this.urlUsuarios+id, usuario, {'content-type':'application/json'})
          console.log('AXIOS PUT',respuesta.data)

          //this.getUsuarios()
          let user = respuesta.data

          //this.getUsuarios()

          //https://www.w3schools.com/jsref/jsref_splice.asp
          let indice = this.usuarios.findIndex(usuario => usuario.id == user.id)
          this.usuarios.splice(indice,1,user)
        }
        catch(error) {
          console.log(error)
        }

      },
      /* --------------------------------------- */
      /*           API REST -> DELETE            */
      /* --------------------------------------- */
      async deleteUsuario(id) {
        console.log('deleteUsuario',id)

        try {
          let respuesta = await this.axios.delete(this.urlUsuarios+id)
          console.log('AXIOS DELETE',respuesta.data)
          let user = respuesta.data

          //this.getUsuarios()

          //https://www.w3schools.com/jsref/jsref_splice.asp
          let indice = this.usuarios.findIndex(usuario => usuario.id == user.id)
          this.usuarios.splice(indice,1)          
        }
        catch(error) {
          console.log(error)
        }        
      }

    },
    computed: {

    }
}

</script>

<style scoped lang="css">
.src-components-api-rest-full {
}
.jumbotron {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,2989d8+50,207cca+51,7db9e8+100;Blue+Gloss+Default */
    background: #1e5799; /* Old browsers */
    background: -moz-linear-gradient(top,  #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
    color:#092f4e
}
hr{
  background-color: #333;
}
</style>
