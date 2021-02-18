<template>
  <v-card class="text-center mx-auto pb-12" width="400">
    <v-card-title class="justify-center">{{ pricePackage.title }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text
      ><span class="text-h3">${{ pricePackage.price }}</span
      ><span class="text-h5">/MO</span></v-card-text
    >
    <v-row justify="center">
      <v-col cols="10" md="8">
        <v-list class="text-left">
          <v-list-item
            v-for="(feature, index) in pricePackage.features"
            :key="index"
          >
            <v-list-item-icon>
              <v-icon>{{ mdiCheckCircleOutline }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ feature }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-btn class="mt-6" to="contact" nuxt large>Contact Us</v-btn>
  </v-card>
</template>

<script>
import { mdiCheckCircleOutline } from '@mdi/js'

export default {
  props: {
    packages: {
      type: Array,
      required: true,
      default: () => [],
    },
    packageId: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  data() {
    return {
      mdiCheckCircleOutline,
    }
  },
  computed: {
    pricePackage() {
      return this.packages.find((obj) => {
        return obj.id === this.packageId
      })
    },
  },
}
</script>

<style scoped>
.v-list-item__title {
  white-space: normal;
}
</style>
