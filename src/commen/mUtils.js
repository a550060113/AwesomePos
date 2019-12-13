//储存 localStorage

export const setStore = (name,value)=>{
    var key = localStorage.getItem(name)
    if(key) return
    localStorage.setItem(name,JSON.stringify(value))
}


//删除 localStore

export const deleteStore = (name)=>{
    var key = localStorage.getItem(name)
    if(!key) return
    localStorage.removeItem(name)
}


//获取localStore

export const getStore = (name) =>{
    var key = localStorage.getItem(name)
    if(!key)  return
    return JSON.parse(key)
}

