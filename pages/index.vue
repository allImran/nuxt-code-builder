<template>
  <div>
    <div class="mt-6">
      <SliderSection />
      <ProjectSection />
      <PricingSection />
      <BlogSection />
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

export default {
  name: 'home-page',
  components: {
    SliderSection,
    PricingSection,
    BlogSection,

    ProjectSection,

    ServiceSection,
  },
}
</script>
