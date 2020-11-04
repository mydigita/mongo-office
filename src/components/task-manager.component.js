import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";


export default function TaskManager(){
    return(
        <div className="body-part">
            <div>
                <h1 className="text-center">Task Manager</h1>
                <hr/>
            </div>
            <div>
            <ul class="nav nav-tabs pt-2">
                <li class="nav-item">
                    <a class="nav-link active primary" data-toggle="tab" href="#view">View Task</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link warning" data-toggle="tab" href="#add">Add Task</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link danger" data-toggle="tab" href="#edit">Edit Task</a>
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
                            <form>
                                <div className="form-group">
                                    <label>Task name:</label>
                                    <input type="text" className="form-control" placeholder="Task title"/>
                                </div>
                                <div className="form-group">                                   
                                    <label>Task details:</label>
                                    <input type="text" className="form-control" placeholder="Task details"/>
                                </div>
                                <div className="form-group">                                    
                                    <label>Assigned to:</label>
                                    <input type="text" className="form-control" placeholder="Assigned to"/>
                                </div>
                                <div className="form-group">
                                    <label>Created by:</label>
                                    <input type="text" className="form-control" placeholder="Created by"/>
                                </div>
                                <div className="form-group">
                                    <label>Deadline:</label>
                                    <input type="text" className="form-control" placeholder="Deadline"/>
                                </div>
                                <div className="form-group">
                                    <label>Status:</label>
                                    <input type="text" className="form-control" placeholder="Status"/>
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