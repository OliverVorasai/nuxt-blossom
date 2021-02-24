<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      app
      temporary
      class="nav-drawer"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title white--text"
              >Blossom Web Designs</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          router
          nuxt
          exact
        >
          <v-list-item-icon>
            <v-icon color="white" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
              v-text="item.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar height="90px" color="transparent" absolute flat app>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" xl="10">
            <v-row>
              <v-col cols="2" align-self="center">
                <v-app-bar-nav-icon
                  aria-label="Show side navigation"
                  @click.stop="drawer = !drawer"
                >
                  <v-icon> {{ mdiMenu }} </v-icon>
                </v-app-bar-nav-icon>
              </v-col>
              <v-col cols="10" md="8" class="text-center">
                <v-img
                  :src="require('~/assets/logo.svg')"
                  max-height="60px"
                  contain
                  eager
                ></v-img>
              </v-col>
              <v-col cols="2" class="hidden-sm-and-down"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import { mdiHome, mdiMenu, mdiHelpCircleOutline } from '@mdi/js'

export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: mdiHome,
          title: 'Home',
          to: '/',
        },
        {
          icon: mdiHelpCircleOutline,
          title: 'How It Works',
          to: 'how-it-works',
        },
      ],
      mdiMenu,
    }
  },
}
</script>

<style scoped lang="scss">
.nav-drawer {
  max-height: 100% !important;
  background-image: linear-gradient($lightRed, $darkPink);
}
</style>
