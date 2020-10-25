<template>
  <v-hover v-slot:default="{ hover }">
    <v-card flat light class="mx-auto">
      <v-img src="/img/service/boi-kotha.png" height="260px">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out primary v-card--reveal display-3 white--text text-center justify-center"
            style="height: 100%;"
          >
            <v-btn outlined dark color="white" class="align-self-center">click here</v-btn>
          </div>
        </v-expand-transition>
      </v-img>
        <v-card-title >Top western road trips</v-card-title>

        <v-card-subtitle >August 2, 2019</v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  components: {},
}
</script>
