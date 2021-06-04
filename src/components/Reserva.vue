<template >

  <section class="src-components-reserva">
    <div class="jumbotron">
      <!-- <h1></h1> -->
      <img class="logo" src="../assets/ort.png" alt="">
      <!-- <hr> -->

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
          <div >
         <h1>Reserva Tu Vuelo</h1>
         <div class="cont">
   

        <input type="radio"  id="ida" name="gender" value="ida">
			<label for="ida">Ida y Vuelta</label>
			<input type="radio"  id="female" name="gender" value="female">
			<label for="female">Solo Ida</label>
        </div>
        <br>
        <div class="container">
          <label>ORIGEN:   </label>
          <select id="Origen" name="Origen" placeholder='' v-model.trim="f.Origen.valor" >
            <option id="O_BUE" >Buenos Aires</option>
            <option id="O_JUJ" >Jujuy</option>
            <option id="O_MDZ" >Mendoza</option>
            <option id="O_NQN" >Neuquen</option>
            <option id="O_MSN" >Misiones</option>
          </select>
          <label>DESTINO:</label>
          <select id="Destino" name="Destino" v-model.trim="f.Destino.valor" >
            <option id="D_BUE" >Buenos Aires</option>
            <option id="D_JUJ" >Jujuy</option>
            <option id="D_MDZ" >Mendoza</option>
            <option id="D_NQN" >Neuquen</option>
            <option id="D_MSN" >Misiones</option>
          </select>
        <br>         
        <br>         
        </div>
        <div class="container">
            <input type="hidden" id="txtFechaHoy" name="txtFechaHoy" value="2020-11-9">
            <p>Feha de Partida</p>
            <input type="date" id="Partida" name="Partida" v-model="f.Partida.valor">
            <p>Feha de Regreso</p>
            <input type="date" id="Regreso" v-model="f.Regreso.valor">
            <br>
            <input type="text" id="Nombre" name="Nombre" class="gui-input" placeholder="Nombre del Pasajero" v-model="f.Nombre.valor">
            <br>
            <input type="text" id="Apellido" name="Apellido"  placeholder="Apellido del Pasajero" v-model="f.Apellido.valor">
            <br>
            <!-- <input type="button"  class="btn btn-info" value=" Buscar Vuelos"  onclick="buscar_vuelos();"> -->
          </div>
      </div>
          <!-- ------------ -->
          <!-- BOTÓN ENVÍO  -->
          <!-- ------------ -->
          <div class="form-group">
                <input type="submit" class="btn btn-info mt-4" @click="reservar()" value="Reservar" >
          </div>
          <br>
          <!-- <button class="btn btn-warning mr-3" @click="getDatosForm()">Editar Reservas</button> -->
          <button class="btn btn-warning mr-3" @click="ir()">Editar Reservas</button>
      </form>

      <pre>{{this.reserva}}</pre>

      <!-- ------------------------------Datos del Formulario------------------------------------- -->

        <!-- <div class="media alert alert-info mt-3" v-for="(usuario,index) in usuarios" :key="index">
          <img :src="usuario.Foto" width="280" :alt="usuario.Nombre" :style="{'border-radius': '20px'}">
          <div class="media-body ml-4">
            <h4><u>Usuario {{ index+1 }} - ID: {{usuario.id}}</u></h4>
            <br>
            <p>Nombre: <b>{{usuario.Nombre}}</b></p>
            <p>Apellido: <i>{{usuario.Apellido}}</i></p>
            <p>Origen: {{usuario.Origen}}</p>
            <p>Destino: {{usuario.Destino}}</p>
            <p>Fecha de Partida: {{convertirFmtFyh(usuario.Partida)}}</p>
            <p>Fecha de Regreso: {{convertirFmtFyh(usuario.Regreso)}} </p>  -->

            <!-- <p>Dirección: <i><u>{{usuario.direccion}}</u></i> - <b>{{usuario.coordenadas}}</b></p> -->

            <!-- <button class="btn btn-warning mr-3" @click="putUsuario(usuario.id)">PUT</button>
            <button class="btn btn-danger mr-3" @click="deleteUsuario(usuario.id)">DELETE</button> -->

         <!-- </div>
        </div> -->


       



     
    </div>
    
  </section>

  

