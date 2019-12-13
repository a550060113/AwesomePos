import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from "./action";
import getters from "./getters";

Vue.use(Vuex)

const state = {
    adminName:'admin',   //管理员
    password:'123456'
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

})

export default store
