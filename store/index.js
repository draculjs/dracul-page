export const state = () => ({
    language: "es"
  })
  
export const mutations = {
    setLanguage(state,value){
        state.language = value
        this.$i18n.locale= value
    }
  }

