<template>
    <div class="wrapper">
        <transition name="my">
            <div class="userForm" v-if="show">
                <el-form ref="ruleForm" label-width="65px" :model="user" :rules="rules" >
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="psd">
                        <el-input show-password v-model="user.psd"></el-input>
                    </el-form-item>
                </el-form>
                <drag @changeDrag="overHandle"></drag>
                <el-button @click="submitForm('ruleForm')" size="medium" type="primary" round>登录</el-button>
            </div>
        </transition>
        <div class="bg"></div>

    </div>
</template>

<script>
    import drag from '@/commens/drag'
    export default {
        components:{
            drag
        },
        methods:{
            //判断滑块有无滑到底
            overHandle(){
                this.isover = true
                console.log(this.isover)
            },
            //登录校验
            submitForm(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid && this.isover){
                        this.$message({
                            message: '恭喜你，这是一条成功消息',
                            type: 'success'
                        })
                    }
                })
            }
        },
        data(){
            return{
                show:false,
                isover:false,
                user:{
                    name:'',
                    psd:'',
                },
                rules:{
                    name:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    psd:[{ required: true, message: '请输入密码', trigger: 'blur' }]
                }
            }
        },
        mounted() {
            this.show = true
        }
    }
</script>

<style lang="scss" scoped>
   .wrapper{
       min-width: 620px;
       position: relative;
       height:100%;
       width: 100%;
       background: #4896e0;
       .userForm{
           position: absolute;
           width: 320px;
           height: 260px;
           background: #FFFFFF;
           border-radius: 20px;
           box-shadow: 0 0 7px #666666;
           top: 100px;
           right: 140px;
           padding: 30px 20px 30px 10px ;
           .is-round{
               width: 314px;
               height: 42px;
               margin: 20px 0 0 10px;
           }
       }
       .bg{
           width: 100%;
           height: 100%;
           background-image: url("../assets/bg1.png");
           background-size: 50%;
           background-repeat: no-repeat;
           background-position: 25px;
       }
   }
    .my-enter{
        opacity: 0;
        transform: translateY(-88px);
    }
    .my-enter-active{
        transition: all 1s ease;
    }
</style>
