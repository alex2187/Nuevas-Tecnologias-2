import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        // ejemplo contador:1234

    },
    actions:{
    // Aca van las funciones o metodos ,podemos usar codigo asincronico(llaman a las muatciones con un metodo commit)
        // ejemplo  contarUp({commit},cant){
            //commit('incrementar',cant)
        //}
    },
    mutations:{
    // ejmplo incrementar(state,cant){
        // state.contator += cant
    // }

    }
})
