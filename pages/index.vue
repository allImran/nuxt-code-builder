<template>
  <div>
    <div class="mt-6">
      <SliderSection />
      <div class="spacing"></div>
      <HomeIntro/>
      <div class="spacing"></div>
      <ProjectSection />
      <div class="spacing"></div>
      <PricingSection />
      <div class="spacing"></div>
      <!-- <BlogSection /> -->
      <ServiceSection />
       <div class="spacing"></div>
    </div>
  </div>
</template>

<script>
import SliderSection from '@/components/slider/SliderSection'
import PricingSection from '@/components/pricing/PricingSection'
import BlogSection from '@/components/blog/BlogSection'
import ProjectSection from '@/components/project/ProjectSection'
import ServiceSection from '@/components/service/ServiceSection'
import {setMetadata} from '@/service/metaInfo'
import HomeIntro from '@/components/homeIntro/HomeIntro'

export default {
  name: 'home-page',
  head() {
    return {
      title: this.metaData.title,
      meta: [
        {
          hid: 'description',
          name: this.metaData.description,
          content: 'Home page description'
        }
      ]
    }
  },
  data () {
    return {
      metaData: {},
      title: 'title-title'
    }
  },
  
  created() {
    this.metaData = setMetadata(this.$route.fullPath);
  },
  components: {
    SliderSection,
    HomeIntro,
    PricingSection,
    BlogSection,

    ProjectSection,

    ServiceSection,
  },
}
</script>
<style style="scss">
.spacing{
padding: 2rem 0;
}
</style>
