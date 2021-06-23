import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import TaskService from "../Services/TaskService"

function AddTask(){

    const history = useHistory();

    const location = useLocation();
    
    const taskObj ={
        taskName :"",
        taskInfo:"",
        date : ""
    }
    const [task , setTask] = useState(taskObj)

    const onChange=(event)=>{
        setTask({...task,[event.target.name]:event.target.value})
    }

    const saveTask =(e)=>{
        e.preventDefault()
        TaskService.addTask(task)
        .then(response=>{
            console.log(response.data)
            document.getElementById("ide1").innerHTML=response.data
            e.target.reset();
        })
    }

    const back=()=>{
        history.push({pathname:'/user' , state:{userName:location.state.userName}})
    } 

    return(

        <div>
            <center>
            <h2>Add Task</h2>
            <br/>
            <br/>

            <form onSubmit={saveTask}>
            
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

            <button id = "i1" type="submit">Add</button>
            &nbsp; &nbsp;
            <button onClick={back}>Back</button>

            </form>

            <br/>
            <br/>
            <h2 id="ide1"></h2>

            

            </center>

        </div>
    )
}

export default AddTask