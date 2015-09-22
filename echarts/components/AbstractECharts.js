

var React = require('react/addons');
var Tools = require('../../utils/tools');

/**
 * ECharts
 * @class ECharts
 * @constructor
 * @param {String} id component id
 * @param {String} height component's height
 * @param {String} width component's width
 * @param {Object} option the setting of this component
 */
var AbstractECharts = {

    statics:{

        chartRefs:[],
        getChart:function(){
            return this.state.chart;
        }
    },

    loadChart: function(option){

        var myChart = echarts.init(document.getElementById(this.state.id),this.props.theme);

        this.state.chart = myChart;

        //为Chart对象加载数据
        myChart.setOption(option);
    },

    getInitialState: function() {
        return {
            id:Tools.uuid(),
            chart:null
        };
    },

    getDefaultProps: function() {
        return {
            theme:"defalut",
            height:"500px",
            width:"100%",

            title:"",
            subtitle:"",
            
            xAxisName:[],
            smooth:false,

            data:[],
            cssClass:{
                border:"1px solid #ccc",
                padding:"10px"
            }
        };
    },

    componentDidMount: function () {

        //AbstractECharts.chartRefs[this.refs.myDiv] = this;

        AbstractECharts.statics.chartRefs.push(this);

        var flag = Tools.loadScriptWithLock("echarts-all","./vendors/echarts/dist/echarts-all.js",function(){

                        //对每一个未加载的图表进行刷新
                        AbstractECharts.statics.chartRefs.map(function(chart) {
                            chart.renderChart();
                        })

                    });
        
        if(flag){
            //脚本已加载，直接加载图表
            this.renderChart();
        }
        
    },
 
    componentDidUpdate: function () {
        this.renderChart();
    },


    render: function () {
        return <div id={this.state.id}  style={jQuery.extend(this.props.cssClass,{height:this.props.height,width:this.props.width})} />
    }
};

module.exports = AbstractECharts;
