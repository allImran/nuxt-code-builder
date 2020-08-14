<template>
  <v-container pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />
    <v-row>
      <v-col xl="6" md="6" sm="6" cols="12">
        <div class="elementor-image">
         <img 
            width="613" 
            height="463" 
            src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/09/home_img-01.png" 
            class="attachment-full size-full" 
            alt="" 
            srcset="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/09/home_img-01.png 613w, https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/09/home_img-01-300x227.png 300w" 
            sizes="(max-width: 613px) 100vw, 613px">
        </div>
      </v-col>
      <v-col xl="6" md="6" sm="6" cols="12">
        <v-container>
          <v-row dense>
            <nuxt-link class="service-link" v-for="(item, i) in items" :key="i" to="#">
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
          color: '#880e4fb8',
          src: 'img/service/responsive.svg',
          title: 'Responsive Webdesign',
          artist: 'Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. ',
        },
        {
          color: '#1f7087a8',
          src: 'img/service/seo.svg',
          title: 'SEO',
          artist: 'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.',
        },
        {
          color: '#880e4fb8',
          src: 'img/service/website.svg',
          title: 'Website',
          artist: 'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.',
        },
      ],
    }
  },
}
</script>