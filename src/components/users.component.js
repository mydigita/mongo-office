import React, {useState} from 'react';
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
        axios.post('http://localhost:5000/mongo-office/accounts/register', userDetails)
        .then(()=>window.alert("Signup successful"))
        .catch(err=>window.alert(err));
    }
    return(
        <div className="body-part">
            <form onSubmit={onSubmitUserSignup}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="username" onChange={onChangeUsername}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="email" onChange={onChangeUserEmail}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="password" onChange={onChangePassword}/>
                </div>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" className="form-control" placeholder="full name" onChange={onChangeFullName}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </div>               

            </form>
        </div>
    );
}
