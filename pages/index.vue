<template>
  <v-container fluid pa-0>
    <v-row
      class="mt-6"
      justify-md="start"
      justify-sm="center"
      justify-lg="end"
      align-md="start"
      align-sm="center"
      align-lg="end"
    >
      <v-col
        xl="4"
        lg="4"
        md="9"
        sm="10"
        cols="auto"
      >Choose our web design services, and your business can count on 100 percent transparency. From our personalized quotes to our initial designs, our team provides your company with complete access to our web design pricing and strategies.</v-col>
      <v-col
        xl="4"
        lg="4"
        md="9"
        sm="10"
        cols="auto"
      >You can also include additional features as a part of your professional website design. For example, you can request our developers to integrate a database into your design, enable ecommerce functionality, and more.</v-col>
      <v-col
        xl="4"
        lg="4"
        md="9"
        sm="10"
        cols="auto"
      >If you’re looking to launch your redesigned or brand-new website fast, we offer rapid web design services. Partner with our award-winning team of web designers for this service, and they’ll create a site in 30 days for your business.</v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import progressBar from '~/components/progressBar.vue'
import ProductCard from '~/components/ProductCard.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    progressBar,
    ProductCard,
  },
}
</script>
