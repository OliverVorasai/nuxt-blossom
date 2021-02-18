<template>
  <div>
    <h2>{{ explanation.title }}</h2>
    <nuxt-content :document="explanation"></nuxt-content>
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
