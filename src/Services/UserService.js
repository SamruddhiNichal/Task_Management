import http from '../HttpCommon'
const registerUser = userData =>{
    return http.post("/saveUser",userData)
}
export default {registerUser}