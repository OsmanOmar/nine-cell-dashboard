<template>
  <div class="timer-container">
    <h2>xxx 上线于2015/01/01，上线已有 {{ timePassed }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      past: new Date(2015, 0, 1, 0, 0, 0, 0),
      now: new Date()
    };
  },
  computed: {
    timePassed() {
      let years =
        (this.now.getTime() - this.past.getTime()) /
        (1000 * 60 * 60 * 24 * 365);
      let days = (years - Math.trunc(years)) * 365;

      return `${Math.trunc(years)}年 ${Math.trunc(days)}天 `;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss">
.timer-container {
  h2 {
    font-size: 18px;
  }
}
</style>
