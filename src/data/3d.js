let option = {
  color: ['#bb0004', '#ffd48a'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认值为 'line', 可选 'line' || 'shadow'
    }
  },
  grid: {
    left: '10%',
    top: '10%',
    bottom: '10%'
  },
  xAxis: {
    data: ['春', '夏', '秋', '冬'],
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#5ea2ed',
      interval: 0
    },
    axisLine: {
      lineStyle: {
        color: '#1b5bba'
      }
    }
  },
  yAxis: {
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#1b5bba'
      }
    },
    axisLabel: {
      color: '#5ea2ed',
      interval: 0
    }
  },
  series: [{
    type: 'pictorialBar',
    name: 'case归类',
    symbolSize: ['50%', '80%'],
    // symbolPosition: 'center',
    z: 10,
    label: {
      normal: {
        show: true,
        position: 'top',
        formatter: '{c}',
        color: '#fff',
        fontSize: 13
      }
    },
    data: [{
      value: 152,
      symbolOffset: [0, -8],
      symbol: 'roundRect'
    },
    {
      value: 152,
      symbolOffset: [0, -8],
      symbol: 'image://https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample34.jpg'
    },
    {
      value: 152,
      symbolOffset: [0, -8],
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
    },
    {
      value: 152,
      symbolOffset: [0, -8],
      symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
    }]
  }]
}

export default option;