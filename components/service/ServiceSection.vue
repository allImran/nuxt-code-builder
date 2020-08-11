<template>
  <v-container pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />
    <v-row>
      <v-col xl="6" md="6" sm="6" cols="12">
        <div class="elementor-image">
          <!-- <img 
                    width="613" 
                    height="463" 
                    src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/09/home_img-01.png" 
                    class="attachment-full size-full" 
                    alt="" 
                    srcset="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/09/home_img-01.png 613w, https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/09/home_img-01-300x227.png 300w" 
          sizes="(max-width: 613px) 100vw, 613px">-->
        </div>
      </v-col>
      <v-col xl="6" md="6" sm="6" cols="12">
        <v-container>
          <v-row dense>
            <nuxt-link v-for="(item, i) in items" :key="i" to="#">
              <Service :item="item" />
            </nuxt-link>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Service from '@/components/service/Service'
export default {
  name: 'service-section',
  components: { Service },
  data() {
    return {
      title: 'What services we provide',
      subTitle: 'services',
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }
  },
}
</script>