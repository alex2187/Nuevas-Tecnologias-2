import Vue from 'vue'
import VueRouter from 'vue-router'

//import Binding from './components/Binding.vue'
import Login from './components/Login.vue'
import Reserva from './components/Reserva.vue'
import Vuelos from './components/Vuelos.vue'
import ApiRestFull from './components/ApiRestFull.vue'
import Inicio from './components/Inicio.vue'






Vue.use(VueRouter)

export  const router = new VueRouter({
    mode:'history',
    routes:[
        
        //{path:'/', redirect: '/binding'},
        {path:'/login', component:Login},
        {path:'/vuelos', component:Vuelos},
        {path:'/reserva', component:Reserva},
        {path:'/apiRestFull', component:ApiRestFull},
        {path:'/inicio', component:Inicio}



    ]
})