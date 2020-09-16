<template>
  <div>
    <Breadcrumb :title="pageTitle" :breadCrumbData="breadCrumbData" />
    <v-container fluid pa-0>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card flat tile>
            <div class="polygon">
              <v-row no-gutters justify="center" align="center">
                <v-col
                  sm="12"
                  lg="4"
                  xl="3"
                  class="text-center text-sm-center text-lg-left mt-5 mt-sm-10 mt-lg-0"
                >
                  <div class="text-sm-h4 text-lg-h4 text-h6 white--text">We Develop Custom Websites</div>
                  <div
                    class="text-sm-h5 text-lg-h5 text-subtitle-1 white--text"
                  >We ensure best conversions for our clients.</div>
                </v-col>
                <v-col sm="12" lg="5" xl="5" class="pa-8">
                  <v-card color="#d81b60" flat>
                    <v-img src="/img/service_slide.svg" contain></v-img>
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
          <div class="text-h4 py-3">STARTUP-CENTRIC APPROACH</div>
          <div
            class="text-subtitle-1 py-2"
          >In most cases, startups have tight budgets and poor vision of their idea assessment and implementation. They need some small business IT support services to be able to start their commercial operations and initiate profit inflow.</div>
          <div
            class="text-subtitle-1 py-2"
          >DIGIS IT support for startups is targeted to particularly resolve these issues. We can provide individual developers to augment the Client’s project team or fully manned dedicated teams to go ahead with the whole project. For this purpose, we have elaborated and strictly follow our startup-centric approach.</div>
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
          <div class="text-h4 py-3">STARTUP-CENTRIC APPROACH</div>
          <div
            class="text-subtitle-1 py-2"
          >In most cases, startups have tight budgets and poor vision of their idea assessment and implementation. They need some small business IT support services to be able to start their commercial operations and initiate profit inflow.</div>
          <div
            class="text-subtitle-1 py-2"
          >DIGIS IT support for startups is targeted to particularly resolve these issues. We can provide individual developers to augment the Client’s project team or fully manned dedicated teams to go ahead with the whole project. For this purpose, we have elaborated and strictly follow our startup-centric approach.</div>
        </v-col>
      </v-row>
      <v-row justify-lg="space-around" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">STARTUP-CENTRIC APPROACH</div>
          <div
            class="text-subtitle-1 py-2"
          >In most cases, startups have tight budgets and poor vision of their idea assessment and implementation. They need some small business IT support services to be able to start their commercial operations and initiate profit inflow.</div>
          <div class="text-h6 py-2" v-for="n in 8" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon>Origination of the Idea
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
          <div class="text-h4 py-3">STARTUP-CENTRIC APPROACH</div>

          <div class="text-subtitle-1 py-2" v-for="n in 8" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon>The Client picks up the most suitable and appropriate option, and the project kicks off.
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
  .polygon{
    background-color: #d81b60;
    // clip-path: polygon(50% 3%, 100% 0, 100% 60%, 100% 100%, 49% 92%, 0 100%, 0 0);
    clip-path: polygon(50% 0, 100% 9%, 100% 60%, 100% 100%, 50% 90%, 0 100%, 0 9%);
    // clip-path: polygon(50% 0, 100% 5%, 100% 60%, 100% 100%, 50% 100%, 0 100%, 0 5%);
    // clip-path: polygon(50% 0, 100% 9%, 100% 60%, 100% 100%, 50% 100%, 0 100%, 0 9%);
    // clip-path: polygon(50% 0, 100% 9%, 100% 60%, 100% 91%, 50% 100%, 0 91%, 0 9%);
  }
</style>