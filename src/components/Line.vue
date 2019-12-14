<template>
    <div class="container">
<!--        <h1>销售总量</h1>-->
        <div class="line" id="myChart" style="{width: 280px;height: 350px;}">

        </div>
 </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    mounted() {
        this.drawLine()
    },
    methods:{
        drawLine(){
            let myChart = echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                title: {
                    text: '销售总量'
                },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [3032, 2860, 2754, 3145, 3286, 3281,2632],
        type: 'line',
        areaStyle: {}
    }]
})
        }
    }
}
</script>

<style lang="scss" scoped>
    .line canvas{
        width: 400px!important;
        height: 400px!important;
    }
</style>
