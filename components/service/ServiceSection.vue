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
            v-for="(item, i) in items"
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
          artist:
            'Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.Responsive web design is an approach to web design. ',
        },
        {
          color: '#1f7087a8',
          src: 'img/service/seo.svg',
          title: 'SEO',
          artist:
            'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.',
        },
        {
          color: '#880e4fb8',
          src: 'img/service/website.svg',
          title: 'Website',
          artist:
            'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.',
        },
        {
          color: '#880e4fb8',
          src: 'img/service/website.svg',
          title: 'Website',
          artist:
            'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.',
        },
        {
          color: '#1f7087a8',
          src: 'img/service/seo.svg',
          title: 'SEO',
          artist:
            'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.',
        },
        {
          color: '#880e4fb8',
          src: 'img/service/website.svg',
          title: 'Website',
          artist:
            'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.',
        },
      ],
    }
  },
}
</script>