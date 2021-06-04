<template>
  <section class="src-components-inicio">

    <!-- todo el baner y decripcion de ciudades -->
    <div class="banner"> 
        <img src="../assets/baner.jpg" alt="" title="" >
         <div class="contenedor">
        <h1 class="banner__titulo">ORT AIRLINE</h1>
        <p class="banner__txt">"Bienvenido abordo"</p>
        </div>
    </div>
   
    <main class="main">
        
             <section class="info">
                <div class="contenedor">
                    <article class="info__columna">
                      <img src="../assets/buenosAires.jpg" alt="" class="info__img">
                      <h2 class="info__titulo">Buenos Aires</h2>
                      <p class="info__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </article>

                    <article class="info__columna">
                      <img src="../assets/cordoba.jpg" alt="" class="info__img">
                      <h2 class="info__titulo">Cordoba</h2>
                      <p class="info__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </article>

                    <article class="info__columna">
                      <img src="../assets/Jujuy.jpg" alt="" class="info__img">
                      <h2 class="info__titulo">Jujuy</h2>
                      <p class="info__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </article>
                    
                </div>
          </section>
    </main>

    <!---------------------------- Contacto----------------------------- -->
    <div class="body">
    <div class="content" id="contact">

        <h1 class="logo">Contactanos<span></span></h1>

        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
                <h3>Contacta con Nosotros</h3>
                <form action="">
                    <p>
                        <label>Nombre Completo</label>
                        <input type="text" name="fullname">
                    </p>
                    <p>
                        <label>Email </label>
                        <input type="email" name="email">
                    </p>
                    <p>
                        <label>Numero de Telefono</label>
                        <input type="tel" name="phone">
                    </p>
                    <p>
                        <label>Asunto</label>
                        <input type="text" name="affair">
                    </p>
                    <p class="block">
                       <label>Mensaje</label> 
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p class="block">
                        <button>
                            Enviar
                        </button>
                    </p>
                </form>
            </div>
            <div class="contac-info">
                <h4>Mas Sobre Nosotros</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i>Yatay 240-Buenos Aires</li>
                    <li><i class="fas fa-phone"></i> (011) 4958-9000</li>
                    <li><i class="fas fa-envelope-open-text"></i> ortairline@ort.edu.com</li>
                </ul>
                <p>Lorem ipsumdolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                <p>Company</p>
            </div>
        </div>

    </div>
    </div>

    <!-- -------------------Pie de Pagina-------------------- -->

      <footer class="footer">
         <div class="social">
            <img src="../assets/icono1.png" alt="" title="" >
             <img src="../assets/icono2.png" alt="" title="" >
             <img src="../assets/icono3.png" alt="" title="" >
             </div>
         <p class="copy">&copy; Todos los derechos reservados a Ort Airline | 2020</p>
      </footer>


  </section>
</template>


<script>
export default {
  name: 'src-components-reserva'
  /* props: {
    msg: String
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.info .contenedor{
    display: flex;
    justify-content: space-between;
}
.banner img{
    width: 100%;
   
}
.banner {
   position: relative;
   font-size: 90px;
		
}
.banner .contenedor{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 90px;  
    font-size: 36px;
		
}

h1{
  font-family: "Brush Script Mt";
  font-size: 90px;

}
/*-------Estilos de Info------*/
.info{
    background: #333;
    color: #fff;
    text-align: center;
     margin-top: -50px; 
    
}
.info__img{
    width: 300px;
    height: 220px;
    margin-left: 50px;
    border-style: double;
    border-radius: 50%;
    border-width: 5px;
    position: relative;
    display: inline-block;
    
    
}
.info__txt{
    text-align: justify;
    padding: 15px;
    
}


/* ----------- Estilos del contacto-------- */
.body {
    background: #181818;
    color: #fff;
    line-height: 1.6;
    font-family: 'Quicksand', sans-serif;
    padding: 0 4em;
}
.container {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5em;
}

ul {
    list-style: none;
    padding: 0;
}

.logo {
    text-align: center;
    font-size: 3em;
}

.logo span {
    color: #B70E21;
}

.contact-wrapper {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, .3);
}

.contact-wrapper > * {
    padding: 2em;
    grid-template-columns: 2fr 1fr;
}

.contact-form {
    background: #222222;
}

.contact-form form {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contact-form form label {
    display: block;
}

.contact-form form p {
    margin: 0;
    padding: 1em;
}

.contact-form form .block {
    grid-column: 1 / 3;
}

.contact-form form button,
.contact-form form input,
.contact-form form textarea {
    width: 100%;
    padding: .7em;
    border: none;
    background: none;
    outline: 0;
    color: #fff;
    border-bottom: 1px solid #d63031;
}

.contact-form form button {
    background: #B70E21;
    border: 0;
    text-transform: uppercase;
    padding: 1em;
}

.contact-form form button:hover,
.contact-form form button:focus {
    background: #d63031;
    color: #fff;
    transition: background-color 1s ease-out;
    outline: 0;
}

/* CONTACT INFO */
.contact-info {
    background: #000;
    text-align: left;
}

.contact-info h4, .contact-info ul, .contact-info p {
    text-align: center;
    
}
/*--------Estilos del footer--------*/
.footer{
    background: #26272E;
    color: #fff;
    padding: 10px;
    text-align: center;
}
.footer img{
    width: 50px;
  
    margin-right: 10px;

}
 

 



</style>
