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
        <v-divider class="nav-drawer-divider"></v-divider>
        <template v-for="item in items">
          <!-- Dropdown menu for How It Works timelines -->
          <v-list-group
            v-if="item.subMenu"
            :key="item.title"
            v-model="item.active"
            color="white"
            no-action
            :prepend-icon="item.icon"
            :append-icon="mdiChevronDown"
            eager
          >
            <template #activator>
              <v-list-item-content>
                <v-list-item-title
                  ckass="white--text"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="subLink in item.subMenu"
              :key="subLink.title"
              :to="subLink.to"
              router
              nuxt
            >
              <v-list-item-content>
                <v-list-item-title
                  class="white--text"
                  v-text="subLink.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.title" :to="item.to" router nuxt exact>
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
        </template>
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
                <v-row justify="center">
                  <v-col cols="12">
                    <nuxt-link
                      to="/"
                      aria-label="home"
                      class="d-sm-inline-block"
                      exact
                    >
                      <v-img
                        :src="require('~/assets/logo.svg')"
                        max-height="60px"
                        contain
                        eager
                      ></v-img>
                    </nuxt-link>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="2" class="hidden-sm-and-down"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="pb-0">
      <nuxt />
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import {
  mdiHomeOutline,
  mdiMenu,
  mdiHelpCircleOutline,
  mdiEmailOutline,
  mdiChevronDown,
} from '@mdi/js'

export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: mdiHomeOutline,
          title: 'Home',
          to: '/',
        },
        {
          icon: mdiHelpCircleOutline,
          title: 'How It Works',
          to: '/how-it-works',
          active: true,
          subMenu: [
            {
              title: 'Non-Profit',
              to: '/how-it-works/timeline-non-profit',
            },
            {
              title: 'Small Business',
              to: '/how-it-works/timeline-small-business',
            },
          ],
        },
        {
          icon: mdiEmailOutline,
          title: 'Contact Us',
          to: '/contact',
        },
      ],
      mdiMenu,
      mdiChevronDown,
    }
  },
}
</script>

<style scoped lang="scss">
.nav-drawer {
  max-height: 100% !important;
  background-image: linear-gradient($lightRed, $darkPink);
}
.nav-drawer-divider {
  border-color: white !important;
}
</style>
