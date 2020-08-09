<template>
  <!-- <v-container fluid >
    <v-row
      class="mt-6"
    > -->
    <div class="mt-6">
      <PricingSection />
      <BlogSection />
      <ServiceSection />
    </div>
    <!-- </v-row>
  </v-container> -->
</template>

<script>
import PricingSection from '@/components/pricing/PricingSection'
import BlogSection from '@/components/blog/BlogSection'
import ServiceSection from '@/components/service/ServiceSection'

export default {
  name: 'home-page',
  components: {
    PricingSection,
    BlogSection,
    ServiceSection
  },
}
</script>
