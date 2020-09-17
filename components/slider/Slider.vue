<template>
  <div>
    <!-- <p><a @click="prev">Previous</a> || <a @click="next">Next</a></p> -->
    <div v-for="number in [currentNumber]" :key="number" transition="fade">
      <v-img
        class="trans mx-auto"
        :src="svgList[currentNumber]"
        contain
        width="400"
        height="400"
      >
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    svgList: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      img: '',
      currentNumber: 0,
      timer: null,
    }
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 4000)
    },

    next: function () {
      this.currentNumber += 1
      const list = this.svgList.length
      if (this.currentNumber >= list) {
        this.currentNumber = 0
      }
    },
    prev: function () {
      this.currentNumber -= 1
    },
  },
  mounted: function () {
    this.startRotation()
  },
}
</script>

<style lang="scss" scoped>
.fade-transition {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave {
  opacity: 0.6;
  visibility: hidden;
}
</style>
