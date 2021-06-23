import React, { useState } from 'react'
import { useHistory , useLocation } from 'react-router-dom'
import TaskService from '../Services/TaskService';


function UpdateTask() {

    const location = useLocation();

    const history = useHistory();

    //console.log(location.state.id);

    //const id = location.state.id;

    const updateObj={
        taskName : "" ,
        taskInfo : "",
        date : ""
    }

    const [update , setUpdate] = useState(updateObj)

    const onChange=(e)=>{
        e.preventDefault();
        setUpdate({...update , [e.target.name] : e.target.value})
    }

    const updateTask=()=>{
        TaskService.updateTask(location.state.id , update)
        
        history.push({pathname:'/user' , state:{userName:location.state.userName}})
        window.location.reload(false);
    }
    return (
        <div>
            <center>
            <form onSubmit={updateTask}>
            
            <label id= "labl1" >Task Name</label>
            <br/>
            <br/>
            
            <input id= "intput1" type="text" name="taskName" onChange ={onChange}></input>
            <br/>
            <br/>

            <label id= "labl1">Task Info</label>
            <br/>
            <br/>

            <input id= "intput1" type="text" name="taskInfo" onChange ={onChange}></input>
            <br/>
            <br/>
            
            <label id= "labl1" >Date</label>

            <br/>
            <br/>

            <input id= "intput1" type="date" name="date" onChange ={onChange}></input>
            <br/>
            <br/>

            <button id = "i1" type="submit">Update</button>
            &nbsp; &nbsp;
            </form>
            </center>
        </div>
    )
}

export default UpdateTask
