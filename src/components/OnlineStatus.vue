<template>
  <div class="online-status">
    <div class="summary">
      <span class="plain">每天平均同时在线终端</span>
      <span class="emphasis">234 个</span>
      <span class="plain">，今日峰值</span>
      <span class="emphasis">311 个</span>
    </div>
    <div>
      <v-chart :options="options" autoresize></v-chart>
    </div>
  </div>
</template>

<script>
import graphic from 'echarts/lib/util/graphic';
export default {
  data() {
    return {
      options: {
        title: {
          text: 'xxx 今日在线情况',
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#2274e3'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#2274e3'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            itemStyle: {
              color: '#fff'
            },
            lineStyle: {
              color: '#d385ff'
            },
            areaStyle: {
              normal: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#a14fd5'
                  },
                  {
                    offset: 0.2,
                    color: 'rgba(161,79,213,0)'
                  }
                ])
              }
            },
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.generateChartOptions();
  },
  methods: {
    generateChartOptions() {
      let now = new Date();
      let midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
      );
      let dataLength = (now.getTime() - midnight) / (1000 * 60);
      for (let i = 0; i < dataLength; i++) {
        let item = [];
        let thatTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,
          i,
          0,
          0
        ).getTime();
        item.push(thatTime, i);
        this.options.series[0].data.push(item);
      }

      console.log(this.options);
    }
  }
};
</script>

<style lang="scss">
.online-status {
  height: 100%;
  display: grid;
  grid-template-rows: 48px 1fr;
  padding: 0.5rem;

  .summary {
    font-size: 18px;

    .emphasis {
      color: orange;
    }
  }
}
</style>
