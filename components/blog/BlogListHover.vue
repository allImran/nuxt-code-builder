<template>
 <v-hover v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-img
          :aspect-ratio="3/3"
          :src="item.url"
          class="align-end"
        >
          
          <v-expand-transition>
            <div
              v-if="hover"
              class="transition-fast-in-fast-out blue-grey darken-4 v-card--reveal white--text"
              style="height: 100%; z-index:9"
            >
              <v-card-subtitle class="pb-0 white--text">Number 10 | Coading | 12 minuts read</v-card-subtitle>
              <v-card-title class="headline">{{item.title}}</v-card-title>
              
               <v-card-text>
                <div><span class=""> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</span> </div>
              </v-card-text>
              <v-card-actions>
                  <v-btn
                    left
                    absolute
                    bottom
                    color="#fff"
                    text
                  >
                    Read More
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn
                    right
                    absolute
                    bottom
                    icon
                    @click="show = !show"
                  >
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </v-card-actions>
            </div>
          </v-expand-transition>
          
          <v-card-text >
            <div class="overlay">
                <div :class="[{displayNone:hover}, flex]">
                  <v-card-title class="text-h3 mb-5 pt-0 card-blog-title">{{ item.title }}</v-card-title>
                  <v-card-subtitle class="card-blog-subtitle">Number 10 | Coading | 12 minuts read</v-card-subtitle>
                </div>
            </div>
        </v-card-text>
        
        </v-img>
        
      </v-card>
    </v-hover>
</template>
<script>
export default {
    data () {
      return {
          flex: 'd-flex flex-column justify-end full-height'
      }
    },
    props: {
      item: {
        required: true
      }
    }
}
</script>
<style lang="scss" scoped>
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}

</style>