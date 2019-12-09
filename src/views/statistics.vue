<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="10">
                    <el-card>
                        <Echarts/>
                    </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Echarts from '@/components/echarts.vue'
export default {
    components:{
        Echarts
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 20px;
        width: 100%;
        height: calc(100% - 50px);
    }
</style>