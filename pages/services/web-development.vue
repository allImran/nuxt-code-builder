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
                    WEB APPICATION
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
          <div class="text-h4 py-3">WEB APPLICATION SERVICES</div>
          <div class="text-subtitle-1 py-2">
            Developing a successful digital product is a complex process that consists of answering the market’s and users’ needs, applying the right tech solutions as well as creating a secure and stable app that provides exceptional user experience. It requires choosing the right partner, applying innovative solutions and following reliable processes. 
          </div>
          <div class="text-subtitle-1 py-2">
            With a proven process and commitment to quality code, we build stable, scalable web applications your customers will love. Fortunately, technologies such as Mobile, Web, Cloud, AI and Big Data have made business software development much more customer-oriented and personalized. Experion helps customers unlock value with focused and participative software development methodologies that incorporate emerging technologies. Our domain focus is an added advantage for us when it comes to supporting our customers through the software lifecycle.
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
          <div class="text-h4 py-3">CROSS PLATFORM</div>
          <div class="text-subtitle-1 py-2">
            We also excel in cross-platform apps, which are a top choice of those, who seek an early entry in the market. As an all in one package, we can create hybrid or cross-platform apps for your business, and then proceed to create native apps when your business takes off. Our wide range of services will ensure you get the best of both worlds, through the early entry, and cost-effective cross-platform app. And if you require native apps, our expert developers would create it in the least possible time in the industry, with a cost that is unmatched across mobile app development firms.
          </div>
          <div class="text-subtitle-1 py-2">
            Our specialists turn web applications into powerful tools to meet clients’ requirements and fulfill end-users' expectations. Custom web development services at we go along with the original style inside the web solution.
          </div>
        </v-col>
      </v-row>
      <v-row justify-lg="space-around" class="my-12 py-6">
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <div class="text-h4 py-3">TECHNOLOGIES INVOLVE</div>
          <div class="text-subtitle-1 py-2">
            Our Frontend developers work with modern technologies including but not limited by following list.We use the latest and greatest technologies which are fast responsive, bug free. Web development starts with a company that you can trust and be sure that your idea is accepted, understood by the team.
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >HTML 5, CSS AND SCSS
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >JAVASCRIPT AND TYPESCRIPT
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >VUE
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" left>mdi-check-circle-outline</v-icon
            >REACT
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
          <div class="text-subtitle-1 py-2">
            For backend we ensure best performace and issue free experience 
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >EXPRESS JS
          </div>
          <div class="text-h6 py-2" v-for="n in 1" :key="n">
            <v-icon color="primary" small left>mdi-checkbox-blank-circle</v-icon
            >LARAVEL
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
