<template>
    <v-card-text class="text-center">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 footer-icon-color"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>