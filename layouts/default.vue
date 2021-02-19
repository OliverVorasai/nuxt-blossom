<template>
  <v-app>
    <v-app-bar height="90px" color="transparent" absolute flat app>
      <v-row justify="center" align="center">
        <img :src="require('~/assets/logo.svg')" max-height="60px" />
      </v-row>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
    }
  },
}
</script>
