<template>
  <div>
    <!-- Hero Section -->
    <v-container>
      <v-row justify="center" align="center" class="mx-6 mt-12 mt-md-0">
        <v-col cols="12" xl="10">
          <v-row justify="start" align="center">
            <v-col cols="12" md="6">
              <div class="hero-content">
                <h1 class="text-h3 text-sm-h2 text-xl-h1">
                  Web Design for Non-Profit and Small Businesses
                </h1>
                <v-divider class="mt-12"></v-divider>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img :src="require('~/assets/nature.svg')" eager></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- First Blossom Explanation -->
    <angled-border
      :color="$vuetify.theme.themes.light.lightBlue"
      invert-x
    ></angled-border>
    <color-slot :color="$vuetify.theme.themes.light.lightBlue">
      <v-container>
        <v-row justify="center" align="center" class="mx-6">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <explanation
              :explanations="explanations"
              explanation-id="explanation-what-is-blossom"
              :title-color="$vuetify.theme.themes.light.lightRed"
            ></explanation>
          </v-col>
        </v-row>
      </v-container>
    </color-slot>
    <angled-border
      :color="$vuetify.theme.themes.light.lightBlue"
      invert-y
    ></angled-border>
    <!-- Triple Aspect Explanation -->
    <v-container>
      <v-row justify="center" align="center" class="mx-6 mb-12">
        <v-col cols="12" xl="8">
          <v-row justify="center">
            <v-col cols="12" sm="7" lg="4" class="text-center">
              <explanation
                :explanations="explanations"
                explanation-id="explanation-fast-response"
                image-above
              ></explanation>
            </v-col>
            <v-col cols="12" sm="7" lg="4" class="text-center">
              <explanation
                :explanations="explanations"
                explanation-id="explanation-clean-aesthetics"
                image-above
              ></explanation>
            </v-col>
            <v-col cols="12" sm="7" lg="4" class="text-center">
              <explanation
                :explanations="explanations"
                explanation-id="explanation-responsive-design"
                image-above
              ></explanation>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- Price Explanation -->
    <v-container>
      <v-row justify="start" align="center" class="mx-6 mb-12">
        <v-col cols="12" md="6">
          <v-img
            :src="require('~/assets/ticket.svg')"
            max-height="500"
            contain
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <explanation
            :explanations="explanations"
            explanation-id="explanation-low-as-possible-pricing"
            :title-color="$vuetify.theme.themes.light.lightRed"
            :custom-color-one="$vuetify.theme.themes.light.lightRed"
            :custom-color-three="$vuetify.theme.themes.light.lightRed"
          ></explanation>
        </v-col>
      </v-row>
    </v-container>
    <!-- Portfolio Section -->
    <v-container>
      <v-row justify="center" align="center" class="mb-12">
        <v-col cols="12" xl="10">
          <explanation
            :explanations="explanations"
            explanation-id="explanation-portfolio"
          ></explanation>
          <v-row justify="center" align="center" class="mx-sm-6 mx-md-0">
            <v-col cols="12" md="4">
              <portfolio-card
                :portfolios="portfolios"
                portfolio-id="portfolio-nam-quang-temple"
              ></portfolio-card>
            </v-col>
            <v-col cols="12" md="4">
              <portfolio-card
                :portfolios="portfolios"
                portfolio-id="portfolio-zien-hong"
              ></portfolio-card>
            </v-col>
            <v-col cols="12" md="4">
              <portfolio-card
                :portfolios="portfolios"
                portfolio-id="portfolio-scrapmeals"
              ></portfolio-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- Second Blossom Explanation -->
    <angled-border
      :color="$vuetify.theme.themes.light.lightBlue"
      invert-x
      invert-y
    ></angled-border>
    <color-slot :color="$vuetify.theme.themes.light.lightBlue">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <explanation
              :explanations="explanations"
              explanation-id="explanation-blossom-web-design"
              :title-color="$vuetify.theme.themes.light.lightRed"
            ></explanation>
          </v-col>
        </v-row>
      </v-container>
    </color-slot>
    <angled-border
      :color="$vuetify.theme.themes.light.lightBlue"
    ></angled-border>
    <!-- Price Package Section -->
    <v-container>
      <v-row justify="center" align="center" class="mb-12">
        <v-col cols="10" sm="8" md="6" lg="4">
          <price-card
            :packages="packages"
            package-id="package-non-profit"
          ></price-card>
        </v-col>
        <v-col cols="10" sm="8" md="6" lg="4">
          <price-card
            :packages="packages"
            package-id="package-small-business"
          ></price-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const explanations = await $content('explanations').fetch()
    const portfolios = await $content('portfolios').fetch()
    const packages = await $content('packages').fetch()
    return { explanations, portfolios, packages }
  },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'LocalBusiness',
            '@id': 'https://blossomwebdesigns.com',
            name: 'Blossom Web Designs',
            image: require('~/assets/logo.svg'),
            description:
              'Web Design for Non-Profit and Small Businesses. Our websites are made from scratch with the highest quality.',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '09:00',
                closes: '17:00',
              },
            ],
            priceRange: '$0-$100',
            url: 'https://blossomwebdesigns.com',
          },
        },
      ],
      title: 'High Quality Handmade Websites',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Web Design for Non-Profit and Small Businesses. Our websites are made from scratch with the highest quality.',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.hero-content {
  h1 {
    font-display: swap;
    font-family: Newsreader !important;
  }
  .v-divider {
    border-color: $lightPink;
    border-width: 2px;
  }
}
</style>
