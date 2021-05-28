import { useState } from "react"
import UserService from "../Services/UserService"

function RegisterComponent(){

    const userObj ={
        name : "",
        email : "",
        password : "",
        mobileNo : ""
    }

    const [user , setUser]= useState(userObj)

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const saveUser=(e)=>{
        e.preventDefault()
        console.log(user);
     UserService.registerUser(user)
     .then(response=>console.log(response.data))
     //.then(res=>console.log(res))   
    }

    return(

        <div>
            <center>
            <h2>Register</h2>

            <form onSubmit={saveUser}>

            <label htmlFor="name">Name : </label>
            <input type="text" name="name" onChange={onChange}></input>
            <br/>
            <br/>

            <label htmlFor="email">Email : </label>
            <input type="text" name="email"  onChange={onChange} ></input>
            <br/>
            <br/>

            <label htmlFor="password">Password : </label>
            <input type="text" name="password"  onChange={onChange} ></input>
            <br/>
            <br/>

            <label htmlFor="mobileNo">Mobile No : </label>
            <input type="text" name="mobileNo"  onChange={onChange} ></input>
            <br/> 
            <br/> 

            <input type="submit" value="Submit" ></input>

            </form>
            
            </center>

            
        </div>
    )
}

export default RegisterComponent