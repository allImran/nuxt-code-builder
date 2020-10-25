<template>
  <div class="full-height-center">
  <v-container pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />
    <v-row>
      <template v-for="n in 3">
          <v-col md="4" sm="4">
            <ProjectComponent />
          </v-col>
      </template>
    </v-row>

    <!-- <v-sheet class="mx-auto" elevation="0" max-width="1400">
      <v-slide-group v-model="model" center-active show-arrows>
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'accent'"
            class="ma-4"
            height="300"
            max-width="300"
            @click="toggle"
            elevation="8"
          >
            <v-row class="fill-height" align="center" justify="center">
              <ProjectComponent />
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet> -->
  </v-container>
</div>
</template>
<script>
import ProjectComponent from '@/components/project/ProjectComponent'

export default {
  components: { ProjectComponent },
  data() {
    return {
      model: null,
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
