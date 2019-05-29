<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12"><div id="myChart1"></div></el-col>
      <el-col :span="12"><div id="myChart2"></div></el-col>
    </el-row>

    <div style="height: 20px; clear: both;"></div>

    <el-row :gutter="20">
      <el-col :span="12"><div id="myChart3"></div></el-col>
      <el-col :span="12"><div id="myChart4"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
        let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
        let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
        let myChart4 = this.$echarts.init(document.getElementById("myChart4"));

        this.$HTTP.get("get_chart_data")
          .then(function(res){
              // 绘制图表
              myChart1.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                  name: '销量',
                  type: 'bar',
                  data: res.data.line_data
                }]
              });
          })
          .catch(function(err){
            console.log(err);
          })

        var option2 = {
          title: {
            text: '堆叠区域图'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {}},
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        myChart2.setOption(option2);

        var option3 = {
          title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };

        myChart3.setOption(option3);

        var option4 = {
          title: {
            text: '浏览器占比变化',
            subtext: '纯属虚构',
            top: 10,
            left: 10
          },
          tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
          },
          legend: {
            type: 'scroll',
            bottom: 10,
            data: (function (){
              var list = [];
              for (var i = 1; i <=28; i++) {
                list.push(i + 2000 + '');
              }
              return list;
            })()
          },
          visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true
          },
          radar: {
            indicator : [
              { text: 'IE8-', max: 400},
              { text: 'IE9+', max: 400},
              { text: 'Safari', max: 400},
              { text: 'Firefox', max: 400},
              { text: 'Chrome', max: 400}
            ]
          },
          series : (function (){
            var series = [];
            for (var i = 1; i <= 28; i++) {
              series.push({
                name:'浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                  width: 1
                },
                emphasis: {
                  areaStyle: {
                    color: 'rgba(0,250,0,0.3)'
                  }
                },
                data:[
                  {
                    value:[
                      (40 - i) * 10,
                      (38 - i) * 4 + 60,
                      i * 5 + 10,
                      i * 9,
                      i * i /2
                    ],
                    name: i + 2000 + ''
                  }
                ]
              });
            }
            return series;
          })()
        };

        myChart4.setOption(option4);

      }
    },
    mounted(){
      this.drawLine();
    }
  }
</script>

<style>
#myChart1, #myChart2, #myChart3, #myChart4{
  height: 500px;
}
</style>
