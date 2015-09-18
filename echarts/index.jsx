//import 3rd party dependents

var jQuery = require("jQuery");
window.jQuery = jQuery;
var React = require('react');



var ZRender = require('../vendor/zrender/index');


var ECharts = require('./echarts.jsx');

var option = {
    title : {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};


var option4 = {
    title : {
        text: '浏览器占比变化',
        subtext: '纯属虚构',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['Chrome','Firefox','Safari','IE9+','IE8-']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : (function (){
        var series = [];
        for (var i = 0; i < 30; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                itemStyle : {normal : {
                    label : {show : i > 28},
                    labelLine : {show : i > 28, length:20}
                }},
                radius : [i * 4 + 40, i * 4 + 43],
                data:[
                    {value: i * 128 + 80,  name:'Chrome'},
                    {value: i * 64  + 160,  name:'Firefox'},
                    {value: i * 32  + 320,  name:'Safari'},
                    {value: i * 16  + 640,  name:'IE9+'},
                    {value: i * 8  + 1280, name:'IE8-'}
                ]
            })
        }
        series[0].markPoint = {
            symbol:'emptyCircle',
            symbolSize:series[0].radius[0],
            effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
            data:[{x:'50%',y:'50%'}]
        };
        return series;
    })()
};


option4 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius : [0, 70],
            
            // for funnel
            x: '20%',
            width: '40%',
            funnelAlign: 'right',
            max: 1548,
            
            itemStyle : {
                normal : {
                    label : {
                        position : 'inner'
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎', selected:true}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius : [100, 140],
            
            // for funnel
            x: '60%',
            width: '35%',
            funnelAlign: 'left',
            max: 1048,
            
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
               

               var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
option = {
    legend: {
        x : 'center',
        y : 'center',
        data:[
            'GoogleMaps','Facebook','Youtube','Google+','Weixin',
            'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram'
        ]
    },
    title : {
        text: 'The App World',
        subtext: 'from global web index',
        x: 'center'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (params){
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        } 
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            type : 'pie',
            center : ['10%', '30%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:46, itemStyle : labelBottom},
                {name:'GoogleMaps', value:54,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:56, itemStyle : labelBottom},
                {name:'Facebook', value:44,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '30%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:65, itemStyle : labelBottom},
                {name:'Youtube', value:35,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '30%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:70, itemStyle : labelBottom},
                {name:'Google+', value:30,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '30%'],
            radius : radius,
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:73, itemStyle : labelBottom},
                {name:'Weixin', value:27,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['10%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x: '0%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : labelBottom},
                {name:'Twitter', value:22,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : labelBottom},
                {name:'Skype', value:22,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:78, itemStyle : labelBottom},
                {name:'Messenger', value:22,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:83, itemStyle : labelBottom},
                {name:'Whatsapp', value:17,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:89, itemStyle : labelBottom},
                {name:'Instagram', value:11,itemStyle : labelTop}
            ]
        }
    ]
};
                         

           /*
setTimeout(function (){
    var _ZR = Echarts.myChart.getZrender();
    // 补充千层饼
    var TextShape = ZRender.Text;
    _ZR.addShape(new TextShape({
        style : {
            x : _ZR.getWidth() / 2,
            y : _ZR.getHeight() / 2,
            color: '#666',
            text : '恶梦的过去',
            textAlign : 'center'
        }
    }));
    _ZR.addShape(new TextShape({
        style : {
            x : _ZR.getWidth() / 2 + 200,
            y : _ZR.getHeight() / 2,
            brushType:'fill',
            color: 'orange',
            text : '美好的未来',
            textAlign : 'left',
            textFont:'normal 20px 微软雅黑'
        }
    }));
    _ZR.refresh();
}, 2000);   

      */

var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        x : 'left',
        data:['图一','图二','图三']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable: true,
    polar : [
        {
            indicator : [
                { text : '指标一' },
                { text : '指标二' },
                { text : '指标三' },
                { text : '指标四' },
                { text : '指标五' }
            ],
            center : ['25%',210],
            radius : 150,
            startAngle: 90,
            splitNumber: 8,
            name : {
                formatter:'【{value}】',
                textStyle: {color:'red'}
            },
            scale: true,
            type: 'circle',
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'green',
                    width: 2,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                // formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#ccc'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,0,250,0.3)','rgba(0,200,200,0.3)']
                }
            },
            splitLine : {
                show : true,
                lineStyle : {
                    width : 2,
                    color : 'yellow'
                }
            }
        },
        {
            indicator : [
                { text : '语文', max  : 150 },
                { text : '数学', max  : 150 },
                { text : '英语', max  : 150 },
                { text : '物理', max  : 120 },
                { text : '化学', max  : 108 },
                { text : '生物', max  : 72 }
            ],
            center : ['75%', 210],
            radius : 150
        }
    ],
    series : [
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data : [
                {
                    value : [100, 8, 0.40, -80, 2000],
                    name : '图一',
                    symbol: 'star5',
                    symbolSize: 4,           // 可计算特性参数，空数据拖拽提示图形大小
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    }
                },
                {
                    value : [10, 3, 0.20, -100, 1000],
                    name : '图二',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            }
                        }
                    }
                },
                {
                    value : [20, 3, 0.3, -13.5, 3000],
                    name : '图三',
                    symbol: 'none',         // 拐点图形类型，非标准参数
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'dotted'
                            }
                        }
                    }
                }
            ]
        },
        {
            name: '成绩单',
            type: 'radar',
            polarIndex : 1,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data : [
                {
                    value : [120, 118, 130, 100, 99, 70],
                    name : '张三',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var value = params.data
                                return isNaN(value) 
                                       ? undefined
                                       : (value >= 120 ? 'green' : 'red')
                            },
                            label: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            },
                            areaStyle: {
                                color: (function (){
                                    var zrColor = ZRender.Color;
                                    var x = document.getElementById('main').offsetWidth - 250;
                                    return zrColor.getRadialGradient(
                                        x, 210, 0, x, 200, 150,
                                        [[0, 'rgba(255,255,0,0.3)'],[1, 'rgba(255,0,0,0.5)']]
                                    )
                                })()
                            }
                        }
                    }
                },
                {
                    value : [90, 113, 140, 30, 70, 60],
                    name : '李四',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    }
                }
            ],
            markPoint : {
                symbol: 'emptyHeart',
                data : [
                    {name : '打酱油的标注', value : 100, x:'50%', y:'15%', symbolSize:32}
                ]
            }
        }
    ]
};
                    

React.render(<div>
          <hr /><hr />
      <ECharts id="test" theme="macarons" option={option} />
</div>, document.getElementById('content'));

