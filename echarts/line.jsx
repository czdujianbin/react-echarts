/**
 * Line Chart
 * @type {[type]}
 */
var echarts = require("echarts/src/echarts");
require("echarts/src/chart/wordCloud");
require("echarts/src/chart/bar");
require("echarts/src/chart/line");

var React = require('react');


/**
 * Line Chart
 * @param  {String} height [ height of chart,default "500px" ]
 * @param  {String} width [ width of chart,default "100%" ]
 * @return {[type]}                  [description]
 */
var Line = React.createClass({

    statics:{
        prefix:"echarts_line_"
    },

    getInitialState: function() {
        return {

        };
    },

    getDefaultProps: function() {
        return {
            id:"defalut",
            theme:"default",



            trigger: 'axis',
            calculable:false,


            height:"500px",
            width:"100%",
            padding:"10px",
            border:"1px solid #ccc",

        };
    },

    componentDidMount: function() {
        
        var lineChart = echarts.init(document.getElementById(Line.prefix+this.props.id),this.props.theme);
        var option = {
            title : {
                text: this.props.title,
                subtext: this.props.subtitile
            },
            tooltip : {
                trigger: this.props.trigger
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
            calculable : this.props.calculable,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLabel : {
                        formatter: '{value} °C'
                    },
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
                            {type : 'average', name : '平均值'},
                            // 最小值指向最大值的连线
                            [
                                {type : 'max', name: '自定义名字'},
                                {type : 'min', name: '自定义名字'}
                            ],
                        ]
                    }
                }
            ]
        };
                            
                            
        lineChart.setOption(option);

    },

    render: function() {
        return (
            <div>
                <div id={Line.prefix + this.props.id} style={{"height":this.props.height,"width":this.props.width,"border":this.props.border,"padding":this.props.padding}}></div>
            </div>);
        }

});

module.exports = Line;
