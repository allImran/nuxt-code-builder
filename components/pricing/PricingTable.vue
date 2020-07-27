<template>
  <v-card
    class="pricing-table-bg mx-auto d-flex justify-center align-center flex-column"
    color="#fff"
    dark
    :height="height"
  >
    <v-card-title :class="[ hover ? 'white--text'  : 'primary--text' ]">{{plan.title}}</v-card-title>

    <v-card-text class="text-center">
      <div :class="[ hover ? 'white--text'  : 'primary--text' , 'price']">
        <span>
          <sup>$</sup>
          {{plan.price}}
          <sup>99</sup>
        </span>
      </div>
      <template v-for="(feature,i) in plan.features">
        <div
          :key="i"
          class="pricing-option text-xl-heading-6 text-lg-subtitle-1"
          :class="[ hover ? 'white--text'  : 'primary--text' ]"
        >{{feature}}</div>
      </template>
    </v-card-text>

    <v-card-actions>
      <v-btn large depressed :color="  hover ? 'white' : 'primary'" class="px-5" height="46">
        <div
          class="caption font-weight-bold"
          :class="[ hover ? 'primary--text'  : ' white--text' ]"
        >GET STARTED</div>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
    },
    plan: {
      type: undefined,
    },
    hover: {
      type: Boolean,
    },
  },
}
</script>
<style lang="scss" scoped>
</style>