import http from '../HttpCommon'

const registerUser = userData =>{
    return http.post("/saveUser",userData)
}

const login=logindetails=>{
    return http.post("/login" , logindetails)
}
export default {
    registerUser ,
    login
}