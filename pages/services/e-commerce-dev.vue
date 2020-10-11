<template>
  <div>
    <Breadcrumb :title="pageTitle" :breadCrumbData="breadCrumbData" />
    <v-container fluid pa-0>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card flat tile>
            <div class="curved">
              <v-row no-gutters justify="center" align="center">
                <v-col
                  sm="12"
                  lg="4"
                  xl="3"
                  class="text-center text-sm-center text-lg-left mt-5 mt-sm-10 mt-lg-0"
                >
                  <div class="text-sm-h4 text-lg-h4 text-h6 white--text">
                    E-COMMERCE
                  </div>
                  <div
                    class="text-sm-h5 text-lg-h5 text-subtitle-1 white--text"
                  >
                    WE ENSURE THE BEST CONVERSION FOR OUR CLIENTS
                  </div>
                </v-col>
                <v-col sm="12" lg="5" xl="5" class="pa-8 pa-xl-12">
                  <v-card color="#d81b60" flat>
                    <v-img
                      max-width="600"
                      src="/img/service_slide.svg"
                      contain
                    ></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="max-view">
      <v-row justify-lg="space-around" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">E-COMMERCE</div>
          <div class="text-subtitle-1 py-2">
            The rise of e-commerce has forced IT personnel to move beyond infrastructure design and maintenance to consider numerous customer-facing aspects, such as consumer data privacy and security. When developing IT systems and applications to accommodate e-commerce activities, data governance-related regulatory compliance mandates, personally identifiable information privacy rules and information protection protocols must be considered.
          </div>
          <div class="text-subtitle-1 py-2">
            We work with you to determine the ideal technology stack and design experience for your web, mobile, or cloud-based solution. We also ensure it is supported and maintained well after launch.
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="5">
          <v-img src="/img/single_service/startup.svg" contain></v-img>
        </v-col>
      </v-row>
      <v-row justify-lg="space-around" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <v-img src="/img/single_service/support.svg" contain></v-img>
        </v-col>
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">TECHNOLOGIES INVOLVE</div>
          <div class="text-subtitle-1 py-2">
            Customers shopping a physical store may have a hard time determining which aisle a particular product is in. In e-commerce, visitors can browse product category pages and use the site search feature the find the product immediately.
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >SHOPIFY
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >WORDPRESS
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >CUSTOM BUILD
          </div>
        </v-col>
      </v-row>
      <v-row justify-lg="space-between" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">Mobile e-commerce (m-commerce)</div>
          <div class="text-subtitle-1 py-2">
            See our Mobile Application services page for more info.
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >REACT NATIVE
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >FLUTTER
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >JAVA
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >SWIFT
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="5" align-self="center">
          <v-img src="/img/single_service/success.svg" contain></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'single-service-page',
  data() {
    return {
      pageTitle: 'Services',
      breadCrumbData: [
        { title: 'Home', url: '/' },
        { title: 'Services', url: '/services' },
        { title: 'Seo', url: '/services/1' },
      ],
      sar: {},
    }
  },
}
</script>

<style lang="scss">
.curved {
  position: relative;
  background: #d81b60;
  height: 50vh;
  border-bottom-left-radius: 50% 25% !important;
  border-bottom-right-radius: 50% 25% !important;
}
.polygon {
  background-color: #d81b60;
}
</style>
