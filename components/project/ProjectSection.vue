<template>
  <v-container fluid pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />
    <v-row no-gutters class="justify-center align-center">
      <VueSlickCarousel v-bind="settings">
        <v-col v-for="(plan, index) in plans" :key="index" xl="12" md="12" sm="12" cols="12">
          <ProjectComponent />
        </v-col>
      </VueSlickCarousel>
    </v-row>
  </v-container>
</template>
<script>
import ProjectComponent from '@/components/project/ProjectComponent'
// import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: { ProjectComponent },
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
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
