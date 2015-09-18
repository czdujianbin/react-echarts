
var React = require('react/addons');
var ZRender = require('../vendor/zrender/index');
var Tools = require('../util/tools');

var Echarts = React.createClass({

    statics:{
        chartRefs:{},
        myChart:{},
        loadScriptLock:false,
        isScriptLoad:false
    },

    getInitialState: function() {
        return {
            
        };
    },

    getDefaultProps: function() {
        return {
            
        };
    },

    renderChart: function () {

        console.log('..renderChart function...');
        if(!window.echarts) return;

        console.log('..renderChart...gogogo');


        if (!this.props.option) {
            throw chartHaveNoOptionException('option has to be specified !')
        }

        var option = this.props.option;

        Echarts.myChart[this.props.id] = echarts.init(document.getElementById('line1'));

        // 为echarts对象加载数据
        Echarts.myChart[this.props.id].setOption(option);
    },

    componentDidMount: function () {

        console.log('..componentDidMount...');

        Echarts.chartRefs[this.props.id] = this;

        //脚本是否加载
        if(!Echarts.isScriptLoad){//未加载
            //异步加锁判断
            if(!Echarts.loadScriptLock){//未加锁
                Echarts.loadScriptLock = true;//加上锁，阻止其他并行脚本加载
                /*var script = document.createElement("script");
                script.type = "text/javascript";
                script.src ="./vendor/echarts/dist/echarts-all.js";
                document.body.appendChild(script);

                //脚本已加锁
                Echarts.isScriptLoad = true;
                setTimeout(this.renderChart, 200 );*/
                
                //加载完脚本，对所有未加载的图表进行render
                /*console.log("---------");
                console.log(Echarts.chartRefs);
                for(var key in Echarts.chartRefs){
                    Echarts.chartRefs[key].renderChart();

                }*/

                Tools.loadScript("./vendor/echarts/dist/echarts-all.js",function(){
                    for(var key in Echarts.chartRefs){
                        Echarts.chartRefs[key].renderChart();
                    }
                    Echarts.isScriptLoad = true;
                });

            }

        }else{
            //脚本已加载
            this.renderChart();
        }
        
    },

    /*
    componentDidMount: function () {





            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src ="./vendor/echarts/dist/echarts-all.js";
            document.body.appendChild(script);


      
            this.test();

        
    },
    test:function(){
        console.log('..test...');
            while(!window.echarts||!window.zrender){
                setTimeout(this.test, 3000 );
                return;
            }
        console.log('..renderChart...');
        this.renderChart();
    },*/
/*
        var self = this;
        Echarts.myChart[this.props.id].on(ecConfig.EVENT.PIE_SELECTED, function (param){
            var selected = param.selected;
            var serie;
            var str = '当前选择： ';
            for (var idx in selected) {
                serie = self.props.option.series[idx];
                for (var i = 0, l = serie.data.length; i < l; i++) {
                    if (selected[idx][i]) {
                        str += '【系列' + idx + '】' + serie.name + ' : ' + 
                               '【数据' + i + '】' + serie.data[i].name + ' ';
                    }
                }
            }
            document.getElementById('line2').innerHTML = str;
        })
*/

 
    componentDidUpdate: function () {
        console.log('..componentDidUpdate...');
        //this.renderChart();
    },
    render: function () {
        return <div id="test" className = "chart" ref = "chart" width="300px" height="500px" />
    }
});
module.exports = Echarts;
