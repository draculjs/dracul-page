<template>
<div>
     <select v-model="language" name="selectLanguage" class="blue" id="language"> 
         <option value="en">English</option>
         <option value="es">Español</option>
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