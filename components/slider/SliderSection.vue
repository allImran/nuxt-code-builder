<template>
  <div>
    <v-row>
      <v-col cols="4" justify="center" align="right">
        <Slider :svgList="rightList" />
      </v-col>
      <v-col
        cols="4"
        justify="center"
        align="center"
        class="align-self-center text-center"
      >
        <div class="display-1 primary--text">
          We are here to help as
        </div>
            
        <client-only>
          <vue-typer
            :text="[
              'Arya Stark',
              'Jon Snow',
              'Daenerys Targaryen',
              'Melisandre',
              'Tyrion Lannister',
            ]"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="100"
            :type-delay="100"
            :pre-erase-delay="4000"
            :erase-delay="100"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="blink">
          </vue-typer>
        </client-only>
      </v-col>
      <v-col cols="4" justify="center" align="left">
        <Slider :svgList="leftList" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Slider from './Slider'

export default {
  components: {
    Slider,
  },
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      rightList: [
        '/img/slider/welcome-1.svg',
        '/img/slider/design-1.svg',
        '/img/slider/mobile-1.svg',
      ],
      leftList: [
        '/img/slider/welcome-2.svg',
        '/img/slider/design-2.svg',
        '/img/slider/mobile-2.svg',
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
