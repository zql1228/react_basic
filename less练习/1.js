import * as echarts from 'echarts'
const drawChart1 = function(id, xdata, ydata, selectvalue, selectvalue2) {
  // 人数分布
  // 基于准备好的dom，初始化echarts实例
  console.log(111111111)
  var yData = ydata // [1, 2, 3, 5, 15, 2, 16, 20, 8, 4, 2, 19] // ydata
  var xData = xdata
  // [
  //   '2021-12-1',
  //   '2021-12-2',
  //   '2021-12-3',
  //   '2021-12-4',
  //   '2021-12-5',
  //   '2021-12-6',
  //   '2021-12-7',
  //   '2021-12-8',
  //   '2021-12-9',
  //   '2021-12-10',
  //   '2021-12-11',
  //   '2021-12-12'
  // ] // xdata
  var name
  let company //单位
  // 指定图表的配置项和数据
  // 人数分布
  if (selectvalue == 'tab2') {
    name = '时长'
    company = '小时'
  } else if (selectvalue == 'tab3') {
    name = '志愿者人数'
    company = '人'
  } else if (selectvalue == 'tab4') {
    name = '项目数'
    company = '个'
  } else {
    name = '队伍数'
    company = '个'
  }
  let name2
  selectvalue2 == '天' ? (name2 = '日') : selectvalue2 == '月' ? (name2 = '月') : (name2 = '年')
  var option1 = {
    title: {
      show: false,
      text: '志愿者人数分布图',
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#fff',
      borderColor: '#bdd3ed',
      borderWidth: 1,
      textStyle: {
        fontSize: 14,
        color: '#333',
      },
      formatter: '{b}' + name2 + "<br>  <span style='display:inline-block;margin-right:5px;border-radius:50%;width:6px;height:6px;left:5px;background-color:#1890FF'></span>{a}：{c}" + company,
    },
    grid: {
      top: 20,
      left: 110,
      right: 5,
      bottom: 70,
    },
    toolbox: {
      show: false,
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisLabel: {
          rotate: 30,
          interval: (i, v) => true,
          borderWidth: 0,
          color: '#333',
          fontSize: 12,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#E6E9F1',
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        max: function(i) {
          return parseInt(i.max * 1.2)
        },
        axisLabel: {
          color: '#333',
          fontSize: 14,
        },
        splitLine: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#E6E9F1',
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: name,
        type: 'bar',
        data: yData,
        barWidth: 16,
        itemStyle: {
          color: '#50AEB6',
          borderRadius: [0],
        },
      },
    ],
  }
  // 使用刚指定的配置项和数据显示图表。
  var myChart1
  setTimeout(() => {
    myChart1 = echarts.getInstanceByDom(document.getElementById(id))
    if (myChart1 == null) {
      myChart1 = echarts.init(document.getElementById(id))
    }

    myChart1.setOption(option1)
  }, 500)
  window.addEventListener('resize', function() {
    myChart1.resize()
  })
}
export default drawChart1