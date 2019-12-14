import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import goodsData from './modules/goodsData'

Vue.use(Vuex)


const store = new Vuex.Store({
    modules:{
        user,
        goodsData
    }

})

export default store
