<template>
  <div class="container">
      <el-row :gutter="20" style="padding:10px">
          <el-col :span="6">
            <el-input
          v-model="search"
          clearable
          size="medium"
          placeholder="输入关键字搜索"/>
          </el-col>
          <el-col :span='6'>
                <!-- 导出excell start -->
      <download-excel
     
      class = "export-excel-wrapper"
      :data = "tableData"
      :fields = "json_fields"
      name = "商品列表.xls">
      <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
      <el-button type="primary" size="small">导出EXCEL</el-button>
</download-excel>
<!-- 导出excell end -->
          </el-col>
      </el-row>
      
        
        <el-card style="width:90%" class="box-card">
    <el-table
        border
      :data="tableData.filter(item=>!search || item.goodsName.includes(search)||item.goodsId.toString().includes(search))"
      style="width: 100%">
      <el-table-column
        prop="goodsId"
        label="商品Id"
        width="380">
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名称"
        width="380">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
    </el-table>
        </el-card>
  
    </div>
</template>

<script>
export default {
    data() {
        return {
          search:'',
          json_fields: {
        "商品Id": "goodsId",    //常规字段
        "商品名称": "goodsName", //支持嵌套属性
        "价格": {
          field:"price",
          callback:value=>{
            return `${value}元`
          }
        }
      },
          tableData: [{
                        goodsId:1,
                        goodsName:'香辣鸡腿堡',
                        price:18
                    }, {
                        goodsId:2,
                        goodsName:'田园鸡腿堡',
                        price:15
                    }, {
                        goodsId:3,
                        goodsName:'和风汉堡',
                        price:15
                    }, {
                        goodsId:4,
                        goodsName:'快乐全家桶',
                        price:80
                    }, {
                        goodsId:5,
                        goodsName:'脆皮炸鸡腿',
                        price:10
                    }, {
                        goodsId:6,
                        goodsName:'魔法鸡块',
                        price:20
                    }, {
                        goodsId:7,
                        goodsName:'可乐大杯',
                        price:10
                    }, {
                        goodsId:8,
                        goodsName:'雪顶咖啡',
                        price:18
                    }, {
                        goodsId:9,
                        goodsName:'大块鸡米花',
                        price:15
                    }, {
                        goodsId:20,
                        goodsName:'香脆鸡柳',
                        price:17
                    }]
        }
      }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
</style>

