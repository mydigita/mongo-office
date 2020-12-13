import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function TaskManager(){
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [assignedTo, setAssignedTo] =  useState("");
    const [deadline, setDeadline]= useState(new Date());
    const [editPassword, setEditPassword]= useState("");
    const [taskRecord, setTaskRecord] = useState("");
    const [taskArchive, setTaskArchive] = useState("");
    const progress = 'No progress recorded';
    const status = 'open';
    const username = localStorage.getItem('user');
    const userid= localStorage.getItem('userid');
    
    
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
        if(e>new Date()){
            setDeadline(e);
        }else{
            setDeadline(new Date());
        }
    }
    function onChangeEditPassword(e){
        setEditPassword(e.target.value);
    }


    useEffect(()=>{
        // view tasks
        axios.get(`http://localhost:5000/mongo-office/task-manager/view/${username}/${userid}`)
        .then(data=>{
            setTaskRecord(data.data.reverse().filter(e=>e.status==='open').map(e=>{
                function editPath(){
                    return window.location.assign(`/mongo-office/task-manager/edit/${e._id}`);
                }

                function actionToEdit(){
                    editPath();                 
                }               
                
                return(
                    <div className="shadow single-task">
                        <h5>{e.title} 
                            <span><button className="btn btn-default text-primary" onClick={actionToEdit} >Edit</button></span>
                        </h5>
                        <p>Task details: {e.details}</p>
                        <p>Progress: {e.progress}<br/>Deadline: {e.deadline.substring(0,10)}, Assigned to: {e.assignedTo}</p>
                    </div>
                );
            }));

            setTaskArchive(data.data.filter(e=>e.status==='closed').map(e=>{
                
                return(
                    <div className="shadow single-task">
                        <h6 className="text-muted">{e.title} ({e.status})</h6>
                        <p className="text-muted">Task details: {e.details}</p>
                        <p className="text-muted">Progress: {e.progress}<br/> Deadline: {e.deadline.substring(0,10)}, Assigned to: {e.assignedTo} </p>
                    </div>
                );
            }));            
        })
        .catch(err=>window.alert(err))
    }, [username, userid]);
   

    // add task 
    function onSubmitAddTask(e){
        e.preventDefault();
        const taskData = {           
            title,
            details,
            assignedTo,
            deadline,
            progress,
            status,          
            editPassword
        };        
              
        axios.post(`http://localhost:5000/mongo-office/task-manager/add/${username}/${userid}`, taskData)
        .then((data)=>{window.alert(data.data); window.location.assign('/mongo-office/task-manager')})
        .catch(err=>window.alert(err));
        
    }

   
    return(
        <div className="body-part">
            <div>
            <h1 className="text-center text-muted">Task Manager</h1>
                <hr/>
            </div>
            <div>
            <ul className="nav nav-tabs pt-2">
                <li className="nav-item">
                    <a className="nav-link active primary" data-toggle="tab" href="#view">View Task</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link warning" data-toggle="tab" href="#add">Add New Task</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link danger" data-toggle="tab" href="#archive">Task Archive</a>
                </li>
            </ul>

                <div className="tab-content">
                    <div id="view" className="tab-pane active">
                        <div>{taskRecord}</div>
                    </div>
                    <div id="add" className="tab-pane fade pt-3">
                        <h3 className="text-secondary">Add New Task</h3>
                        <div className="form-light p-3">
                            <form onSubmit={onSubmitAddTask}>
                                <div className="form-group">
                                    <label>Task name / title:</label>
                                    <input type="text" className="form-control" placeholder="Task title" onChange={onChangeTitle} required/>
                                </div>
                                <div className="form-group">                                   
                                    <label>Task details:</label>
                                    <textarea type="text" rows="5" cols="10" className="form-control" placeholder="Task details" onChange={onChangeDetails} required></textarea>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="form-group">                              
                                        <label>Assigned to:</label>
                                        <input type="text" className="form-control" placeholder="Assigned to" onChange={onChangeAssignedTo} required/>
                                    </div>          
                                    <div className="form-group">
                                        <label>Deadline:</label><br/>
                                        <DatePicker selected={deadline} onChange={onChangeDeadline} className="form-control text-danger" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Edit protection password: </label>
                                        <input type="password" maxLength="4" minLength="4" className="form-control" placeholder="4 digit password" onChange={onChangeEditPassword} required/>
                                    </div>
                                </div>                            
                                <div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="archive" className="tab-pane fade">
                        <div>{taskArchive}</div>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

