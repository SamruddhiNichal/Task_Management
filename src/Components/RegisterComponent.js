import { useState } from "react"
import UserService from "../Services/UserService"
import { useHistory } from "react-router-dom"

function RegisterComponent(){

    const history = useHistory();
    
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
     .then(response=>{
         console.log(response.data)
         if(response.data!=""){
            document.getElementById("id1").innerHTML="Click here to login..."
            var button = document.createElement("button")
            button.innerHTML="login"
            var c = document.getElementById("id2")
            c.appendChild(button)
            button.addEventListener("click" , function(){
                history.push('/')
            })
        }
        e.target.reset();
        })
        
    }

    return(

        <div id ="regdiv">
            <center>
            <h1>Register</h1>
            <br/>
            <br/>

            
            <form onSubmit={saveUser}>

            <label className="reglabel" htmlFor="name">Name : </label>
            <br/>
            
            <input className="reginput" type="text" name="name" onChange={onChange} required></input>
            <br/>
            <br/>

            <label className="reglabel" htmlFor="email">Email : </label>
            <br/>
        
            <input className="reginput" type="text" name="email"  onChange={onChange} required ></input>
            <br/>
            <br/>

            <label className="reglabel" htmlFor="password">Password : </label>
            <br/>
            
            <input className="reginput" type="password" name="password"  onChange={onChange} required ></input>
            <br/>
            <br/>

            <label className="reglabel" htmlFor="mobileNo">Mobile No : </label>
            <br/>

            <input className="reginput" type="text" name="mobileNo"  onChange={onChange} required ></input>
            <br/> 
            <br/> 
            <br/> 

            <input id="regsubmit" type="submit" value="Submit" ></input>

            <h2 id="id1"></h2>
            <br/>
            <h2 id="id2"></h2>
            <br/>
            <br/>
            <br/>
            <br/>

            </form>
            
            </center>

            
        </div>
    )
}

export default RegisterComponent