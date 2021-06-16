<template >
  <section class="src-components-origen-destino">
    <div class="jumbotron">

      <img class="logo" src="../assets/ort.png" alt="" />


      <div class="form">

        <h2>Origen</h2>
        <input type="text" placeholder="Ingrese Codigo de Origen" v-model="orig.codOrigen.valor"/>
        <br />
        <input type="text" placeholder="Descripcion " v-model="orig.descripcion.valor"/>
        <br />
        <button type="button" class="btn btn-info" @click="guardarOrigen()"> Guardar </button>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Codigo</th>
              <th scope="col">Descricion del Origen</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="(orig, index) in origen" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ orig.codOrigen }}</td>
              <td>{{ orig.descripcion }}</td>
              <button class="btn btn-outline-danger" @click="borrarOrigen(orig.id)"> DELETE </button>
            </tr>
          </tbody>
        </table>
        <hr>

        <h2>Destino</h2>
        <input  type="text" placeholder="Ingrese Codigo del Destino" v-model="dest.codDestino.valor"/>
        <br />
        <input type="text"  placeholder="Descripcion"  v-model="dest.descripcion.valor"/>
        <br />
        <button type="button" class="btn btn-info" @click="guardarDestino()">Guardar</button>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Codigo</th>
              <th scope="col">Descricion del Destino</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="(dest, index) in destinos" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ dest.codDestino }}</td>
              <td>{{ dest.descripcion }}</td>
              <button class="btn btn-outline-danger" @click="borrarDestino(dest.id)">DELETE</button>
            </tr>
          </tbody>
        </table>
        
      </div>

    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-origen-destino',
    props: [],
    mounted () {
      this.getDestinosAxios(),
      this.getOrigenAxios()    
    },
    data () {
      return {
        orig: this.resetOrigen(),
        dest: this.resetDestino(),
        destinos: [ ],
        origen: [ ],
        nombre: "",
        urlDestino : 'https://5f9965b350d84900163b8978.mockapi.io/destino',
        urlOrigen : 'https://5f9965b350d84900163b8978.mockapi.io/origen',
      }
    },
    methods: {
      getOrigenAxios() {
        let url = 'https://5f9965b350d84900163b8978.mockapi.io/origen';

        this.axios(url)
        .then(res => {
          console.log(res.data)
          this.origen = res.data
        })
        .catch(error => console.log('HTTP GET ERROR', error))
    
    },

    getDestinosAxios() {
        let url = 'https://5f9965b350d84900163b8978.mockapi.io/destino';

        this.axios(url)
        .then(res => {
          console.log(res.data)
          this.destinos = res.data
        })
        .catch(error => console.log('HTTP GET ERROR', error))
    
    },
    borrarDestino( id ) {
      this.axios.delete('https://5f9965b350d84900163b8978.mockapi.io/destino/'+id )
          .then(res => {
            let dest = res.data
            console.log(dest)
            let offset = this.destinos.findIndex(dest => dest.id == id)
            this.destinos.splice(offset,1)
          })
          .catch(error => console.log('HTTP DELETE ERROR', error))
    },
    borrarOrigen(id) {
      
      this.axios.delete('https://5f9965b350d84900163b8978.mockapi.io/origen/'+id )
          .then(res => {
            let orig = res.data
            console.log(orig)
            let offset = this.origen.findIndex(orig => orig.id == id)
            this.origen.splice(offset,1)
          })
          .catch(error => console.log('HTTP DELETE ERROR', error))
    },
    guardarDatosOrg(datos) {
        fetch(this.urlOrigen, {
            method: 'post',
            body: JSON.stringify(datos),
            headers: {'content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => { this.origen.push(json) })
        
    },
    guardarDatosDest(datos) {
        fetch(this.urlDestino, {
            method: 'post',
            body: JSON.stringify(datos),
            headers: {'content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => { this.destinos.push(json) })
        
    },
    guardarOrigen() {
        //this.origen.push(this.orig)
        this.guardarDatosOrg({
            codOrigen: this.orig.codOrigen.valor,
            descripcion: this.orig.descripcion.valor
        })
        this.orig = this.resetOrigen()
        
    },
    guardarDestino() {
        
        this.guardarDatosDest({
            codDestino: this.dest.codDestino.valor,
            descripcion: this.dest.descripcion.valor
        })
        this.dest = this.resetDestino()
        
    },
    
    resetOrigen() {
      return {
          //id: { valor: '', dirty: false },
          codOrigen: { valor: '', dirty: false },
          descripcion: { valor: '', dirty: false }
      }
    },
    resetDestino() {
      return {
          //id: { valor: '', dirty: false },
          codDestino: { valor: '', dirty: false },
          descripcion: { valor: '', dirty: false }
      }
    },
    agregarAlumno() {
      let alumno = {
        nombre: "Cecilia",
        apellido: "Perez",
        edad: 29,
        curso: false,
        foto:
          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png",
      };

      this.alumnos.push(alumno);
    },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-origen-destino {
}
.jumbotron {
  background-image: url(../assets/Jujuy.jpg);
  background-size: 100vw 100vh;
  position: relative;
  margin: 0;
  color: rgb(243, 248, 250);
}
.form {
  color:white;
  width: 450px;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 28px;
  /*redondear las puntas*/
  border-radius: 7px;
  
}
.table{
  color: beige;
}

h2 {
  font-family: "Latin Modern Roman 10";
  font-style: oblique;
  font-size: 40px;
}

/* .table td, .table th {
        vertical-align: middle;
    } */
li {
  color: rgb(240, 240, 247);
}
</style>
