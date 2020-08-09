<template>
  <v-container fluid pa-0>
    <v-row class="mt-6">
      <!-- <ProjectSection /> -->
      <PricingSection />
      <BlogSection />
    </v-row>
  </v-container>
</template>

<script>
import PricingSection from '@/components/pricing/PricingSection'
import BlogSection from '@/components/blog/BlogSection'
import ProjectSection from '@/components/project/ProjectSection'

export default {
  name: 'home-page',
  components: {
    PricingSection,
    BlogSection,
    ProjectSection,
  },
}
</script>
