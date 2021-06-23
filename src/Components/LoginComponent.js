import { useState } from "react"
import UserService from "../Services/UserService"
import { useHistory } from 'react-router-dom';

function LoginComponent(){

    const history = useHistory();

    const loginObj={
        email:"",
        password:""
    }

    const [login , setLogin] = useState(loginObj)

    const onChange=(e)=>{
        e.preventDefault()
        setLogin({...login , [e.target.name]:e.target.value})
    }

    const onClick=(eve)=>{
        eve.preventDefault()
        console.log(login);
        UserService.login(login)
        .then(res=>{
            console.log(res.data);
            if(res.data!=""){
                history.push({pathname:'/user' , state:{userName:res.data.name}})
            }else{
                document.getElementById("p1id1").innerHTML="Invalid Credentials"
            }
        })
    }

    return(

        <div className="logindiv">
            <center>
            
            <img id= "loginimg" src ="./images/user0.png" alt=""/>
            
            <h1>Login</h1>
            <br/>
            <br/>
            <br/>

            <label className="loginlabel" htmlFor="user_id">Email Id</label>
            <br/>

            <input className = "loginInput" type="text" name="email" onChange={onChange}></input>
            <br/><br/>


            <label className="loginlabel" htmlFor="password">Password</label>
            <br/>

            <input className = "loginInput" type="password" name="password" onChange={onChange}></input>
            <br/>
            <br/>
            <br/>


            <button id="loginbutton" type="button" onClick={onClick}>Login</button>
            <br/>
            <br/>
            <h2 id="p1id1"></h2>
            <br/>
            <br/>

            <p><a id="loginanchor" href="/register">Register</a></p>
            <br/>
            <br/>
            <br/>
            </center>
            


</div>
    )
}

export default LoginComponent