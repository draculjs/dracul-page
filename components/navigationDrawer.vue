<template>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      color="secondary"
      app
      floating
      permanent
    >
    <v-list>
        <v-list-item
          v-for="(menus, i) in docsList.menu"
          :key="i"
          :to="menus.to"
          router
          exact
        >
          <v-list-item-action class="mx-2">
            <v-icon>{{ menus.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$t('sidemenu.'+menus.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
      <v-list-group
        v-for="doc in docsList.docs"
        :key="doc.title"
        v-model="doc.active"
        no-action
        router
        exact
      >
        <template v-slot:activator>
          <v-list-item-action class="mx-2">
            <v-icon>{{ doc.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="ml-0">
            <v-list-item-title>{{$t('sidemenu.'+doc.title) }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in doc.items"
          :key="child.title"
          :to="child.to"
        >
          <v-list-item-content>
            <v-list-item-title >{{$t('sidemenu.'+child.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
</template>
<script>

export default {  
    name: "navigationDrawer",
    computed:{
      docsList(){
        return {
         menu :[
        {
            icon: 'mdi-home',
            title: 'Home',
            to: '/'
        },
        {
            icon: 'mdi-application-import',
            title: 'Installation',
            to: '/docs/installation/general'+'_'+this.$store.getters.getLanguage
        },
        ],
        docs :[
        {
          icon: 'mdi-account-multiple',
          title: 'User',
          items:[
            {
                title: "DocsFrontend",
                to: '/docs/docFrontend/user'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsBackend",
                to: '/docs/docBackend/user'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsEnv",
                to: '/docs/enviroment/user'+'_'+this.$store.getters.getLanguage
            }            
            ],
            active: false,
        },
        {
            icon: 'mdi-bell-alert',
            title: 'Notification',
            items:[
              {
                title: "DocsFrontend",
                to: '/docs/docFrontend/notification'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsBackend",
                to: '/docs/docBackend/notification'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsEnv",
                to: '/docs/enviroment/notification'+'_'+this.$store.getters.getLanguage
            }
              ],
              active: false,
          },
        {
            icon: 'mdi-view-module',
            title: 'Common',
            items:[
              {
                title: "Documentation",
                to: '/docs/docFrontend/common'+'_'+this.$store.getters.getLanguage
            }
              ],
              active: false,
          },
          {
            icon: 'mdi-clipboard-text',
            title: 'Logger',
            items:[
              {
                title: "DocsFrontend",
                to: '/docs/docFrontend/logger'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsBackend",
                to: '/docs/docBackend/logger'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsEnv",
                to: '/docs/enviroment/logger'+'_'+this.$store.getters.getLanguage
            }
              ],
              active: false,
          },
          {
            icon: 'mdi-palette',
            title: 'Customization',
            items:[
              {
                title: "DocsFrontend",
                to: '/docs/docFrontend/customization'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsBackend",
                to: '/docs/docBackend/customization'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsEnv",
                to: '/docs/enviroment/customization'+'_'+this.$store.getters.getLanguage
            }
              ],
              active: false,
          },
          {
            icon: 'mdi-human-queue',
            title: 'Queue',
            items:[              
              {
                  title: "DocsBackend",
                  to: '/docs/docBackend/queue'+'_'+this.$store.getters.getLanguage
              },
              {
                  title: "DocStatsFrontend",
                  to: '/docs/docFrontend/queue-stats'+'_'+this.$store.getters.getLanguage
              },
              {
                  title: "DocStatsBackend",
                  to: '/docs/docBackend/queue-stats'+'_'+this.$store.getters.getLanguage
              }
              ],
              active: false,
          },
          {
            icon: 'mdi-play-network',
            title: 'Multimedia',
            items:[
              {
                title: "DocsFrontend",
                to: '/docs/docFrontend/multimedia'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsBackend",
                to: '/docs/docBackend/multimedia'+'_'+this.$store.getters.getLanguage
            },
            {
                title: "DocsEnv",
                to: '/docs/enviroment/multimedia'+'_'+this.$store.getters.getLanguage
            }
              ],
              active: false,
          }
      ]
}
      }
    },
    data () {
        return{
        clipped: true,
        drawer: true,
        fixed: true,  
        dark: false,
        }
    }
}
</script>