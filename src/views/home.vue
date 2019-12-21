<template>
    <div class="wrapper">
       <div class="col aside hidden-xs-only">
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
                    :default-active="$route.path"
                    background-color="#3a3f51"
                    text-color="#fff"
                    mode="vertical"
            >
            <el-submenu index="1" >
                <template slot="title">
                <i class="iconfont el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </template>

                <el-menu-item index="/home/collect">收银</el-menu-item>


                    <el-menu-item index="/home/test">测试</el-menu-item>


            </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="iconfont icon-hanbao"></i>
                        <span slot="title">商品</span>
                    </template>
                    <el-menu-item index="/home/goodsTable">
                        表格
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="/home/statistics">
                    <i class="iconfont icon-tubiao"></i>
                    <span slot="title">统计</span>
                </el-menu-item>

                <el-menu-item index="2">
                    <i class="iconfont icon-dianpu"></i>
                    <span slot="title">店铺</span>
                </el-menu-item>



                <el-menu-item index="4">
                    <i class="iconfont icon-huiyuanqia"></i>
                    <span slot="title">会员</span>
                </el-menu-item>

                <el-menu-item index="6">
                    <i class="iconfont icon-gongnengjianyi"></i>
                    <span slot="title">设置</span>
                </el-menu-item>

            </el-menu>
       </div>
        <div class="col right">
            <div class="header">
               <span style="margin-top: -4px;margin-right:20px" @click="changDirection">
                    <i style="font-size:19px;color:#606266" :class="icon"></i>
               </span>
               <el-breadcrumb style="color:#ffffff" separator="/">
                <el-breadcrumb-item :to="{ path: '/home/collect' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :key="index" v-for="(item,index) in matched">{{item.meta.title}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div style="position:absolute;right:50px">
                    <i @click="getFullCreeen" style="" class="el-icon-full-screen"></i>
                    <el-dropdown style="position:absolute;width:65px;right:32px;top:17px">
                    <span class="el-dropdown-link">
                        {{this.getName}}<i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="gotoHomepage" icon="el-icon-s-home" >
                            首页
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-s-custom">我的主页</el-dropdown-item>
                        <el-dropdown-item @click.native="logOut" icon="el-icon-position" divided>退出</el-dropdown-item>
                        </el-dropdown-menu>
                 </el-dropdown>
                 <el-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>

            </div>

            <div class="main-content">
               <transition name='my' mode="out-in">
                <router-view></router-view>
               </transition>

            </div>
        </div>
    </div>
</template>

<script>
    import {deleteStore} from '@/commen/mUtils'
    import {mapGetters} from 'vuex'
    export default {
        watch:{
            '$route':function(value){
                this.matched = value.matched.slice(1)
            }
        },
        data(){
            return{
                isCollapse:false,  //是否展开菜单
                icon:'el-icon-s-unfold', //图标
                activeName:'first', //sideMenu默认选择
                matched:[], //面包屑
                n:0         //判断全屏
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
            },
        getFullCreeen(){
            this.n++;
            this.n%2==0?
            this.outFullCreeen(document):this.inFullCreeen(document.documentElement)
        },
        inFullCreeen(element){
            let el = element;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
                el.mozRequestFullScreen || el.msRequestFullScreen;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        outFullCreeen(element){
            let el = element;
            let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
                el.mozCancelFullScreen || el.exitFullScreen;
            if (typeof cfs != "undefined" && cfs) {
                cfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        gotoHomepage(){
            this.$router.push('/home/collect')
        },
        logOut(){
            deleteStore('user')
            this.$router.push('/login')
            }
        },
    mounted(){
       this.gotoHomepage()
    },
    computed:{
            ...mapGetters(['getName'])
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
        min-width: 1086px;
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
            height: 100%;
            position: relative;
            width: 100%;
            flex: 1;
        }
        .header{
            height: 50px;
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
            box-sizing: border-box;
        }
    }
    .main-content{
        height: calc(100% - 50px);
        padding-top: 52px;
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;

    }

    .my-enter,.my-leave-to{opacity: 0}
    .my-enter-active,.my-leave-active{transition:opacity 0.3s ease-in-out;}


    .el-icon-full-screen{
            font-size:18px;color:#606266;position: absolute;right: 110px;z-index: 2121;color: #000;top: 16px;
    }
</style>
