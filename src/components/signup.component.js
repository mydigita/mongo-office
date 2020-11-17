import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.js';
 
export default function UserForm(){

    const [username, setUsername] =  useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [firstName, setFirstName]= useState();
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile]=useState("");

    function onChangeUsername(e){
        setUsername(e.target.value);
    }

    function onChangeEmail(e){
        setEmail(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }
    function onChangeFirstName(e){
        setFirstName(e.target.value);
    }

    function onChangeLastName(e){
        setLastName(e.target.value);
    }
    function onChangeMobileNumber(e){
        setMobile(e.target.value);
    }

    const userDetails = {username, email, password, firstName, lastName, mobile};


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
                    <input type="email" className="form-control" placeholder="email" onChange={onChangeEmail} required/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="password" onChange={onChangePassword} required/>
                </div>
                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" className="form-control" placeholder="first name" onChange={onChangeFirstName} required/>
                </div>
                <div className="form-group">
                    <label>Last name:</label>
                    <input type="text" className="form-control" placeholder="full name" onChange={onChangeLastName} required/>
                </div>
                <div className="form-group">
                    <label>Mobile number:</label>
                    <input type="text" className="form-control" placeholder="mobile number" onChange={onChangeMobileNumber} required/>
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
