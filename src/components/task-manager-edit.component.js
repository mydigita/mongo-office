import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function EditTask(){
    const taskId = window.location.href.split('/').reverse()[0];
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [assignedTo, setAssignedTo] =  useState("");
    const [deadline, setDeadline]= useState("");
    const [progress, setProgress]= useState("");
    const [editPassword, setEditPassword]= useState("");
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/mongo-office/task-manager/edit/${taskId}`)
        .then(data=>{
            if(data){
                setTitle(data.data.title);
                setDetails(data.data.details);
                setAssignedTo(data.data.assignedTo);
                setDeadline(data.data.deadline);
                setProgress(data.data.progress);

            }
        })
        .catch(err=>window.alert(err))
    },[]);

    function onChangeEditDetails(e){
        setTitle(e.target.value)
    }
    function onChangeEditProgress(e){
        setProgress(e.target.value);
    }
    function onChangeEditAssignedTo(e){
        setAssignedTo(e.target.value);
    }
    function onChangeEditDeadline(e){
        setDeadline(e.target.value);
    }
    function onSubmitSaveTask(e){
        e.preventDefault();
    }

    return(
        <div className="body-part">
            <h1>Edit Task </h1>
            <div>
                <form onSubmit={onSubmitSaveTask}>
                    <h3>{title}</h3>
                    <div className="form-group">
                        <label>Task Details : </label>
                        <textarea className="form-control" rows="5" cols="10" onChange={onChangeEditDetails}>hello</textarea>
                    </div>
                    <div className="form-group">
                        <label>Progress: </label>
                        <input type="text" className="form-control" value={progress} onChange={onChangeEditProgress}/>
                    </div>
                    <div className="d-flex justify-content-start flex-wrap">
                        <div className="form-group">
                            <label>Assigned to: </label>
                            <input className="form-control" type="text" value={assignedTo} onChange={onChangeEditAssignedTo}/>
                        </div>
                        <div className="form-group">
                            <label>Deadline: </label>
                            <input className="form-control" type="text" value={deadline} onChange={onChangeEditDeadline}/>
                        </div>
                        <div className="form-group">
                            <label>Edit password: </label>
                            <input type="password" placeholder="Enter edit permission key / password" className="form-control"/>                     
                        </div>
                    </div>
                               
                    <button type="submit" className="btn btn-primary">Save</button>
                   
                </form>
            </div>
        </div>
    );
}