<template>
    <div class="container" style="padding:20px 0 20px 68px;">
        <el-row :gutter="30">
            <el-col :span="9">
                    <el-card>
                        <Echarts/>
                    </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <Pie/>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 30px">
            <el-col :span="21">
                <el-card>
                    <broken></broken>

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Echarts from '@/components/Line.vue'
import Pie from '@/components/Pie.vue'
import broken from '@/components/brokeLine.vue'
export default {
    components:{
        Echarts,
        Pie,
        broken
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding-top: 20px;

        width: 100%;
        height: calc(100% - 50px);

    }
</style>
