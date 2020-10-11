<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      max-width="344"
      class="mx-auto rounded-xl pa-4 transition-fast-in-fast-out"
      :elevation="hover ? 12 : 4"
      :class="{ 'on-hover': hover }"
      :to="item.link"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="headline primary--text"
            v-text="item.title"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-img :src="item.src" contain height="194"></v-img>

      <v-card-text class="secondary--text" v-text="item.artist"></v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'service-component',
  props: {
    item: {
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
</style>