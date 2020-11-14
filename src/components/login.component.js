import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function UserLogin(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [user, setUser] =  useState("");
    const [userid, setUserid]= useState("");
    

    function onChangeUsername(e){
        setUsername(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }


    function onSubmitUserLogin(e){
        e.preventDefault();
      
        axios.get(`http://localhost:5000/mongo-office/accounts/login/${username}/${password}`)
        .then((data)=>{
            if(data.data.username){
                setUserid(data.data.userid);
                setUser(data.data.username);                       
                window.location.assign('/mongo-office/task-manager/');
                
            }else{window.alert('incorrect information!')}
        })

        .catch(err=>window.alert(err))
                
    }


    if(!localStorage.getItem('userid')){
        localStorage.setItem('userid', userid);
    }
    if(!localStorage.getItem('user')){
        localStorage.setItem('user', user);
    }

    return(
        <div className="body-part login shadow">
            <h1 className="text-center">{userid}</h1>
            <form onSubmit={onSubmitUserLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={onChangeUsername} placeholder="username" required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={onChangePassword} placeholder="password" required/>
                </div>
                <button type="submit" className="btn btn-primary form-control mt-5">Login</button>
            </form>
            <div className="pt-3">
            <Link to="/mongo-office/accounts/signup/" className="">Not have an account? Create one</Link>
            </div>

        </div>
    );
}