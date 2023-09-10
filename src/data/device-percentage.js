let option = {
  title: {
    text: 'xxx 安装情况',
    x: 'center',
    textStyle: {
      fontSize: 14,
      color: '#fff'
    },
    top: '24px'
  },
  color: ['#2ccded', '#a250d6'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['PC', '手机']
  },
  series: [
    {
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{ value: 335, name: 'PC' }, { value: 310, name: '手机' }],
      label: {
        color: '#fff'
      }
    }
  ]
};

let devicePercentage = option;

export default devicePercentage;
