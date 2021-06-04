<template >

  <section class="src-components-login">
    <img class="logo" src="../assets/ort.png" alt="">

    <div>
        <form class="formulario" >
        <div id="dvMsg"></div>
        <h1>Login</h1>
        <div class="cont">
                
            <div class="input-cont">
            <i class="fas fa-envelope icon"></i>
            <input type="text" id="txtCorreo" name="txtCorreo" placeholder="Correo Electronico">
            
            </div>
            
            <div class="input-cont">
            <i class="fas fa-key icon"></i>
            <input type="password" id="txtContrasenia" name="txtContrasenia" placeholder="Contraseña">
            
            </div>
            <input type="submit" value="Login" class="button" onclick="prueba();">
            <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
            <p>¿No tienes una cuenta? <a class="link" href="registrarvista.html">Registrate </a></p>
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

      }
    },
    methods: {

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
input[type="text"],
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
