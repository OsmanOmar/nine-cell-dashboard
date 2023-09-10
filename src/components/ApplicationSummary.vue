<template>
  <div class="application-summary-container">
    <AppAmount />
    <div class="summary-wrapper">
      <div class="summary">
        <div class="value usage-sum">100 万</div>
        <div class="title">累积使用次数</div>
      </div>

      <div class="summary">
        <div class="value user-sum">13,987</div>
        <div class="title">累积使用人数</div>
      </div>

      <div class="summary">
        <div class="value daily">{{ animatedUsageCountToday }}</div>
        <div class="title">今日</div>
      </div>

      <div class="summary">
        <div class="value daily">{{ animatedUserCountToday }}</div>
        <div class="title">今日</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppAmount from './AppAmount';
//typical import
import { TweenLite } from 'gsap/TweenMax';
export default {
  components: { AppAmount },
  data() {
    return {
      timerId: null, // 保存定时器的 ID
      usageCountToday: 0,
      userCountToday: 0,
      tweenedUsageCountToday: 0,
      tweenedUserCountToday: 0
    };
  },
  computed: {
    animatedUsageCountToday() {
      return this.tweenedUsageCountToday.toFixed(0);
    },
    animatedUserCountToday() {
      return this.tweenedUserCountToday.toFixed(0);
    }
  },
  mounted() {
    this.timerId = window.setInterval(() => {
      this.usageCountToday += Math.round(Math.random() * 5);
      this.userCountToday += Math.round(Math.random() * 5);
    }, 3000);
  },
  watch: {
    usageCountToday(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedUsageCountToday: newValue });
    },
    userCountToday(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedUserCountToday: newValue });
    }
  },
  beforeDestroy() {
    window.clearInterval(this.timerId); // 清除定时器
  }
};
</script>

<style lang="scss">
.application-summary-container {
  height: 100%;
  padding: 1rem;
  display: grid;
  grid-template-rows: 24px 1fr;

  .summary-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;

    .summary {
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: .5rem;
      background-color: rgba(32, 53, 173, 0.27058823529411763);
      text-align: center;

      .value {
        align-self: end;
        font-size: 24px;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 100% 100%;
        font-weight: 900;

        &.usage-sum {
          background-image: linear-gradient(#3bb17e 4%, #6ad7a8 100%);
        }

        &.user-sum {
          background-image: linear-gradient(#a252e6 4%, #cf96ef 100%);
        }

        &.daily {
          background-image: linear-gradient(#2275e5 13%, #42ccff 100%);
        }
      }
    }
  }
}</style>
