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
              <el-button @click="dialogFormVisible = true" type="success" size="medium">&nbsp;新增商品&nbsp;</el-button>
                <!-- 导出excell start -->
              <download-excel
                      style="display: inline-block"
                      class = "export-excel-wrapper"
              :data = "tableData"
              :fields = "json_fields"
              name = "商品列表.xls">
              <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
              <el-button type="primary" size="medium">导出EXCEL</el-button>
              </download-excel>
        <!-- 导出excell end -->

          </el-col>
          <el-col :span="6">

          </el-col>
      </el-row>


        <el-card style="width:90%" class="box-card">
    <el-table
        border
        :default-sort="{prop:'price',order: 'ascending'}"
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
        sortable
        prop="price"
        label="价格">
      </el-table-column>
    </el-table>
        </el-card>

      <el-dialog title="商品入库" :visible.sync="dialogFormVisible">
          <el-form :rules="rules" ref="ruleForm" :model="form" size="medium" label-width="80px">
              <el-form-item prop="id" label="商品Id" :label-width="formLabelWidth">
                  <el-input v-model="form.id"></el-input>
              </el-form-item>
              <el-form-item prop="goodsName" label-width="100px" label="商品名称" :label-width="formLabelWidth">
                  <el-input v-model="form.goodsName"></el-input>
              </el-form-item>
              <el-form-item prop="goodsPrice" label="价格" :label-width="formLabelWidth">
                  <el-input v-model="form.goodsPrice"></el-input>
              </el-form-item>

          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
          </div>
      </el-dialog>


    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters(['getTableData']),
    },
    created() {
        this.tableData = this.getTableData
    },
    methods:{
        ...mapActions(['action_upLoading']),
        //确定上传
        submitForm(formName){

            this.$refs[formName].validate((valid) => {
                console.log(valid)
                if (valid) {
                    console.log('成功')
                    this.action_upLoading(this.form).then(res=>{
                        this.dialogFormVisible = false
                        this.form.id = null
                        this.form.goodsName = null
                        this.form.goodsPrice = null
                        this.$message({
                            message: res,
                            type: 'success'
                        });
                    }).catch(err=>{
                        this.$message.error(err);
                    })
                }else{
                    this.$message({
                        message: '请输入完整',
                        type: 'warning'
                    });
                }
            });
        }
    },
    data() {
        return {
          form:{
            id:null,
            goodsName:null,
            goodsPrice:null
          },
            rules:{
                id:[{ required: true, message: '请输入商品Id', trigger: 'blur' }],
                goodsName:[{ required: true, message: '请输入商品名称', trigger: 'blur' }],
                goodsPrice:[{ required: true, message: '请输入单品价格', trigger: 'blur' }],
            },
            formLabelWidth: '120px',
          dialogFormVisible: false,
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
          tableData:null
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

