import http from '../HttpCommon'

const addTask = taskData=>{
    return http.post("/addTask" , taskData)
}

const getAllTask=()=>{
    return http.get("/getAllTask")
}

const findTask=search=>{
    return http.get(`/findTask/${search}`)
}

const updateTask=(id , task)=>{
    return http.put(`/updateTask/${id}` , task)
}

const deleteTask=id=>{
    return http.put(`/deleteTask/${id}`)
}

export default {
    addTask ,
    getAllTask ,
    findTask ,
    updateTask ,
    deleteTask
}
    

  
       

  
