<template>
  <v-container class="mx-0 pa-0" max-width="100%" mx-0 pa-0>
    <div>
      <v-container class="mx-0 pa-0" max-width="100%" mx-0 pa-0>
        <v-row  class="mb-12 grey darken-1 "> 
          <v-col class="pato pb-0" cols="12">
            <v-img src="/team/nuestroeq.svg" height="350px" contain class="pb-0 align-center">
                <div>
                <h2 class="text-center white--text" >
                    {{$t("teams.ourTeam1")}}</h2>
                <h2 class="text-center white--text" >
                    {{$t("teams.ourTeam2")}}
                </h2>
                </div>
            </v-img>  
          </v-col>
        </v-row>
        </v-container>
    </div>
    <div class="mx-16">
        <v-container  class="d-flex flex-wrap justify-space-around secondary" max-width="80%" elevation-2 >
            <v-card class="secondary text-center ma-10 text-h4 my-5" width="100%" elevation="0" >
            {{$t("teams.team")}}</v-card>
            <v-card
            elevation="0"
            width="300px" 
            height="auto"
            class="d-flex flex-column flex-wrap pa-5 align-center ma-5 secondary"
            v-for="(member, i) in team"
            :key="i">
                <v-card-media
                  name
                  contain
                  height="auto"
                >
                  <v-avatar
                height="150px"
                width="150px"
                >
                    <img
                        :src="member.img"
                        alt="John"
                    >
                </v-avatar>
                </v-card-media>
                <v-card-title class="text-h5">
                    {{member.name}}
                </v-card-title>
                <v-card-text class="text-center text-h6" >
                    {{member.position}}
                </v-card-text>
                <v-card-subtitle>
                    <a :href='member.github' target="_blank">
                    <v-icon>mdi-github
                    </v-icon></a>
                </v-card-subtitle>
            </v-card>
        </v-container>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Lujan Rojas',
          img: '/team/lujan.jpeg',
          position: 'Fullstack developer',
          github:'https://github.com/DraCaster'
        },
        {
          name: 'Cristian Incarnato',
          img: '/team/CristianIncarnato.jpeg',
          position: 'Fullstack developer',
          github:'https://github.com/cincarnato'
        },
        {
          name: 'Luciano Capraro',
          img: '/team/luciano.jpg',
          position: 'Fullstack developer',
          github:'https://github.com/luchoCap'
        },
        {
          name: 'Carolina Romero',
          img: '/team/CarolinaRomero.jpeg',
          position: 'Fullstack developer',
          github:'https://github.com/romerocaroe'
        },
        {
          name: 'Alexis Rodriguez',
          img: '/team/alexis.jpeg',
          position: 'Fullstack developer',
          github:'https://github.com/alexek-r'
        },
        {
          name: 'Joaquin Iglesias',
          img: '/team/joaco.jpeg',
          position: 'Fullstack developer',
          github:'https://github.com/georgeoi'
        }
      ],
    }
  }
}
</script>
<style >
.container{
  margin: 0px;  
  padding: 0px;
  max-width: 100%;
  background-color: rgba(58, 55, 55, 0.137);
}
</style>