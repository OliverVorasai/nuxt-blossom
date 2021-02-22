<template>
  <v-app>
    <v-app-bar height="90px" color="transparent" absolute flat app>
      <v-row justify="center" align="center">
        <v-col cols="8" sm="12" class="text-center">
          <v-img
            :src="require('~/assets/logo.svg')"
            max-height="60px"
            contain
            eager
          ></v-img>
        </v-col>
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
