<template>
    <div>
         <div class="main-left">
                   <el-tabs v-model="activeName" >
                       <el-tab-pane label="点餐" name="first">
                           <el-table
                                   :data="tableData"
                                   border
                                   style="width: 100%"
                           >
                               <el-table-column
                                       fixed
                                       prop="goodsName"
                                       label="商品"
                                       >
                               </el-table-column>
                               <el-table-column
                                       prop="count"
                                       label="量"
                                       width="50"
                                       >
                               </el-table-column>
                               <el-table-column
                                       prop="price"
                                       label="金额"
                                       width="60"
                                       >
                               </el-table-column>
                               <el-table-column
                                       fixed="right"
                                       label="操作"
                                       width="120"
                                       >
                                   <template slot-scope="scope">
                                       <el-button @click="handleClick(scope.row)" type="text" size="small">增加</el-button>
                                       <el-button @click="decrease(scope.row)" type="text" size="small">删除</el-button>
                                   </template>
                               </el-table-column>
                           </el-table>
                           <div class="totalDiv">
                               <small> 数量</small>:{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp;  <small>金额:</small>{{totalMoney}}元
                           </div>
                           <div style="text-align: center;margin-top: 20px">
                               <el-button type="warning">挂单</el-button>
                               <el-button @click="delAllGoods" type="danger">删除</el-button>
                               <el-button @click="checkout" type="success">结账</el-button>
                           </div>
                       </el-tab-pane>
                       <el-tab-pane label="挂单" name="second">配置管理</el-tab-pane>
                       <el-tab-pane label="外卖" name="third">角色管理</el-tab-pane>
                   </el-tabs>
               </div>
                <div class="main-right">
                    <div class="often-goods">
                        常用商品
                    </div>
                    <div class="goods-list">
                        <ul>
                            <li @click="addGoodsItem(item)" v-for="(item,index) in oftenGoods">{{item.goodsName}} <span>¥{{item.price}}元</span></li>
                        </ul>
                    </div>
                    <div class="goods-type">
                        <el-tabs>
                            <el-tab-pane label="汉堡">
                                <div>
                                    <ul class="cookList">
                                        <li @click="addGoodsItem(item)" v-for="(item,index) in type0Goods">
                                            <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                            <span class="foodName">{{item.goodsName}}</span>
                                            <span class="foodPrice">￥{{item.price}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="小食">
                                <div>
                                    <ul class="cookList">
                                        <li @click="addGoodsItem(item)" v-for="(item,index) in type1Goods">
                                            <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                            <span class="foodName">{{item.goodsName}}</span>
                                            <span class="foodPrice">￥{{item.price}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="饮料">
                                <div>
                                    <ul class="cookList">
                                        <li @click="addGoodsItem(item)" v-for="(item,index) in type2Goods">
                                            <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                            <span class="foodName">{{item.goodsName}}</span>
                                            <span class="foodPrice">￥{{item.price}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="套餐">
                                <div>
                                    <ul class="cookList">
                                        <li @click="addGoodsItem(item)" v-for="(item,index) in type3Goods">
                                            <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                            <span class="foodName">{{item.goodsName}}</span>
                                            <span class="foodPrice">￥{{item.price}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>

                        </el-tabs>
                    </div>
                </div>
    </div>
</template>   

<script>
export default {
        watch:{
            'tableData':function (newValue) {
                var allCount = 0
                var allPrice = 0
                for(var i = 0;i<newValue.length;i++){
                    allCount += newValue[i].count
                }
                for(var i = 0;i<newValue.length;i++){
                    allPrice += (newValue[i].price * newValue[i].count )
                }
                this.totalCount = allCount
                this.totalMoney = allPrice
            }
        },
        data(){
            return{
                activeName2:'first',
                isCollapse:false,
                icon:'el-icon-s-unfold',
                activeName:'first',
                totalCount:0,
                totalMoney:0,
                tableData:[],
                oftenGoods:[
                    {
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
                    }

                ],
                type0Goods:[{
                    goodsId:1,
                    goodsImg:'http://img0.imgtn.bdimg.com/it/u=402073944,4068048520&fm=26&gp=0.jpg',
                    goodsName:'香辣鸡腿堡',
                    price:18
                },{
                    goodsId:2,
                    goodsImg:"http://img5.imgtn.bdimg.com/it/u=2331244070,444133857&fm=26&gp=0.jpg",
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsImg:"http://img3.imgtn.bdimg.com/it/u=2073900585,2423507122&fm=26&gp=0.jpg",
                    goodsName:'和风汉堡',
                    price:15
                }],
                type1Goods:[],
                type2Goods:[],
                type3Goods:[]
            }
        },
        methods:{
            addGoodsItem(goods){
                var isHas = this.tableData.some(item=>{
                    return item.goodsId == goods.goodsId
                })

                if(isHas){
                    var index = this.tableData.findIndex(item=>{
                        return  item.goodsId == goods.goodsId
                    })
                    this.tableData[index].count ++
                    this.allCount()
                }else{
                    let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
                    this.tableData.push(newGoods)
                }
            },
            delAllGoods(){
                    this.tableData = [];
                    this.totalCount = 0;
                    this.totalMoney = 0
            },
            checkout(){
                if(this.tableData.length != 0){
                    this.tableData = [];
                    this.totalCount = 0;
                    this.totalMoney = 0;
                    this.$message({
                        message: '结账成功，感谢你又为店里出了一份力!',
                        type: 'success'
                    });
                }else{
                    this.$message.error('不能空结。老板了解你急切的心情！');

                }
            },
            handleClick(row) {
                var index = 0
                this.totalCount = this.totalMoney = 0
                for(var i = 0;i<this.tableData.length;i++){
                    if(row.goodsId == this.tableData[i].goodsId){
                        index = i
                        break;
                    }
                }
                this.tableData[index].count ++
                this.allCount()
            },
            decrease(row){
                var index = this.tableData.findIndex(item=>{
                    return item.goodsId == row.goodsId
                })
                this.tableData.splice(index,1)
            },
            allCount(){
                var allCount = 0;
                var allPrice = 0;
                this.tableData.forEach(item=>{
                    allCount += item.count
                    allPrice += item.price * item.count
                })
                this.totalCount = allCount
                this.totalMoney = allPrice

            }
        }
    }
</script>

<style lang="scss" scoped>

  
        .right{
            /*height: 100%;*/
            flex: 1;
        }
        .header{
            height: 7%;
            background: #3a3f51;
            display: flex;
            align-items: center;
            padding: 0 20px;
            font-size: 24px;
            color: #ffffff;
        }
    
    .main-content{
        display: flex;
        height: 93%;
        box-sizing: border-box;

        .main-left{
            width: 27%;
            border-right: 2.5px solid #f6f6f6;
            background: #fbfcfe;
        }
        .main-right{
            flex:1;
            background-color: #f3f5fa;
        }
    }
    .totalDiv{
        background-color: #fff;
        padding: 10px;
        border-bottom: 1px solid #D3DCE6;
        text-align: center;
    }
    .often-goods{
        height:39px;
        background:#e8e8e8;
        line-height:39px;
    }
    .goods-list{
        padding: 30px;
    }
    .goods-list ul >li{
        display: inline-block;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 10px;
        background-color: #FFFFFF;
        cursor: pointer;
    }
    .goods-list ul li > span{
        color: #57c9ee;
    }
    .cookList{
        overflow: hidden;
        padding: 30px;
    }
    .cookList >li{
        width: 190px;
        height: 70px;
        float: left;
        overflow: hidden;
        background: #FFFFFF;
        cursor: pointer;
        margin: 0 5px;
        padding: 2px;
        border: rgba(0,0,0,0.1) solid 0.6px;
    }
    .cookList >li>span{float: left}
    .foodImg{
        width: 80px;
        height: 100%;
    }
    .foodImg>img{
        height: 100%;
    }
    .foodName{
        margin: 10px;
        color: darkred;
    }
    .foodPrice{margin-left: 10px}
</style>