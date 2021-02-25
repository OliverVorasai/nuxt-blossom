<template>
  <div>
    <angled-border
      :color="$vuetify.theme.themes.light.lightBlue"
      invert-x
      invert-y
    ></angled-border>
    <v-footer absolute app>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" md="8">
            <v-row justify="center" class="my-2 mb-6" no-gutters>
              <v-col cols="12" md="6" class="mb-12 mb-md-0">
                <v-row no-gutters>
                  <nuxt-link
                    to="/"
                    aria-label="home"
                    class="mx-auto mx-md-0 mr-md-auto"
                    exact
                  >
                    <v-img
                      :src="require('~/assets/logo.svg')"
                      max-width="300px"
                      max-height="60px"
                      contain
                      eager
                    ></v-img>
                  </nuxt-link>
                </v-row>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-center text-md-right">
                  <h2 class="navigation-header">Navigation</h2>
                  <v-divider
                    class="navigation-divider mx-auto mx-md-0 ml-md-auto"
                  ></v-divider>
                  <ul>
                    <li>
                      <nuxt-link to="/how-it-works/timeline-non-profit">
                        How It Works - Non-Profit
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/how-it-works/timeline-small-business">
                        How It Works - Small Business
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/contact">Contact Us</nuxt-link>
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
              <span class="text-h6 font-weight-light">
                Blossom Web Designs | Copyright &copy;
                {{ new Date().getFullYear() }}
              </span>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<style scoped lang="scss">
.v-footer {
  position: relative;
  background-color: $lightBlue !important;
}

.navigation-header {
  color: $darkRed;
}
.navigation-divider {
  max-width: 200px;
  border-color: $darkRed;
  margin-top: 5px;
  margin-bottom: 5px;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    padding-bottom: 0.5em;
  }
  a {
    text-decoration: none;
    font-size: 0.875em;
    color: black;
  }
}
</style>
