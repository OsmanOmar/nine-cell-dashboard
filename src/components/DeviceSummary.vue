<template>
  <div class="device-summary-container">
    <div class="summary">
      <div class="icon icon-message">
      </div>
      <div class="content">
        <div class="title">累积收发消息</div>
        <div class="value">1000 万</div>
      </div>
    </div>
    <div class="summary">
      <div class="icon icon-group">
      </div>
      <div class="content">
        <div class="title">群组数量</div>
        <div class="value">10 万</div>
      </div>
    </div>
    <div class="summary">
      <div class="icon icon-account">
      </div>
      <div class="content">
        <div class="title">公众号数量</div>
        <div class="value">122</div>
      </div>
    </div>
    <div class="summary">
      <div class="icon icon-article">
      </div>
      <div class="content">
        <div class="title">累积推送文章</div>
        <div class="value">10 万</div>
      </div>
    </div>
    <div class="summary">
      <div class="icon icon-message">
      </div>
      <div class="content">
        <div class="title">今日收发消息</div>
        <div class="value">
          <AnimatedNumber :dynamic-number="trafficCountToday" />
        </div>
      </div>
    </div>
    <div class="summary">
      <div class="icon icon-group">
      </div>
      <div class="content">
        <div class="title">今日活跃群组</div>
        <div class="value">
          <AnimatedNumber :dynamic-number="activeGroupCountToday" />
        </div>
      </div>
    </div>
    <div class="summary">
      <div class="icon icon-account">
      </div>
      <div class="content">
        <div class="title">今日活跃公众号</div>
        <div class="value">
          <AnimatedNumber :dynamic-number="activeAccountCountToday" />
        </div>
      </div>
    </div>
    <div class="summary">
      <div class="icon icon-article">
      </div>
      <div class="content">
        <div class="title">今日推送文章</div>
        <div class="value">
          <AnimatedNumber :dynamic-number="pushedContentCountToday" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from './AnimatedNumber';
export default {
  components: { AnimatedNumber },
  data() {
    return {
      pushedContentCountToday: 0,
      activeAccountCountToday: 0,
      activeGroupCountToday: 0,
      trafficCountToday: 1000
    };
  },
  mounted() {
    window.setInterval(() => {
      this.pushedContentCountToday += Math.round(Math.random() * 4);
      this.activeAccountCountToday += Math.round(Math.random() * 4);
      this.activeGroupCountToday += Math.round(Math.random() * 4);
      this.trafficCountToday += Math.round(Math.random() * 4);
    }, 3000);
  }
};
</script>

<style lang="scss">
.device-summary-container {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;

  .summary {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: rgba(32, 53, 173, 0.27058823529411763);

    .icon {

      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 50% 50%;

      &.icon-message {
        background-image: url('../assets/message.png');
      }

      &.icon-group {
        background-image: url('../assets/group.png');
      }

      &.icon-account {
        background-image: url('../assets/account.png');
      }

      &.icon-article {
        background-image: url('../assets/article.png');
      }
    }

    .content {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 0.5rem;

      .title {
        align-self: end;
      }

      .value {
        align-self: start;
        font-size: 24px;
      }
    }
  }
}</style>
