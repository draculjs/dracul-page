<template>
<div>
    <v-icon color="black">mdi-translate</v-icon>
    <select v-model="language" name="selectLanguage" class="grey--text" id="language"> 
         <option value="en">EN</option>
         <option value="es">ES</option>
     </select>
</div>
</template>
<script>
export default {
    name: "languageSelect",
    computed:{
        language:{
            get(){
                return this.$store.state.language
            },
            set(val){
                this.$store.commit('setLanguage', val)
            }
        }
    }
}
</script>