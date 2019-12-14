export default {
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
    }
}
