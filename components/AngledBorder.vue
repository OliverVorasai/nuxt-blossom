<template>
  <div class="angled-border-container">
    <div class="angled-border" :style="styles">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invertY: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    invertX: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    color: {
      type: String,
      required: false,
      default: () => '#000000',
    },
  },
  computed: {
    styles() {
      const rotateX = this.invertX ? '180deg' : '0deg'
      const rotateY = this.invertY ? '180deg' : '0deg'

      return {
        '--rotateX': rotateX,
        '--rotateY': rotateY,
        '--color': this.color,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.angled-border-container {
  position: relative;
  height: 150px;
}
.angled-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotateX(var(--rotateX, 180deg)) rotateY(var(--rotateY, 0deg));
}

.angled-border svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.angled-border .shape-fill {
  fill: var(--color);
}
</style>
