<template>
  <v-container fluid pa-0 class="mb-6">
    <SubTitle :text="subTitle" />
    <Title :text="title" />
    <v-row justify="center">
      <v-col cols="12" sm="12" lg="11" xl="10">
        <v-row dense justify="center">
          <v-col
            cols="12"
            sm="6"
            lg="3"
            v-for="(item, i) in services"
            :key="i"
            class="ma-4"
            data-aos="flip-left"
            data-aos-duration="1500"
          >
            <Service :item="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Service from '@/components/service/Service'
import serviceData from '@/pages/services/service'
export default {
  name: 'service-section',
  components: { Service },
  data() {
    return {
      title: 'What services we provide',
      subTitle: 'services',
      services: serviceData.items,
    }
  },
}
</script>