<template>
  <v-img :src="heroImgPath" height="45vh">
    <div class="mask">
      <v-row justify="center" align="center" class="hero-text" no-gutters>
        <v-col cols="12">
          <h2 class="text-center text-h2 text-md-h1 white--text">
            {{ heroText }}
          </h2>
          <h3 class="text-center text-h4 text-md-h3 white--text">
            {{ subText }}
          </h3>
        </v-col>
      </v-row>
    </div>
  </v-img>
</template>

<script>
export default {
  props: {
    heroImgPath: {
      type: String,
      required: true,
      default: () => '',
    },
    heroText: {
      type: String,
      required: false,
      default: () => '',
    },
    subText: {
      type: String,
      required: false,
      default: () => '',
    },
  },
}
</script>

<style scoped lang="scss">
.mask {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.hero-text {
  height: 100%;
  h2,
  h3 {
    font-family: Newsreader !important;
  }
}
</style>
