import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      language: "es"   
    },
    getters: {
      getLanguage(state){
        return state.language
      }
    },
    mutations: {
      setLanguage(state,value){
        state.language = value
        this.$i18n.locale= value
    }
    }
  })
}

export default createStore