<template>
  <span>{{ animatedNumber }}</span>
</template>

<script>
import { TweenLite } from 'gsap/TweenMax';
export default {
  props: ['dynamicNumber'],
  data() {
    return {
      tweenedNumber: 0
    };
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    dynamicNumber: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
};
</script>
