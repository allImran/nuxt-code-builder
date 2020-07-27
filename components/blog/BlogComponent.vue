<template>
    <v-card
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
          @click="show = !show"
        >
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
        </div>
      </v-expand-transition>
    </v-card>
</template>