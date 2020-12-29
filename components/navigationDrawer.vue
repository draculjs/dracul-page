<template>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
    <v-list>
        <v-list-item
          v-for="(menus, i) in docsList.menu"
          :key="i"
          :to="menus.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ menus.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="menus.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
      <v-list-group
        v-for="doc in docsList.docs"
        :key="doc.title"
        v-model="doc.active"
        :prepend-icon="doc.icon"
        no-action
        router
        exact
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="doc.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in doc.items"
          :key="child.title"
          :to="child.to"
        >
          <v-list-item-content>
            <v-list-item-title  v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
</template>
<script>
import docsList from './../layouts/docsList'

export default {  
    name: "navigationDrawer",
    data () {
        return{
        clipped: true,
        drawer: true,
        fixed: true,
        docsList,
        dark: false,
        }
    }
}
</script>