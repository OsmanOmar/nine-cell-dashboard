import res from './app-usage-statistics.json';

let chartOption = {
  title: {
    show: true,
    text: '应用使用次数统计'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      show: true,
      interval: 0,
      rotate: 45
    },
    
    data: []
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: '#3b8ef9'
      }
    },
  },
  series: [
    {
      data: [],
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },

      itemStyle: {
        normal: {
          color: '#b6a2de'
        }
      }
    }
  ]
};

res.result.sort(function(a, b) {
  return b.amount - a.amount;
});

chartOption.xAxis.data = res.result.map(item => {
  return item.appName;
});

chartOption.series[0].data = res.result.map(item => {
  return item.amount;
});

let appUsageStatistics = chartOption;

export default appUsageStatistics;
