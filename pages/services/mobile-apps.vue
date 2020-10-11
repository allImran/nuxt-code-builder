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
                    MOBILE APPLICATION 
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
          <div class="text-h4 py-3">MOBILE APPLICATION SERVICES</div>
          <div class="text-subtitle-1 py-2">
            We have perfected the art of iOS and Android applications. Our highly accomplished and professionally trained iOS, Android developers, and designers make sure we deliver crisp, top-notch mobile applications. We understand the importance of graphic design on mobile applications so we make sure every app we work on is visually stunning, easy to use and can be utilized by a broad range of audiences.

          </div>
          <div class="text-subtitle-1 py-2">
            We develop visually pleasing apps that are optimized to swiftly grow your global business revenue. Listening to your users to uncover opportunity and turn your target market into customers and customers into fans. Good design is good design, and good code is good code. Being good at what we do allow us to working across multiple verticals and and industries with ease.
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="5">
          <v-img src="/img/single_service/startup.svg" contain></v-img>
        </v-col>
      </v-row>
      <v-row justify-lg="space-around" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="5">
          <v-img src="/img/single_service/web_dev.svg" contain></v-img>
        </v-col>
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">FLAWLESS EXPERIENCE</div>
          <div class="text-subtitle-1 py-2">
            Mobile development is an ongoing process of a constant, iterative effort to make your product better and better. Devices and technologies through which users interact with your product will change so as your users, their needs and behaviour. Make sure you have the right tools, and battle-tested methodologies to face these challenges. And never stop the process. We work with you to determine the ideal technology stack and design experience for your web, mobile, or cloud-based solution. We also ensure it is supported and maintained well after launch.
          </div>
        </v-col>
      </v-row>
      <v-row justify-lg="space-around" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">TECHNOLOGIES INVOLVE</div>
          <div class="text-subtitle-1 py-2">
            There are multiple mobile app technologies that are widely used for a specific platform or for cross-platform app development. The two major programming languages we largely used for mobile app development are –
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >REACT NATIVE
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >FLUTTER
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <v-img src="/img/single_service/support.svg" contain></v-img>
        </v-col>
      </v-row>
      <v-row justify-lg="space-between" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="5" align-self="center">
          <v-img src="/img/single_service/success.svg" contain></v-img>
        </v-col>
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">NATIVE LANGUAGES</div>
          <div class="text-subtitle-1 py-2">
            We make sure to use the latest badass technologies there is and have rich experience in developing and designing high performance, scalable, and secure apps that are compatible with larger screens and higher resolutions on iPads and Android tablets.
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >C++
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >JAVA
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >SWIFT
          </div>
          <div class="text-subtitle-1 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >PHP
          </div>
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
