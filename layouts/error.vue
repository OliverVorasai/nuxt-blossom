<template>
  <div>
    <hero :hero-img-path="heroImage.image" hero-text="Page Not Found"></hero>
    <v-container>
      <v-row justify="center" align="center" class="mt-6">
        <v-col v-if="error.statusCode === 404" cols="12">
          <v-card max-width="400" class="pa-6 mx-auto" elevation="12">
            <v-img
              :src="require('@/assets/404.svg')"
              max-height="400"
              max-width="400"
              contain
            ></v-img>
            <v-card-text class="test--primary text-h6 text-center">
              <span v-if="error.message">
                {{ error.message }}
              </span>
              <span v-else>
                {{ pageNotFoundMessage }}
              </span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="mx-auto"
                :color="$vuetify.theme.themes.light.darkRed"
                to="/"
                nuxt
                exact
                dark
                depressed
                >Return Home</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-else cols="12">
          {{ otherError }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      pageNotFoundMessage: "We're sorry, that page does not seem to exist.",
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  computed: {
    heroImage() {
      return this.$store.state.heroImages.find((obj) => {
        return obj.id === 'hero-cherry-blossom-1'
      })
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
