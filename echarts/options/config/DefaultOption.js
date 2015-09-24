var DefaultOption = {

    title:{
        //主标题
        text:'图表',
        //副标题
        subtext:''
    },
    tooltip:{
        //触发类型，默认数据触发，可选为：'item' | 'axis'
        trigger:'axis'
    },
    legend:{
        //这个属性，应该和series中的名字是一致的，这样会提供一个选项，可以选择对应的series
        //data:['test1','test2']
        data:[]
    },
    toolbox:{
        //是否显示工具条
        show:true,
        //具体设置
        feature:{

            mark:{show:true},
            //dataView:{show:true, readOnly:false},
            
            restore:{show:true},
            saveAsImage:{show:true}
        }
    },
    calculable:false,
    
    series:[
        /*{
            name:'邮件营销',
            type:'line',
            data:[120, 132, 101, 134, 90, 230, 210]
        }*/
    ]
}


module.exports = DefaultOption;