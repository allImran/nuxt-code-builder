<template>
  <v-container fluid pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />
    <!-- <v-row no-gutters class="justify-center align-center">
      <v-col v-for="(plan, index) in plans" :key="index" xl="4" md="4" sm="4" cols="4">
        <ProjectComponent />
      </v-col>
    </v-row>-->
    <vueper-slides :visible-slides="3" slide-multiple :slide-ratio="1 / 4">
      <vueper-slide
        v-for="(plan, i) in plans"
        :key="i"
        :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
      />
      <template v-slot:content>
        <div class="vueperslide__content-wrapper">
          <div class="vueperslide__title">{{ i.toString() }}</div>
          <v-img src="https://picsum.photos/200/300"></v-img>
        </div>
      </template>
    </vueper-slides>
  </v-container>
</template>
<script>
import ProjectComponent from '@/components/project/ProjectComponent'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { ProjectComponent, VueperSlides, VueperSlide },
  data() {
    return {
      title: 'FEATURED PROJECTS',
      subTitle: 'SEE OUR RECENT PROJECTS',
      plans: [
        { id: 1, slide: 'slide-right' },
        { id: 2, slide: 'slide-up' },
        { id: 3, slide: 'slide-left' },
      ],
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              focusOnSelect: true,
            },
          },
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: false,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
