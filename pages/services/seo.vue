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
                    SEO
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
          <div class="text-h4 py-3">SEO SERVICE</div>
          <div class="text-subtitle-1 py-2">
            Our cutting-edge, targeted solutions help you attract the right customers, convert leads and grow your business. How do you know your marketing program is efficient and cost-effective? We create measurable marketing campaigns — tracking every click, every call, every lead — so you know that your advertising dollars are working hard to bring you more business.
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
          <div class="text-h4 py-3">INTERNET MARKETING</div>
          <div class="text-subtitle-1 py-2">
            The first and most important step of any online business is making sure you have the right keywords to build your whole foundation upon.Without knowing the right search terms for your niche, all the optimization in the world wouldn’t help you rank higher or get more traffic. So we start there, first! Of course, you can’t just throw a bunch of words on a page and expect people to come running. Pro SEO article writing services know that if you build it, they will come… but only if you build it the right way. 
          </div>
        </v-col>
      </v-row>
      <v-row justify-lg="space-around" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">WEBSITES WILL DRIVE LEADS</div>
          <div class="text-subtitle-1 py-2">
            Drawing on our experience as the best Internet marketing company around, we build websites on a foundation of SEO best practices — keyword research and strategy, site map, internal links, content, title tags and more — to improve your ability to generate high-quality traffic and sales leads.
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >Specialized lead generation websites
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >Custom responsive websites
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >Get a mobile-friendly website before your competition
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >Quality content created by professional copywriters
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >Improved Google results
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <v-img src="/img/single_service/support.svg" contain></v-img>
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
