<template>
  <div>
    <v-row
      v-if="explanation.image && imageAbove"
      justify="center"
      align="center"
      class="my-6"
    >
      <img :src="explanation.image" width="85" />
    </v-row>
    <v-row justify="center">
      <h2
        class="explanation-title"
        :class="uppercaseTitle ? 'text-uppercase' : ''"
      >
        {{ explanation.title }}
      </h2>
    </v-row>
    <v-row
      v-if="explanation.image && !imageAbove"
      justify="center"
      align="center"
      class="mt-4 mb-6"
    >
      <span>-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;</span>
      <img :src="explanation.image" width="35" />
      <span>&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-</span>
    </v-row>
    <nuxt-content :document="explanation" class="text-h6"></nuxt-content>
  </div>
</template>

<script>
export default {
  props: {
    explanations: {
      type: Array,
      required: true,
      default: () => [],
    },
    explanationId: {
      type: String,
      required: true,
      default: () => '',
    },
    uppercaseTitle: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    imageAbove: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  computed: {
    explanation() {
      return this.explanations.find((obj) => {
        return obj.id === this.explanationId
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.explanation-title {
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    font-size: 1.5rem;
  }
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    font-size: 2.5rem;
  }
}

::v-deep .nuxt-content {
  font-display: swap;
  font-weight: 300;
}
</style>
