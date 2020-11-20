import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function EditTask(){
    const taskId = window.location.href.split('/').reverse()[0];
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [assignedTo, setAssignedTo] =  useState("");
    const [deadline, setDeadline]= useState(new Date());
    const [progress, setProgress]= useState("");
    const [editPassword, setEditPassword]= useState("");
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/mongo-office/task-manager/edit/${taskId}`)
        .then(data=>{
            if(data){
                setTitle(data.data.title);
                setDetails(data.data.details);
                setAssignedTo(data.data.assignedTo);
                setDeadline(new Date(data.data.deadline));
                setProgress(data.data.progress);
            }
        })
        .catch(err=>window.alert(err))
    },[taskId]);

    function onChangeEditDetails(e){
        setDetails(e.target.value)
    }
    function onChangeEditProgress(e){
        setProgress(e.target.value);
    }
    function onChangeEditAssignedTo(e){
        setAssignedTo(e.target.value);
    }
    function onChangeEditDeadline(e){
        if(e> new Date()){
            setDeadline(e);
        }else{
            setDeadline(new Date());
        }
    }
    function onSubmitSaveTask(e){
        e.preventDefault();
        const updateData = {
            details,
            assignedTo,
            progress,
            deadline
        }
        axios.post(`http://localhost:5000/mongo-office/task-manager/edit/save/${taskId}/${editPassword}`, updateData)
        .then(data=>{window.alert(data.data); window.location.assign('/mongo-office/task-manager/');})
        .catch(err=>window.alert(err));
    }
    function onChangeEditPassword(e){
        setEditPassword(e.target.value);        
    }
    function onClickCloseTask(e){       
        const updateData ={status:'closed'};
        axios.post(`http://localhost:5000/mongo-office/task-manager/edit/close/${taskId}/${editPassword}`, updateData)
        .then(data=>{window.alert(data.data); window.location.assign('/mongo-office/task-manager/');})
        .catch(err=>window.alert('Please enter correct information!'));
    }
    function onClickDeleteTask(){
        const updateData ={status:'deleted'};
        axios.post(`http://localhost:5000/mongo-office/task-manager/edit/delete/${taskId}/${editPassword}`, updateData)
        .then(data=>{window.alert(data.data); window.location.assign('/mongo-office/task-manager/');})
        .catch(err=>window.alert(!editPassword?'Please enter password!':'Wrong password!'));

    }

    return(
        <div className="body-part pt-4">
            <h4 className="text-muted text-center">Edit/ Save/ Close/ Delete Task </h4> 
            <div className="p-3 form-light">
                <form onSubmit={onSubmitSaveTask}>
                    <h4>{title}</h4>
                    <div className="form-group">
                        <label>Task Details : </label>
                        <textarea className="form-control" rows="5" cols="10" onChange={onChangeEditDetails} value={details} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Progress: </label>
                        <input type="text" className="form-control" value={progress} onChange={onChangeEditProgress} required/>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                            <label>Assigned to: </label>
                            <input className="form-control" type="text" value={assignedTo} onChange={onChangeEditAssignedTo} reqired/>
                        </div>
                        <div className="form-group">
                            <label>Deadline: </label><br/>
                            <DatePicker selected={deadline} onChange={onChangeEditDeadline} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Edit password: </label>
                            <input type="password" maxLength="4" minLength="4" onChange={onChangeEditPassword} placeholder="Enter edit permission key / password" className="form-control" required/>   
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-success">Save Task</button>
                        <button type="button" className="btn btn-warning" onClick={onClickCloseTask}>Close Task</button>
                        <button type="button" className="btn btn-danger" onClick={onClickDeleteTask}>Delete Task</button>
                        <button type="button" className="btn btn-info" onClick={()=>{return window.location.assign('/mongo-office/task-manager/')}}>Go Back</button>
                    </div>
                   
                </form>
            </div>
        </div>
    );
}