</template>

<script lang="js">

  export default  {
    name: 'src-components-reserva',
    props: [],
    mounted () {
       // this.getDatosForm()
    },
    data () {
      return {
        //url : 'https://5f9965b350d84900163b8978.mockapi.io/Reserva',
        url : 'https://60a6c74ab970910017eb25e0.mockapi.io/Reserva/',
        usuarios:[],
        f:this.resetForm(),
        reserva:{
                Origen: '',
                Destino: '',
                Partida: '',
                Regreso: '',
                Nombre: '',
                Apellido: ''
        }
      }
    },
    methods: {
      convertirFmtFyh(fyh) {
        return new Date(fyh).toLocaleString()
      },
      /* Envio de datos del formulario al backend */
       
       sendDatosForm(datos) {
            fetch(this.url, {
                method: 'post',
                body: JSON.stringify(datos),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
            .then(json => console.log(json))
        },

        /* Pedido de datos almacenados en el backend */
        /*
        getDatosForm() {
            fetch(this.url)
            .then(response => response.json())
            .then(json => console.log(json))
        },
        */
        
         async getDatosForm(){
           console.log('getDatosForm')
           try {
             let respuesta = await this.axios(this.url)
             console.log('AXIOS GET',respuesta.data)
             this.usuarios = respuesta.data
           } catch (error) {
             console.log(error)
           }
         },

        /* Submit del form */
        enviar() {
            console.log(this.f)
            this.sendDatosForm({
                Origen: this.f.Origen.valor,
                Destino: this.f.Destino.valor,
                Partida: this.f.Partida.valor,
                Regreso: this.f.Regreso.valor,
                Nombre: this.f.Nombre.valor,
                Apellido: this.f.Apellido.valor
            })
            this.f = this.resetForm()
        },
        
        /* valor inicial de los campos de datos del formulario */
        resetForm() {
            return {
               Origen: { valor: '', dirty: false },
               Destino: { valor: '', dirty: false },
               Partida: { valor: '', dirty: false },
               Regreso: { valor: '', dirty: false },
               Nombre: { valor: '', dirty: false },
               Apellido: { valor: '', dirty: false }
            }
        },

        ir(){
          this.$router.push({
            path:'/apiRestFull'
          })
        }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-reserva {
  }

  /*
  .jumbotron{
    background-color: rgb(30, 30, 175);
    color: white;
  }
  hr {
    background-color: #ddd;
  }
  */ 
  /* Estilos de la imagen de fondo */
  .jumbotron{
	/* background-image:url(../assets/avion.jpg); */
  background-image: url(../assets/avion.jpg);
	/*100% del ancho de la ventana y  100% del alto de lña ventana*/
	background-size: 100vw  100vh; 
	/* background-attachment: fixed; */
  position:relative;
	margin: 0; 
	color: #ffff;
}
.main img{

    max-width: 100%;
}
.logo{
    width: 135px;
    height: 50px;
}
.contenedor{
    width: 100%;
	margin: auto;
 
}

/* Estilos de Formulario */
form{
	width: 450px;
	margin: auto;
	background: rgba(0,0,0,0.3);
	padding: 10px 20px;
	box-sizing: border-box;
	margin-top: 28px;
	/*redondear las puntas*/
	border-radius: 7px;
}
p{
  text-align: left;
}

h2 {
	background: #31384a;
	color: #fff;
	text-align: center;
	margin: 0;
	font-size: 30px;
	margin-bottom: 20px;
}

.cont{
	font-size: 20px;
	color:#fff;
	display: flex;
	padding: 5px;
} 

.cont2{
	color: #fff;
	padding: 25px;
}

input, textarea{
	width: 100%;
	margin-bottom: 20px;
	padding: 7px;
	box-sizing: border-box;
	font-size: 17px;
	border: none;
}


#boton{
	background: #31384a;
	color: #fff;
	padding: 20px;
}

#boton:hover{
	cursor: pointer;
}

</style>
