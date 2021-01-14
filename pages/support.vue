<template>
<container> 
    <v-card height="300px" elevation="0"  class="transparent" >
        <v-img src="https://www.airtract.com/Content/images/something-wrong.png" height="250px" contain class="pb-0 align-center"></v-img>
    </v-card>
    <v-card max-width="80%" class="d-flex transparent mx-auto" elevation="0">
        <v-card-text class="">
          <p class="title" >
           {{$t("support.title")}}
          </p>
          <div class="">
           {{$t("support.subtitle")}}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
          href="https://github.com/draculjs/modular-framework"
            target="_blank"
            class=""
            width="120px"
            color="primary"
          >
           <v-icon class="mr-3">mdi-github</v-icon>
           Github
          </v-btn>
          <v-btn
            href="https://www.npmjs.com/search?q=%40dracul"
            target="_blank"
            class=""
            width="120px"
            color="primary"
          >
          <v-icon class="mr-3">mdi-cloud-download</v-icon>
           NPM
          </v-btn>
        </v-card-actions>
      </v-card>
</container>
</template>
<style >
.container{
  margin: 0px;  
  padding: 0px;
  max-width: 100%;
  background-color: rgba(58, 55, 55, 0.137);
}
</style>
