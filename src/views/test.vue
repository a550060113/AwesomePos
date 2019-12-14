<template>
    <div class="container" style="padding: 20px">
    <h1>接口API测试</h1>
    <button @click="getData">获取</button>
    </div>
</template>

<script>
export default {
    methods:{
        getWeather(){
            this.$get('/weather/index',{
                cityname:'台州',
                key:'9f9af9a56ca48c94f0bb4f3d746824f8'
            }).then(res=>{
                console.log(res)
            },err=>{
                console.log('test',err.response)
            })
        },
        getData(){
            this.$post('/Pos/src/servlet/LogingServlet.java',{
                userName:'admin',
                password:123456
            }).then(res=>{
                console.log(res)
            })
        }
    },
    mounted() {
        this.$store.dispatch('aaa')
    }
}
</script>

