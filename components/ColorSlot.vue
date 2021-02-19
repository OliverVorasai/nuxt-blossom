<!-- Use slot to overcome margins -->
<template>
  <div class="color-slot-container" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      default: () => '#000000',
    },
  },
  computed: {
    styles() {
      return { '--color': this.color }
    },
  },
}
</script>

<style scoped>
.color-slot-container {
  background-color: var(--color);
}
</style>
