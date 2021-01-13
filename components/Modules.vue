<template>
    <v-row class="d-flex flex-wrap wrap justify-space-around">
    <v-card class="justify-center transparent elevation-0 align-center mt-10 pa-5" width="100%">
      <v-card-title primary-title class=" justify-center">
        <div>
          <p class="section">{{$t("modules.title")}}</p>
        </div>
      </v-card-title>
    </v-card>
    <v-card class="d-flex justify-start flex-column align-center ma-2 transparent elevation-0" height="400px" max-width="30%" width="29%">
      <v-card class="mt-5 transparent elevation-0">
      <v-img src="/modules/user.png" contain height="100px"></v-img>      
      </v-card>
        <v-card-text class="mb-auto black--text">
          <h3 class="headline mb-5 text-center">{{$t("modules.userModuleTitle")}}</h3>
          <p class="justified" >{{$t("modules.userModuleDescription")}}</p>
        </v-card-text>
      <v-card-actions>
        <v-btn nuxt :to="docs.user"  color="primary">{{$t("modules.moreInfo")}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="d-flex justify-start flex-column align-center ma-2 transparent elevation-0" height="400px" max-width="30%" width="29%">
      <v-card class="mt-5 transparent elevation-0">
      <v-img src="/modules/personalization.jpg" contain height="100px"></v-img>      
      </v-card>
      <v-card-text class="mb-auto black--text">
          <h3 class="headline mb-5 text-center">{{$t("modules.customizeModuleTitle")}}</h3>
          <p class="justified">{{$t("modules.customizeModuleDescription")}}</p>
        </v-card-text>
      <v-card-actions >
        <v-btn nuxt :to="docs.customization" color="primary">{{$t("modules.moreInfo")}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="d-flex justify-start flex-column align-center ma-2 transparent elevation-0" height="400px" max-width="30%" width="29%">
      <v-card class="mt-5 transparent elevation-0">
      <v-img src="/modules/common.png" contain height="100px"></v-img>      
      </v-card>
      <v-card-text class="mb-auto black--text">
          <h3 class="headline mb-5 text-center">{{$t("modules.commonModuleTitle")}}</h3>
          <p class="justified">{{$t("modules.commonModuleDescription")}}</p>
        </v-card-text>
      <v-card-actions>
        <v-btn nuxt :to="docs.common" color="primary">{{$t("modules.moreInfo")}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="d-flex justify-start flex-column align-center ma-2 transparent elevation-0" height="400px" max-width="30%" width="29%">
      <v-card class="mt-5 transparent elevation-0">
      <v-img src="/modules/queue.png" contain height="100px"></v-img>      
      </v-card>
      <v-card-text class="mb-auto black--text">
          <h3 class="headline mb-5 text-center">{{$t("modules.queueModuleTitle")}}</h3>
          <p class="justified" >{{$t("modules.queueModuleDescription")}}</p>
        </v-card-text>
      <v-card-actions>
        <v-btn nuxt :to="docs.queue"  color="primary">{{$t("modules.moreInfo")}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="d-flex justify-start flex-column align-center ma-2 transparent elevation-0" height="400px" max-width="30%" width="29%">
      <v-card class="mt-5 transparent elevation-0">
      <v-img src="/modules/Multimedia.png" contain height="100px"></v-img>      
      </v-card>
      <v-card-text class="mb-auto black--text">
          <h3 class="headline mb-5 text-center">{{$t("modules.mediaModuleTitle")}}</h3>
          <p class="justified">{{$t("modules.mediaModuleDescription")}}</p>
        </v-card-text>
      <v-card-actions>
        <v-btn nuxt :to="docs.multimedia"  color="primary">{{$t("modules.moreInfo")}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="d-flex justify-start flex-column align-center ma-2 transparent elevation-0" height="400px" max-width="30%" width="29%">
      <v-card class="mt-5 transparent elevation-0">
      <v-img src="/modules/notification.png" contain height="100px"></v-img>      
      </v-card>
      <v-card-text class="mb-auto black--text">
          <h3 class="headline mb-5 text-center">{{$t("modules.notificationModuleTitle")}}</h3>
          <p class="justified">{{$t("modules.notificationModuleDescription")}}</p>
        </v-card-text>
      <v-card-actions>
        <v-btn nuxt :to="docs.notification" color="primary">{{$t("modules.moreInfo")}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="d-flex justify-start flex-column align-center ma-2 transparent elevation-0" height="400px" max-width="30%" width="29%">
      <v-card class="mt-5 transparent elevation-0">
      <v-img src="/modules/logger.png" contain height="100px"></v-img>      
      </v-card>
      <v-card-text class="mb-auto black--text">
          <h3 class="headline mb-5 text-center">{{$t("modules.loggerModuleTitle")}}</h3>
          <p class="justified">{{$t("modules.loggerModuleDescription")}}</p>
        </v-card-text>
      <v-card-actions>
        <v-btn nuxt :to="docs.logger" color="primary">{{$t("modules.moreInfo")}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<script>
export default {
    name: "modules",
    data () {
      return {
        docs :{
          user: '/docs/docFrontend/user'+'_'+this.$store.getters.getLanguage ,
          notification:'/docs/docFrontend/notification'+'_'+this.$store.getters.getLanguage,
          common: '/docs/docFrontend/common'+'_'+this.$store.getters.getLanguage,
          logger: '/docs/docFrontend/logger'+'_'+this.$store.getters.getLanguage,
          customization: '/docs/docFrontend/customization'+'_'+this.$store.getters.getLanguage,
          queue: '/docs/docBackend/queue'+'_'+this.$store.getters.getLanguage,
          multimedia: '/docs/docFrontend/multimedia'+'_'+this.$store.getters.getLanguage
        }
      }
    }
}
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
  text-align: justify;
  text-justify: distribute;
}
</style>