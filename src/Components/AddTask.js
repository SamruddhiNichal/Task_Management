function AddTask(){

    return(

        <div>
            <center>
            <h2>Add Task</h2>

            Task <input type="text" name="task"></input>
            <br/>
            <br/>
            
            Date<input type="date" name="date"></input>
            <br/>
            <br/>

            <button type="button">Add</button>
            &nbsp; &nbsp;

            <a href="/user"><input type="button" value="Back"/></a>

            </center>

        </div>
    )
}

export default AddTask