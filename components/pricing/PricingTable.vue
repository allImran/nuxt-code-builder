<template>
     <v-card
      class="pricing-table-bg mx-auto d-flex justify-center align-center flex-column"
      color="#26c6da"
      dark
      :height="height"
    >
      <v-card-title> Basic Plan </v-card-title>
      
       <v-card-text class="text-center">
         <div class="price"><span><sup>$</sup>140<sup>120</sup></span></div>
         <template v-for="n in 5">
             <div :key="n" class="pricing-option">Whitehaven Beach</div>
         </template>
         
      </v-card-text>
      
      <v-card-actions>
        <v-btn depressed color="error">Start Now</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props:{
        height:{
            type: String
        }
    }
}
</script>