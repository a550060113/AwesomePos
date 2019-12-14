<template>
    <div class="container">
        <div class="pie" id="myChart1" style="{width: 400px; height: 350px;margin-left:90px}">

        </div>
    </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/pie')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        mounted() {
            this.drawLine()
        },
        methods:{
            drawLine(){
                let myChart = echarts.init(document.getElementById('myChart1'))
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: '0',
                        data:['香辣鸡腿堡','可乐大杯','脆皮炸鸡腿','快乐全家桶','香脆鸡柳擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'香辣鸡腿堡'},
                                {value:310, name:'可乐大杯'},
                                {value:234, name:'脆皮炸鸡腿'},
                                {value:135, name:'快乐全家桶'},
                                {value:1548, name:'香脆鸡柳擎'}
                            ]
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
