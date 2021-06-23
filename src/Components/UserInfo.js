import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom";
import TaskService from "../Services/TaskService"
import Select from 'react-select'


function UserInfo(){

    const history = useHistory();

    const location = useLocation();

    console.log(location.state.userName);

   const [tasks , setTasks] = React.useState([])

   useEffect(()=>{
       TaskService.getAllTask()
       .then(response=>response.data)
        .then(res=>{
           console.log(res)
            setTasks(res)
       })
   },[])

   const addTaskButton=()=>{
        history.push({pathname:'/addtask' , state:{userName:location.state.userName}})
   }

   const [options , setOptions] = useState([])

   const handleChange=(x)=>{
       console.log(x);
        TaskService.findTask(x)
        .then(res=>{
            setOptions(res.data)
            console.log(res.data);
        })
   }

   const updateTask=(id)=>{
       history.push({pathname:'/updatetask' , state:{id:id , userName:location.state.userName }})
   }

   const deleteTask=id=>{
       TaskService.deleteTask(id)
       window.location.reload(false);
   }

   const logout=()=>{
       history.replace("/")
       //history.go(1)
    }
   
    return(

        <div >
            
            <center>


        <h2 id ="u1"> Welcome , {location.state.userName} </h2>
        <right>
        <button type="button" id="btnlog"  onClick={logout}>LogOut</button>
        </right>
        <h1  > Tasks</h1>
        <br/>
        
        

        <button id= "user1" type="button" onClick={addTaskButton}>Add Task</button>
        <br/>
        <br/>

        <Select 
            options={options} 
            onInputChange={handleChange}/>

        {/* <button id="u2" type="button" onClick={onClick}>Search</button> */}

        <br/>
        <br/>
        <br/>
        <br/>
        <table >

        <tr>
            <th>Sr.No.</th>
            <th>Task</th>
            <th>Task Info</th>
            <th>Date</th>
            <th>Action</th>
    
        </tr>
            {
            tasks.map((task)=>(
            <tr>
                <td key={task.id}>{task.id}</td>
                <td>{task.taskName}</td>
                <td>{task.taskInfo}</td>
                <td>{task.date}</td>
                <td>
                    <button id = "btn5" type="button" onClick={()=>updateTask(task.id)}>Update</button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button  id = "btn6" type="button" onClick={()=>deleteTask(task.id)}>Delete</button>
                </td>
            </tr>
            ))
            }

        </table>

        </center>
        </div>
    )
}

export default UserInfo