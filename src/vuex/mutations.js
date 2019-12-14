import {setStore} from '@/commen/mUtils.js'

export default {
    recode_admin(state){
        var admin = localStorage.getItem('admin')
        if(!admin && localStorage){
            setStore('user',{adminName:state.adminName})
        }
    },
    delete_admin(state){
        var admin = localStorage.getItem('admin')
        if(admin && localStorage){
            localStorage.removeItem('user')
        }
    },
    update(state,data){
        state.tableData.push(data)
    }
}
