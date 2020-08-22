<template>
 <v-hover v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-img
          :aspect-ratio="3/3"
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          class="align-end"
        >
          
          <v-expand-transition>
            
            <div
              v-if="hover"
              class="transition-fast-in-fast-out blue-grey darken-4 v-card--reveal white--text"
              style="height: 100%; z-index:9"
            >
              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
              <v-card-title class="headline">Top 10 Australian beaches</v-card-title>
              
               <v-card-text>
                <div>loreem ipdfdf dk enn vj djd fjdkfjd jkd fjdjfd kkkjkjdfkdjf k dkjf this is o</div>
              </v-card-text>
              <v-card-actions>
                  <v-btn
                    left
                    absolute
                    bottom
                    color="purple"
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
          
          <v-card-text style="width: 100%">
<div class="overlay">
            <div id="mark" :class="[{displayNone:hover}, flex]">
                <!-- <div class="d-flex flex-column justify-end"> -->
                    <v-card-subtitle class="pb-0 white--text">Number 10</v-card-subtitle>
                    <v-card-title class="headline white--text">Top 10 Australian beaches</v-card-title>
                    <v-card-text>
                        <div class="white--text">loreem ipdfdf dk enn vj djd fjdkfjd jkd fjdjfd kkkjkjdfkdjf k dkjf this is o</div>
                    </v-card-text>
                <!-- </div> -->
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
            flex: 'd-flex flex-column justify-end'
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
.displayNone{
  margin-top: -9000px;
}
.overlay{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(12, 0, 0, 0.233);
  top:0;
  left: 0;
}
</style>