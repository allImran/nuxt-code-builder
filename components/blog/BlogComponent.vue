<template>
    <v-card
      flat
      light
      class="mx-auto" 
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="300px"
      ></v-img>
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        August 2, 2019
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="purple"
          text
        >
          READ MORE
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          
        >
          <!-- <v-icon>mdi-share-variant</v-icon> -->
          <SpeedDial />
        </v-btn>
      </v-card-actions>
  
      
    </v-card>
</template>

<script>
import SpeedDial from '@/components/SpeedDial'
export default {
  components: {SpeedDial}
}
</script>