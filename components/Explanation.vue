<template>
  <div :style="styles">
    <v-row
      v-if="explanation.image && imageAbove"
      justify="center"
      align="center"
      class="mt-6 mb-2"
    >
      <img
        :src="explanation.image"
        width="85px"
        height="85px"
        aria-hidden="true"
      />
    </v-row>
    <v-row justify="center" class="mb-2">
      <h2
        class="explanation-title text-h4"
        :class="uppercaseTitle ? 'text-uppercase' : ''"
      >
        <span class="title-color">{{ title.first }} </span>{{ title.rest }}
      </h2>
    </v-row>
    <v-row
      v-if="explanation.image && !imageAbove"
      justify="center"
      align="center"
      class="mt-2 mb-6"
    >
      <span>-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;</span>
      <img
        :src="explanation.image"
        width="35px"
        height="35px"
        aria-hidden="true"
      />
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
    titleColor: {
      type: String,
      required: false,
      default: () => '#000000',
    },
    customColorOne: {
      type: String,
      required: false,
      default: () => '#000000',
    },
    customColorTwo: {
      type: String,
      required: false,
      default: () => '#000000',
    },
    customColorThree: {
      type: String,
      required: false,
      default: () => '#000000',
    },
    customColorFour: {
      type: String,
      required: false,
      default: () => '#000000',
    },
  },
  computed: {
    explanation() {
      return this.explanations.find((obj) => {
        return obj.id === this.explanationId
      })
    },
    styles() {
      return {
        '--title-color': this.titleColor,
        '--custom-color-1': this.customColorOne,
        '--custom-color-2': this.customColorTwo,
        '--custom-color-3': this.customColorThree,
        '--custom-color-4': this.customColorFour,
      }
    },
    title() {
      const firstWord = this.explanation.title.split(' ')[0]
      let restOfWord = this.explanation.title.substr(
        this.explanation.title.indexOf(' ') + 1
      )

      if (restOfWord === firstWord) {
        restOfWord = ''
      }

      return {
        first: firstWord,
        rest: restOfWord,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.explanation-title {
  .title-color {
    color: var(--title-color);
  }
}

::v-deep .nuxt-content {
  font-display: swap;
  font-weight: 300;
  .custom-color-1 {
    color: var(--custom-color-1);
  }
  .custom-color-2 {
    color: var(--custom-color-2);
  }
  .custom-color-3 {
    color: var(--custom-color-3);
  }
  .custom-color-4 {
    color: var(--custom-color-4);
  }
}
</style>
