<template>
    <div class="container">
        <div class="line" id="myChart" :style="{width: '400px', height: '400px'}">

        </div>
 </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
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
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
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