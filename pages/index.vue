<template>
  <div>
    <div class="mt-6">
      <SliderSection />
      <HomeIntro/>
      <ProjectSection />
      <PricingSection />
      <!-- <BlogSection /> -->
      <ServiceSection />
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
