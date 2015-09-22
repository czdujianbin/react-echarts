//import 3rd party dependents

var jQuery = require("jQuery");
window.jQuery = jQuery;
var React = require('react');



var ZRender = require('../vendors/zrender/index');


var ECharts = require('./echarts');

var BasicLine = require('./components/line/BasicLine');
var StackedLine = require('./components/line/StackedLine');



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


var data = [
    {
        name : "测试1",
        data : [90, 113, 140, 30, 70, 60]
    },
    {
        name : "测试2",
        data : [190, 213, 240, 230, 70, 260]
    },
];


var data2 = [
    {
        name : "测试1",
        data : [190, 123, 1420, 130, 170, 620]
    },
    {
        name : "测试2",
        data : [190, 213, 240, 230, 70, 260]
    },
];

var xAxisName = ['周一','周二','周三','周四','周五','周六'];

       
option = {
    "title": {
        "text": "曲线测试",
        "subtext": "这是一个副标题测试"
    },
    "tooltip": {
        "trigger": "item"
    },
    "legend": {
        "data": [
            "测试1",
            "测试2"
        ]
    },
    "toolbox": {
        "show": true,
        "feature": {
            "mark": {
                "show": true
            },
            "magicType": {
                "show": true,
                "type": [
                    "line",
                    "bar",
                    "stack",
                    "tiled"
                ]
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    "calculable": false,
    "xAxis": [
        {
            "type": "category",
            "boundaryGap": false,
            "data": [
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value"
        }
    ],
    "series": [
        {
            "name": "测试1",
            "data": [
                90,
                113,
                140,
                30,
                70,
                60
            ],
            "type": "line",
            "smooth": true,
            "stack": "sum"
        },
        {
            "name": "测试2",
            "data": [
                190,
                213,
                240,
                230,
                70,
                260
            ],
            "type": "line",
            "smooth": true,
            "stack": "sum"
        }
    ]
};

option = {
    legend: {
        data:['高度(km)与气温(°C)变化关系']
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
    tooltip : {
        trigger: 'axis',
        formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    xAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisLine : {onZero: false},
            axisLabel : {
                formatter: '{value} km'
            },
            boundaryGap : false,
            data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
        }
    ],
    series : [
        {
            name:'高度(km)与气温(°C)变化关系',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
        }
    ]
};
                    


React.render(
  <div style={{"overflow":"auto"}}>
  <ECharts height="400px" width="800px" option={option}/>
    <BasicLine title="曲线测试" subtitle="这是一个副标题测试" height="400px" width="800px" trigger="axis"  data={data} xAxisName={xAxisName} smooth={true} tooltipFormatter="Temperature : <br/>{b}km : {c}°C"/>

<StackedLine title="曲线测试" subtitle="这是一个副标题测试" height="400px" width="500px" trigger="item"  theme="macarons" data={data2} xAxisName={xAxisName} smooth={true} />
<StackedLine title="曲线测试" subtitle="这是一个副标题测试" height="400px" width="600px" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>
<StackedLine title="曲线测试" subtitle="这是一个副标题测试" height="400px" width="700px" trigger="item" theme="macarons" data={data2} xAxisName={xAxisName} smooth={true}/>
<StackedLine title="曲线测试" subtitle="这是一个副标题测试" height="400px" width="800px" data={data} xAxisName={xAxisName} smooth={true}/>
  </div>
  , document.getElementById('content'));
