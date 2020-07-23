<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <div class="text-center">
          <logo />
          <vuetify-logo />
        </div>
        <v-card elevation="6" class="py-6">
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template code builder
          </v-card-title>
          <v-card-text>
            <p>
              Vuetify is a progressive Material Design component framework for
              Vue.js. It was designed to empower developers to create amazing
              applications.
            </p>
            <p>
              For more information on Vuetify, check out the
              <a
                href="https://vuetifyjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                documentation </a
              >.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire">
              Continue
            </v-btn>
            <v-btn color="secondary" nuxt to="/inspire">
              Continue
            </v-btn>
            <v-btn color="accent" nuxt to="/inspire">
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-alert
                type="success"
                close-label="close"
                dismissible
                transition="slide-x-transition"
                shaped
              >
                I'm a success alert.
              </v-alert>
              <v-alert
                type="info"
                close-label="close"
                dismissible
                transition="slide-x-transition"
                shaped
              >
                I'm an info alert.
              </v-alert>

              <v-alert
                type="warning"
                close-label="close"
                dismissible
                transition="slide-x-transition"
                shaped
              >
                I'm a warning alert.
              </v-alert>

              <v-alert
                type="error"
                close-label="close"
                dismissible
                transition="slide-x-transition"
                shaped
              >
                I'm an error alert.
              </v-alert>
            </v-col>
          </v-row>
        </v-container>
        <progressBar />
        <ProductCard class="mt-8" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import progressBar from '~/components/progressBar.vue'
import ProductCard from '~/components/ProductCard.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    progressBar,
    ProductCard,
  },
}
</script>
