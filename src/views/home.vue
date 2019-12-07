<template>
    <div class="wrapper">
       <div class="col aside">
           <div class="collect_money" v-if="isCollapse">
               <p>收银</p>
               <span>系统</span>
           </div>
             <div class="collect_money" v-else>
               收银系统
           </div>
            <el-menu
                    router
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
                    :collapse-transition='true'
                    default-active="/home/collect"
                    background-color="#3a3f51"
                    text-color="#fff"
                    mode="vertical"
            >
            <el-submenu index="1" >
                <template slot="title">
                <i class="iconfont icon-goumai"></i>
                    <span slot="title">首页</span>
                </template>
               
                <el-menu-item index="/home/collect">收银</el-menu-item>
                
                    
                    <el-menu-item index="/home/test">选项2</el-menu-item>
                

            </el-submenu>
   <el-menu-item index="2">
                    <i class="iconfont icon-dianpu"></i>
                    <span slot="title">店铺</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="iconfont icon-hanbao"></i>
                    <span slot="title">商品</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="iconfont icon-huiyuanqia"></i>
                    <span slot="title">会员</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="iconfont icon-zuanshi"></i>
                    <span slot="title">统计</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="iconfont icon-gongnengjianyi"></i>
                    <span slot="title">设置</span>
                </el-menu-item>
                    
            </el-menu>
       </div>
        <div class="col right">
            <div class="header">
               <span style="margin-right:20px" @click="changDirection">
                    <i style="color:#000" :class="icon"></i>
               </span>
               <el-breadcrumb style="color:#ffffff" separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :key="index" v-for="(item,index) in matched">{{item.meta.title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="main-content">
               <!-- <div class="main-left">
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
                </div> -->
               <transition name='my' mode="out-in">
                <router-view></router-view>
               </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        watch:{
            '$route':function(value){
                this.matched = value.matched.slice(1)
            }
        },
        data(){
            return{
                activeName2:'first',
                isCollapse:false,
                icon:'el-icon-s-unfold',
                activeName:'first',
                matched:[]
            }
        },
        methods:{
           changDirection(){
                this.isCollapse = !this.isCollapse
                if (this.isCollapse){
                    this.icon = 'el-icon-s-fold'
                }else{
                    this.icon = 'el-icon-s-unfold'
                }
            }
        },
        mounted(){
            this.$router.push('/home/collect')
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        
        .collect_money{
             color: #fff;
             text-align: center;
             font-weight: bolder;
             font-size: 20px;
             padding: 10px 0;
            
        }
        width: 100%;
        height: 100%;
        display: flex;
        /*align-items:stretch;*/
        .el-menu{border: none;}
        .is-active{color:#409EFF!important; }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
        .aside{
         
            background: #3a3f51;
        }
        .right{
            /*height: 100%;*/
            flex: 1;
        }
        .header{
            height: 7%;
            background: #ffffff;
            display: flex;
            align-items: center;
            padding: 0 20px;
            font-size: 24px;
            color: #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: absolute;
            z-index: 11;
            width: 100%;
        }
    }
    .main-content{
        display: flex;
        height: 93%;
        // box-sizing: border-box;
        padding-top: 52px;
        .main-left{
            width: 27%;
            border-right: 2.5px solid #f6f6f6;
            background: #fbfcfe;
            position: relative;
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
    .my-enter,.my-leave-to{opacity: 0}
    .my-enter-active,.my-leave-active{transition:opacity 0.3s ease-in-out;}
</style>