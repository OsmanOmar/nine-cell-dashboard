import res from './app-user-statistics.json';

let chartOption = {
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
    type: 'value'
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
          color: '#2ec7c9'
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

let appUserStatistics = chartOption;

export default appUserStatistics;
