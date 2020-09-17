<template>
  <v-container fluid>
    <SubTitle :text="subTitle" />
    <Title :text="title" />

    <v-row class="justify-center align-center">
      <v-col
        v-for="(plan, index) in plans"
        :key="index"
        lg="4"
        md="8"
        sm="8"
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
  name: 'blog-section',
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
