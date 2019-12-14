<template>
    <div class="container">
        <div class="line" id="myChart2" style="{width: 280px;height: 350px;}">

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
                let myChart = echarts.init(document.getElementById('myChart2'))
                myChart.setOption({
                    title: {
                        text: '销售量'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['香脆鸡柳','脆皮炸鸡腿','可乐大杯','快乐全家桶','雪顶咖啡']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'香脆鸡柳',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'脆皮炸鸡腿',
                            type:'line',
                            stack: '总量',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'可乐大杯',
                            type:'line',
                            stack: '总量',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'快乐全家桶',
                            type:'line',
                            stack: '总量',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'雪顶咖啡',
                            type:'line',
                            stack: '总量',
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
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
