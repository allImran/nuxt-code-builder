<template>
  <v-speed-dial icon v-model="fab" bottom right direction="left" open-on-hover scale>
    <template v-slot:activator>
      <v-btn v-model="fab" color="grey" dark icon>
        <v-icon text small v-if="fab">mdi-close</v-icon>
        <v-icon icon small v-else>mdi-share-variant</v-icon>
      </v-btn>
    </template>
    <v-btn icon dark small color="indigo">
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn icon dark small color="green">
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon dark small color="#1867c0">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data: () => ({
    fab: false,
  }),
}
</script>