<template >

  <section class="src-components-login">
    <img class="logo" src="../assets/ort.png" alt="">

    <div>
        <form class="formulario" @submit.prevent="login" >
         <!-- <div id="dvMsg"></div> -->
           <h1>Login</h1>
            <div class="cont">
                
              <div class="input-cont">
               <label for="email">
               <!-- <input type="text" id="txtCorreo" name="txtCorreo" placeholder="Correo Electronico"> -->
               <input v-model="email" type="email" id="txtCorreo" name="email" placeholder="Correo Electronico" value>
               </label>
              </div>
            
              <div class="input-cont">
                <label for="password">
                <!-- <input type="password" id="txtContrasenia" name="txtContrasenia" placeholder="Contraseña"> -->
                <input v-model="password" type="password" id="txtContrasenia" name="password" placeholder="Contraseña" value>
                </label>
              </div>
              <!-- <input type="submit" value="Login" class="button" onclick="prueba();"> -->
              <button class="button" type="submit" name="button"> Login </button>
                <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
                <p>¿No tienes una cuenta? <a class="link" href="#">Registrate </a></p>

            </div>
        </form>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-login',
    props: [],
    mounted () {

    },
    data () {
      return {
        email: '',
        password: ''

      }
    },
    methods: {
    login () {
        this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        // .then(() => {
        //   this.$router.push({ name: 'Sistema' })
        // })
    }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-login {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    background: url(../assets/imagen.jpg);
    background-size: cover;
    background-attachment: fixed;
}
.logo{
    width: 135px;
    height: 50px;
}

.cont{
    width: 100%;
    padding: 15px;
}
.formulario{
    background: #fff;
    margin-top: 150px;
    padding: 3px;
}
h1{
    text-align: center;
    color: #1a2537;
    font-size: 40px;
}
input[type="email"],
input[type="password"]{
    font-size: 20px;
    width: 82%;
    padding: 10px;
    border: none;
}
.input-cont{
    margin-bottom: 15px;
    border: 1px solid #aaa;
}
.icon{
    min-width: 50px;
    text-align: center;
    color: #999;
}
.button{
    border: none;
    width: 100%;
    color: white;
    font-size: 20px;
    background:  #1a2537;
    padding: 15px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.button:hover{
    background: cadetblue;
}
p{
    text-align: center;
    color: black;
}
.link{
    text-decoration: none;
      color: #1a2537;
    font-weight: 600;
}
.link:hover{
     color: cadetblue;
}
@media(min-width:768px)
{
    .formulario{
        margin: auto;
        width: 500px;
        margin-top: 150px;
        border-radius: 2%;
    }
}
</style>
