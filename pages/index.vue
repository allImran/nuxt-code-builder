<template>
  <v-container fluid pa-0>
    <v-row
      class="mt-6"
    >
     
      <PricingSection />
     
      
    </v-row>
  </v-container>
</template>

<script>
import PricingSection from '@/components/pricing/PricingSection'

export default {
  name: 'home-page',
  components: {
    PricingSection
  },
}
</script>
