
function LoginComponent(){

    return(

        <div>
            <center>
            <h2 style={{color : "red" }}>Login</h2>

            <label htmlFor="user_id">Email Id</label>
            <br/>

            <input type="text" name="email"></input>
            <br/><br/>


            <label htmlFor="password">Password</label>
            <br/>

            <input type="text" name="password"></input>
            <br/><br/>


            <a href="/user"><button type="button" >Login</button></a>

            <p><a href="/register">Register</a></p>
            

            </center>


</div>
    )
}

export default LoginComponent