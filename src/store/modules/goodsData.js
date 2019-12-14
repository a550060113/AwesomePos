const state = {
    tableData:[{
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
const mutations = {
    //商品添加到现有
    update(state,data){
        state.tableData.push(data)
    }
}

const actions = {
    //入库商品
    action_upLoading({commit,state},data){
        return new Promise((resolve,reject)=>{
            var tableData = state.tableData
            var hasId = false
            var hasgoodsName = false
            tableData.forEach(item=>{
                if(item.goodsId == data.id){
                    hasId = true
                    return
                }
            })
            tableData.forEach(item=>{
                if(item.goodsName == data.goodsName){
                    hasgoodsName =  true
                    return
                }
            })
            if(!hasId){
                if (!hasgoodsName){
                    commit('update',{goodsId:data.id,goodsName:data.goodsName,price:data.goodsPrice})
                    resolve('成功入库')
                }else{
                    reject('商品名称重复')
                }
            }else{
                reject('商品Id重复')
            }
        })
    },
}

const getters = {
    //获取商品列表
    getTableData(state){
        return state.tableData
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
