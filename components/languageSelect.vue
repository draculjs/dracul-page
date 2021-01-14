<template>
<div class="ma-0 pa-0">
    <!-- <v-icon color="black">mdi-translate</v-icon> -->
    <v-overflow-btn
        class="ma-0 transparent text--secondary v-btn v-btn--icon pa-0"
        nuxt
        height="35px"
        aria-expanded="false"
        :items="languages"
        v-model="language"
        append-icon="mdi-translate"
        dense
        to="/docs/installation/general_es"
        flat
        >
    </v-overflow-btn>
    
    
<!--     
    
    <select v-model="language" name="selectLanguage" class="grey--text" id="language"> 
         <option value="en">EN</option>
         <option value="es">ES</option>
     </select> -->
</div>
</template>
<script>
export default {
    name: "languageSelect",
    data(){
        return{
            languages:["es","en"],
        }
    },
    computed:{
        language:{
            get(){
                return this.$store.state.language
            },
            set(val){
                this.$store.commit('setLanguage', val)
            }
        },
    }
}
</script>