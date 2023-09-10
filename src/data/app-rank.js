import res from './app-usage-statistics.json';
import graphic from 'echarts/lib/util/graphic';


let option = {
  yAxis: {
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
  xAxis: {
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
    right: 32,
    bottom: 32,
    left: '25%'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'right',
          color: '#5aca99'
        }
      },
      itemStyle: {
        normal: {
          color: new graphic.LinearGradient(
            0, 1, 0, 0,
            [
              { offset: 1, color: '#3bb17d' },
              { offset: 0, color: '#65d3a3' }
            ]
          )

        }
      }
    }
  ]
};

res.result.sort(function (a, b) {
  return b.amount - a.amount;
});

res.result.reverse();

option.yAxis.data = res.result.map(item => {
  return item.appName;
});

option.series[0].data = res.result.map(item => {
  return item.amount;
});

let appRank = option;
export default appRank;
