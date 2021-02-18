<template>
  <v-app>
    <v-app-bar absolute flat app> </v-app-bar>
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
