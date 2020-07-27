<template>
  <v-container fluid pa-0>
    <v-row
      class="mt-6"
    >
      <PricingSection />
      <BlogSection />
     
    </v-row>
  </v-container>
</template>

<script>
import PricingSection from '@/components/pricing/PricingSection'
import BlogSection from '@/components/blog/BlogSection'

export default {
  name: 'home-page',
  components: {
    PricingSection,
    BlogSection
  },
}
</script>
