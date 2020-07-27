<template>
  <v-container fluid pa-0>
    <SubTitle :text="subTitle" />
    <Title :text="title" />

    <v-row class="justify-center align-center">
      <template v-for="(plan, index) in plans">
        <v-hover v-slot:default="{ hover }" :key="index">
          <v-col xl="4" md="4" sm="6" cols="12">
            <BlogComponent
              
            />
          </v-col>
        </v-hover>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import Title from '@/components/Title'
import SubTitle from '@/components/SubTitle'
import BlogComponent from '@/components/blog/BlogComponent'
export default {
    components: {BlogComponent},
    data () {
        return {
            title: 'read our latest news',
            subTitle: 'blog',
            plans: [1,2,3]
        }
    }
}
</script>