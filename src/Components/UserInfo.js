function UserInfo(){

    return(

        <div style={{border:"1px dotted black"}}>
            {/* <img src="E:\Full_Stack_Java\sam\MiniProject_1_React\miniproject_1\src\Project\fire.png" ></img> */}
            
            <center>


        <p>Welcome</p>
        

        <h3 style = {{ color:" lime;"}}> Tasks</h3>

        <a href="/addtask"><button type="button" >Add Task</button></a>
        <br/>
        <br/>

        <input type="text" placeholder="Search" required></input>
        <button type="button">Search</button>

        <br/>
        <br/>
        <table>
        <tr>

        <th>Sr.No.</th>
        <th>Task</th>
        <th>Date</th>
        <th>Status</th>

        </tr>
        <br/>
        <tr>

        <td>01</td>
        <td>Abc</td>
        <td>1/1/2021</td>
        <td>Complete</td>

        </tr>

        </table>

        </center>
        </div>
    )
}

export default UserInfo