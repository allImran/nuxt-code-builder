<template>
  <v-container fluid pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />

    <v-row class="justify-center align-center">
      <v-col
        v-for="(plan, index) in plans"
        :key="index"
        :data-aos="plan.slide"
        data-aos-duration="1500"
        xl="4"
        md="4"
        sm="6"
        cols="12"
      >
        <BlogComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Title from '@/components/Title'
import SubTitle from '@/components/SubTitle'
import BlogComponent from '@/components/blog/BlogComponent'
export default {
  components: { BlogComponent },
  data() {
    return {
      title: 'read our latest news',
      subTitle: 'blog',
      plans: [
        { id: 1, slide: 'slide-right' },
        { id: 2, slide: 'slide-up' },
        { id: 3, slide: 'slide-left' },
      ],
    }
  },
}
</script>
