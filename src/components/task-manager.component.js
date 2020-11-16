import React, {useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";


export default function TaskManager(){
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [assignedTo, setAssignedTo] =  useState("");
    const [deadline, setDeadline]= useState("");
    const progress = 'No progress recorded';
    const status = 'open';
    function onChangeTitle(e){
        setTitle(e.target.value);
    }
    function onChangeDetails(e){
        setDetails(e.target.value);
    }
    function onChangeAssignedTo(e){
        setAssignedTo(e.target.value);
    }
    function onChangeDeadline(e){
        setDeadline(e.target.value);
    }
   
    function onSubmitAddTask(e){
        e.preventDefault();
        const taskData = {           
            title,
            details,
            assignedTo,
            deadline,
            progress,
            status
        };
        const username = localStorage.getItem('user');
        const userid= localStorage.getItem('userid');
        const dataRequest = `http://localhost:5000/mongo-office/task-manager/add/${username}/${userid}`;
              
        axios.post(dataRequest, taskData)
        .then((data)=>window.alert(data.data))
        .catch(err=>window.alert(err))
    }
    return(
        <div className="body-part">
            <div>
            <h1 className="text-center">Task Manager</h1>
                <hr/>
            </div>
            <div>
            <ul className="nav nav-tabs pt-2">
                <li className="nav-item">
                    <a className="nav-link active primary" data-toggle="tab" href="#view">View Task</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link warning" data-toggle="tab" href="#add">Add Task</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link danger" data-toggle="tab" href="#edit">Edit Task</a>
                </li>
            </ul>

                <div className="tab-content">
                    <div id="view" className="tab-pane fade in active">
                        <h3>Task List</h3>
                        <p>Task</p>
                    </div>
                    <div id="add" className="tab-pane fade">
                        <h3>Add New Task</h3>
                        <div>
                            <form onSubmit={onSubmitAddTask}>
                                <div className="form-group">
                                    <label>Task name / title:</label>
                                    <input type="text" className="form-control" placeholder="Task title" onChange={onChangeTitle}/>
                                </div>
                                <div className="form-group">                                   
                                    <label>Task details:</label>
                                    <input type="text" className="form-control" placeholder="Task details" onChange={onChangeDetails}/>
                                </div>
                                <div className="form-group">                                    
                                    <label>Assigned to:</label>
                                    <input type="text" className="form-control" placeholder="Assigned to" onChange={onChangeAssignedTo}/>
                                </div>                                
                                <div className="form-group">
                                    <label>Deadline:</label>
                                    <input type="text" className="form-control" placeholder="Deadline" onChange={onChangeDeadline}/>
                                </div>                                
                                <div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="edit" className="tab-pane fade">
                        <h3>Edit Task</h3>
                        <p>Edit task</p>
                    </div>                   
                </div>
            </div>
        </div>
    );
}