import graphic from 'echarts/lib/util/graphic';


let option = {
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
    axisLine: {
      lineStyle: {
        color: '#2274e3'
      }
    },
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      lineStyle: {
        color: '#3b8ef9'
      }
    }
  },
  grid: {
    top: 16,
    right: 16,
    bottom: 32,
    left: 56
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'top',
          color: '#1579ce'
        }
      },
      itemStyle: {
        normal: {
          color: new graphic.LinearGradient(
            0, 1, 0, 0,
            [
              { offset: 0, color: '#00ffff' },
              { offset: 1, color: '#1579ce' }
            ]
          )

        }
      }
    },
    {
      data: [145, 322, 265, 99, 211, 155, 265],
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'top',
          color: '#ce95ef'
        }
      },
      itemStyle: {
        normal: {
          color: new graphic.LinearGradient(
            0, 1, 0, 0,
            [
              { offset: 0, color: '#a252e6' },
              { offset: 1, color: '#ce95ef' }
            ]
          )

        }
      }
    }
  ]
};

let appUsageWeekly = option;
export default appUsageWeekly;
