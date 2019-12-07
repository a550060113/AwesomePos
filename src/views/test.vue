<template>
    <div>
    <h1>测试</h1>
    <button @click="getWeather">获取</button>
    </div>
</template>

<script>
export default {
    methods:{
        getWeather(){
            this.$get('/weather/inde',{
                cityname:'台州',
                key:'9f9af9a56ca48c94f0bb4f3d746824f8'
            }).then(res=>{
                console.log(res)
            },err=>{
                console.log('test',err.response)
            })
        }
    }
}
</script>

