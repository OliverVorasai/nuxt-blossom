<template>
  <v-card class="portfolio-card px-6 py-12" elevation="12" min-height="600">
    <v-img :src="portfolio.image"></v-img>
    <v-card-title>{{ portfolio.title }}</v-card-title>
    <v-card-subtitle>Launched {{ portfolio.dateString }}</v-card-subtitle>
    <v-card-text class="text--primary text-h6 font-weight-light mb-12">{{
      portfolio.description
    }}</v-card-text>
    <v-card-actions>
      <v-btn :href="portfolio.url" target="_blank" rel="noopener"
        >Visit {{ portfolio.shortTitle }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    portfolios: {
      type: Array,
      required: true,
      default: () => [],
    },
    portfolioId: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  computed: {
    portfolio() {
      const portfolio = this.portfolios.find((obj) => {
        return obj.id === this.portfolioId
      })
      portfolio.dateString = new Date(
        portfolio.launchDate
      ).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      return portfolio
    },
  },
}
</script>

<style scoped lang="scss">
.portfolio-card {
  position: relative;
  .v-card__title {
    word-break: normal;
  }
  .v-card__actions {
    color: red;
    position: absolute;
    bottom: 1em;
    left: 1em;
  }
}
</style>
