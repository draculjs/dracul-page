<template>
  <v-app :dark="dark">
    <navigation-drawer></navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-row> 
      <v-col cols="2" class="d-flex justify-center" >
        <v-btn height="50px" elevation="0" class="secondary" :to="pages.home.to">
        <v-img    
        contain
        :to="pages.home.to"
        src="/logos/dracul.svg"
        height="50px"
        width="200px">
        </v-img>
      </v-btn>  
      </v-col>
      <v-col cols="1" class="d-flex justify-center mt-4" >
        <v-card
        elevation="0"
        class="transparent"
        >
          <a class="transparent font" href="/support">
            v1.0.1
          </a>
        </v-card>
      </v-col>
      <v-col cols="6" class="d-flex justify-space-around">
      <v-btn
      :to="pages.docs.to"
        icon>
      {{$t("layout.docs")}}
      </v-btn>
      <v-btn
      :to="pages.modules.to"
        icon>
      {{$t("layout.modules")}}
      </v-btn>
      <v-btn
      :to="pages.team.to"
        icon>
      {{$t("layout.team")}}
      </v-btn>
      <v-btn
      :to="pages.support.to"
        icon>
      {{$t("layout.support")}}
      </v-btn>
      </v-col>
      <v-col cols="2">
      <v-text-field
        class="text-red"
        label= "Search"
        dark
        flat
        background-color="secondary"
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      >{{$t("layout.search")}}</v-text-field>
      </v-col>
      <v-col cols="1" class="d-flex justify-space-around align-center">
      <languageSelect ></languageSelect>
      </v-col>
    </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      class="pa-0"
      color= "secondary"
    >
    <v-container class="mt-0 secondary maxw">
      <v-row >
        <v-col cols="4">
          <v-card class="transparent" elevation="0">
            <v-card-title primary-title class="justify-center">
              <div>
                <h3 width="auto" class="headline mb-0 text-center">{{$t("footer.title1")}}</h3>
                <ul>
                <li>{{$t('footer.subtitle11')}}</li>
                <li>{{$t('footer.subtitle12')}}</li>
                <li>{{$t('footer.subtitle13')}}</li>
                </ul>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
        <v-card class="transparent" elevation="0">
            <v-card-title primary-title class="justify-center">
              <div>
                <h3 width="auto" class="headline mb-0 text-center">{{$t('footer.title2')}}</h3>
                <ul>
                <li>{{$t("footer.subtitle21")}}</li>
                <li>{{$t("footer.subtitle22")}}</li>
                <li>{{$t("footer.subtitle23")}}</li>
                </ul>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="transparent" elevation="0">
            <v-card-title primary-title class="justify-center">
              <div>
                <h3 class="headline mb-0">{{$t("footer.title3")}}</h3>
                <ul class="pa-0">
                <li>{{$t("footer.subtitle31")}}</li>
                <li>{{$t("footer.subtitle32")}}</li>
                <li>{{$t("footer.subtitle33")}}</li>
                </ul>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-container>
      <span class="ml-2">&copy; 2020 All rights reserved</span>
      <v-switch
      class="ml-5"
      v-model="dark"
      label="Dark mode"
    ></v-switch>
      <v-spacer></v-spacer>
      <span class="mr-2">Dracul software development</span>
    
    </v-footer>
  </v-app>
</template>

<script>
import navigationDrawer from '~/components/navigationDrawer.vue'
import languageSelect from '~/components/languageSelect'

export default {
  components: { navigationDrawer, languageSelect },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      pages: {
        home:{
          to: '/'
        },
        team: {
          to: '/team'
        },
        docs:{
          to: '/docs/installation/general'+'_'+this.$store.getters.getLanguage
        },
        modules:{
          to: '/modulespage'
        },
        support:{
          to: '/support'
        }
      },
      dark: false,
    }
  },
  watch:{
    dark(val){
      this.$vuetify.theme.dark= val;
    }
  }
}
</script>
<style>
.text-red label {
      color: rgb(107, 0, 0) !important;
    }
.font {
  font-family: 'Lucida Grande',;
  text-decoration: none;
}
.maxw{
  max-width: 100%;
}
</style>