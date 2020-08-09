<template>
  <v-container fluid pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />

    <v-row class="justify-center align-center" no-gutters data-aos="fade-in">
      <template v-for="(plan, index) in plans">
        <v-hover v-slot:default="{ hover }" :key="index">
          <v-col cols="auto" sm="7" lg="auto" :data-aos="plan.slide" data-aos-duration="1500">
            <PricingTable
              :height="plan.height"
              :plan="plan"
              class="price-table"
              :class="[{ 'on-hover': hover }, { 'front-table': index == 1 }]"
              :hover="hover"
            />
          </v-col>
        </v-hover>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import Title from '@/components/Title'
import SubTitle from '@/components/SubTitle'
import PricingTable from '@/components/pricing/PricingTable'
export default {
  name: 'pricing-section',
  data() {
    return {
      title: 'best solution for out clients',
      subTitle: 'Pricing plans',
      pricing: ['450px', '500px', '450px'],
      plans: [
        {
          title: 'Landing Page',
          price: '200',
          features: ['SEO Audits', 'Fast Reload', 'Responsive ', 'Cool Effect'],
          height: '450px',
          slide: 'flip-right',
        },
        {
          title: 'Professional Website',
          price: '500',
          features: ['SEO Audits', 'Fast Reload', 'Responsive ', 'Cool Effect'],
          height: '500px',
          slide: 'flip-up',
        },
        {
          title: 'Big Apps',
          price: '1000',
          features: ['SEO Audits', 'Fast Reload', 'Responsive ', 'Cool Effect'],
          height: '450px',
          slide: 'flip-left',
        },
      ],
    }
  },
  components: {
    Title,
    SubTitle,
    PricingTable,
  },
}
</script>
<style lang="scss">
.price-table:not(.on-hover) {
  opacity: 0.9;
}
.on-hover {
  z-index: 10;
  background-image: linear-gradient(90deg, #d81b60 0%, #880e4f 100%);
  border-color: #6557e8;
}
.on-hover:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-image: url('https://livewp.site/wp/md/ewebot/wp-content/themes/ewebot/dist/img/pricebox_bg.c3c0bcec.png');
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
.price-table {
  transition: all 0.4s ease-in-out;
}
</style>
