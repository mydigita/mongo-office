import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.js';

export default function UserForm(){

    const [username, setUsername] =  useState("");
    const [user_email, setUser_email] = useState("");
    const [password, setPassword] =  useState("");
    const [fullName, setFullName] = useState("");

    const userDetails = {username, user_email, password, fullName};


    function onSubmitUserSignup(e){
        e.preventDefault();
        axios.post('http://localhost:5000/mongo-office/accounts/register', userDetails)
        .then(()=>window.alert("Signup successful"))
        .catch(err=>window.alert(err));
    }
    return(
        <div className="body-part">
            <form onSubmit={onSubmitUserSignup}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="username"/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="email"/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="password"/>
                </div>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" className="form-control" placeholder="full name"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </div>               

            </form>
        </div>
    );
}
