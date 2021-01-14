<template>
 <v-container class="secondary">
  <v-card class="grey darken-2 bg" height="250px" elevation="0"></v-card>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <div class="d-flex justify-center my-12">
       <v-img src="/logos/dracul.svg" contain max-width="600px"></v-img>
      </div>

      <v-card class="mt-12 transparent elevation-0">
        <v-card-text>
          <h1 class="black--text text-center">
          {{$t("homepage.title")}}
          </h1>
        </v-card-text>
        <v-card-text>
          <p class="black--text justified">
            {{$t("homepage.description")}}
            <br><br>
            {{$t("homepage.description2")}}
          </p>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            color="primary"
            width="130px"
            nuxt
            :to="pages.docs.to"
          >
            {{$t("homepage.getStarted")}}
          </v-btn>
          <v-btn
            color="primary"
            width="130px"
            nuxt
            href="https://github.com/draculjs"
            target="_blank"
          >
            GitHub
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-col>
  </v-row>
  <modules></modules>
  <v-row>
    <v-card class="justify-center align-center mt-10 transparent elevation-0" width="100%">
      <v-card-title primary-title class="justify-center">
        <div>
          <h1 class="section ">Stack</h1>
        </div>
      </v-card-title>
      <v-card name class="d-flex transparent elevation-0 justify-space-around align-center wrap my-10">
        <h2>Frontend:</h2>
        <a href="https://www.javascript.com/" target="_blank"><v-img src="/logos/javascript.png" height="120px" contain max-width="120px"></v-img></a>
        <a href="https://vuejs.org/" target="_blank"><v-img src="/logos/Vue.svg.png" height="120px" contain max-width="120px"></v-img></a>
        <a href="https://vuetifyjs.com/en/" target="_blank"><v-img src="/logos/vuetify.png" height="120px" contain max-width="120px"></v-img></a>
        <a href="https://graphql.org/" target="_blank"><v-img src="/logos/graphql.png" height="120px" contain max-width="120px"></v-img></a>
        <a href="https://www.apollographql.com/" target="_blank"><v-img src="/logos/apollo.png" height="120px" contain max-width="120px"></v-img></a>
      </v-card>
      <v-divider></v-divider>
      <v-card name class="d-flex transparent elevation-0 justify-space-around align-center wrap my-10">
        <h2>Backend:</h2>
        <a href="https://www.javascript.com/" target="_blank"><v-img src="/logos/javascript.png" height="120px" contain max-width="120px"></v-img></a>
        <a href="https://nodejs.org/es/" target="_blank"><v-img src="/logos/nodejs.png" height="120px" contain max-width="120px"></v-img></a>
        <v-card class="transparent elevation-0" height="120px"> 
          <a href="https://expressjs.com/es/" target="_blank"><v-img src="/logos/express.png" height="50px"  max-width="120px"></v-img></a>
          <a href="https://mongoosejs.com/" target="_blank"><v-img src="/logos/mongoose.png" height="60px"  max-width="120px"></v-img></a>
        </v-card>
        <a href="https://graphql.org/" target="_blank"><v-img src="/logos/graphql.png" height="120px" contain max-width="120px"></v-img></a>
        <a href="https://www.apollographql.com/" target="_blank"><v-img src="/logos/apollo.png" height="120px" contain max-width="120px"></v-img></a>
      </v-card>
      <v-divider></v-divider>
      <v-card name class="d-flex transparent elevation-0 justify-space-around align-center wrap my-10">
        <h2>Database:</h2>
        <a href="https://www.javascript.com/" target="_blank"><v-img class="" src="/logos/javascript.png" height="120px" contain max-width="120px"></v-img></a>
        <a href="https://www.mongodb.com/es" target="_blank"><v-img class="" src="/logos/MongoDBs.png" height="120px" contain max-width="120px"></v-img></a>
        <v-img src="" height="120px" contain max-width="120px"></v-img>
        <v-img src="" height="120px" contain max-width="120px"></v-img>
        <v-img src="" height="120px" contain max-width="120px"></v-img>
      </v-card>
      <v-divider></v-divider>
    </v-card>
  </v-row>
  <v-row>
    <v-card class="justify-center align-center transparent elevation-0" width="100%">
      <v-card-title primary-title class=" justify-center">
        <div>
          <h1 class="section">Sponsors</h1>
        </div>
      </v-card-title>
      <v-card class="transparent elevation-0">
        <a href="http://www.snd.com.ar/" target="_blank"><v-img class="my-10" src="/logos/sondeos.svg" height="150px" contain></v-img></a>
      </v-card>
    </v-card>
  </v-row>
</v-container>

</template>

<script>

components: {
  modules: () => import('~/components/Modules.vue')
}

export default {
  data () {
    return {
      pages: {
        docs:{
          to: '/docs/installation/general'+'_'+this.$store.getters.getLanguage
        }
}}}}

</script>

<style>
.container{
  margin: 0px;  
  padding: 0px;
  max-width: 100%;
  background-color: rgba(58, 55, 55, 0.137);
}
.section{
  font-size: 70px;
  margin: 20px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight:300;
  color: rgb(94, 15, 15);
}
.justified{
  text-justify: distribute;
  text-align: justify;
}
.bg{
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Bat_shadow_black.svg/1280px-Bat_shadow_black.svg.png") no-repeat center top;
}
</style>