<template>
  <div class="transaction-list">
    <transition-group name="list" tag="div">
      <el-card shadow="never" v-for="item in list" :key="item">{{ item }}</el-card>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeId: null,
      list: [
        `用户 xxx 在 ${new Date().toLocaleString('zh-CN')} 登录xxx `,
        `用户 xxx 在 ${new Date().toLocaleString('zh-CN')} 使用了 yyy`,
        `用户 xxx 在 ${new Date().toLocaleString('zh-CN')} 下载了 zzz`,
        `公众号 xxx 在 ${new Date().toLocaleString('zh-CN')} 推送了新内容`
      ]
    };
  },
  mounted() {
    this.timeId = window.setInterval(() => {
      // this.list.pop();
      if (Math.random() < 1 / 4) {
        this.list.unshift(
          `用户 xxx 在 ${new Date().toLocaleString('zh-CN')} 登录xxx `
        );
      } else if (Math.random() < 2 / 4) {
        this.list.unshift(
          `用户 xxx 在 ${new Date().toLocaleString('zh-CN')} 使用了 yyy`
        );
      } else if (Math.random() < 3 / 4) {
        this.list.unshift(
          `用户 xxx 在 ${new Date().toLocaleString('zh-CN')} 下载了 zzz`
        );
      } else {
        this.list.unshift(
          `公众号 xxx 在 ${new Date().toLocaleString('zh-CN')} 推送了新内容`
        );
      }

      if (this.list.length > 5) {
        this.list.pop();
      }
    }, 3000);
  },
  beforeDestroy() {
    window.clearInterval(this.timeId)
  }
};
</script>

<style lang="scss">
.transaction-list {
  height: 300px;
  padding: 1rem;
  padding-bottom: 0;
  overflow: hidden;

  .el-card {
    margin-bottom: 1rem;
    color: inherit;
    box-shadow: 0px 5px 5px #00113f;
    background-color: rgba(32, 53, 173, 0.27058823529411763);
    border: none;
  }
}
</style>
