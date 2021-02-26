<template>
  <div>
    <hero
      :hero-img-path="heroImage.image"
      hero-text="How It Works"
      :sub-text="timeline.title"
    ></hero>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8">
          <v-timeline align-top :dense="$vuetify.breakpoint.mobile">
            <v-timeline-item
              v-for="(event, index) in timeline.events"
              :key="index"
              :icon="(index + 1).toString()"
              :color="$vuetify.theme.themes.light.lightRed"
              large
              fill-dot
            >
              <template #opposite>
                <v-img :src="event.image" max-height="400" contain></v-img>
              </template>
              <v-card
                class="elevation-12"
                :color="$vuetify.theme.themes.light.lightRed"
                dark
              >
                <v-card-title class="headline">{{ event.title }}</v-card-title>
                <v-card-text class="white text--primary pt-2">{{
                  event.body
                }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const timelines = await $content('timelines')
      .where({ id: params.slug })
      .fetch()
    if (timelines.length < 1) {
      error({
        statusCode: 404,
        message: 'Timeline Not Found',
      })
    }
    return { timelines }
  },
  head() {
    return {
      title: 'How It Works',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Learn how we plan and create your website. We want you to know as much as you want before we make your website.',
        },
      ],
    }
  },
  computed: {
    timeline() {
      return this.timelines[0]
    },
    heroImage() {
      return this.$store.state.heroImages.find((obj) => {
        return obj.id === 'hero-cherry-blossom-1'
      })
    },
  },
}
</script>

<style scoped>
.v-card__title {
  word-break: normal;
}
</style>
