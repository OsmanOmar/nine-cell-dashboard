import graphic from 'echarts/lib/util/graphic';

let chartOption = {
  title: {
    text: '终端配备情况',
    x: 'center',
    textStyle: {
      fontSize: 14,
      color: '#fff'
    },
    top: '24px'
  },
  tooltip: {
    trigger: 'axis',
    showContent: true
  },

  xAxis: {
    type: 'category',
    data: ['人员总数', '终端总数'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      color: '#fff'
    }
  },
  grid: {
    top: 64,
    right: 24,
    bottom: 32,
    left: 56
  },
  series: [
    {
      type: 'bar',
      data: [],
      label: {
        normal: {
          show: true,
          position: 'top',
          color: '#fff'
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
    }
  ]
};

// 设置数据

chartOption.series[0].data.push(20659, 9832);

let deviceAmount = chartOption;
export default deviceAmount;
