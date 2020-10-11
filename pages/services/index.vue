<template>
  <div>
    <Breadcrumb :title="pageTitle" :breadCrumbData="breadCrumbData" />
    <v-container fluid pa-0 class="my-6">
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
  </div>
</template>
<script>
import Service from '@/components/service/Service'
import Breadcrumb from '@/components/Breadcrumb'
import { setMetadata } from '@/service/metaInfo'

import serviceData from './service'
export default {
  name: 'service',
  components: { Service, Breadcrumb },
  head() {
    return {
      title: this.metaData.title,
      meta: [
        {
          hid: 'description',
          name: this.metaData.description,
          content: 'Home page description',
        },
      ],
    }
  },
  data() {
    return {
      pageTitle: 'Services',
      breadCrumbData: [
        { title: 'Home', url: '/' },
        { title: 'Services', url: '#' },
      ],
      services: serviceData.items,
    }
  }, // end of data
  created() {
    this.metaData = setMetadata(this.$route.fullPath)
  },
}
</script>