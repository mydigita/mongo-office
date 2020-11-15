import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.js';
 
export default function UserForm(){

    const [username, setUsername] =  useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [fullName, setFullName] = useState("");

    function onChangeUsername(e){
        setUsername(e.target.value);
    }

    function onChangeUserEmail(e){
        setUserEmail(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }

    function onChangeFullName(e){
        setFullName(e.target.value);
    }

    const userDetails = {username, userEmail, password, fullName};


    function onSubmitUserSignup(e){
        e.preventDefault();
        axios.post(`http://localhost:5000/mongo-office/accounts/${username}`, userDetails)
        .then((data)=>{window.alert(data.data); window.location='/mongo-office/'})
        .catch(err=>window.alert(err));
    }
    return(
        <div className="body-part signup shadow">
            <form onSubmit={onSubmitUserSignup}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="username" onChange={onChangeUsername} required/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="email" onChange={onChangeUserEmail} required/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="password" onChange={onChangePassword} required/>
                </div>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" className="form-control" placeholder="full name" onChange={onChangeFullName} required/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary form-control">Signup</button>
                </div>
                <div className="pt-3">
                <Link to="/mongo-office/">Have an account? Login here</Link>                    
                </div>           

            </form>
        </div>
    );
}
