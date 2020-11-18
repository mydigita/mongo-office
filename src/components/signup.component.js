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
        <div className="container signup">
            <div>
                <h1 className="text-center text-success shadow p-2">MONGO OFFICE</h1>
                
            </div>

            <form onSubmit={onSubmitUserSignup} className="shadow p-3 border">
            <p className="text-secondary">User Registration</p>
                <div className="form-group">
                    {/* <label>Username:</label> */}
                    <input type="text" className="form-control" placeholder="Username" onChange={onChangeUsername} required/>
                </div>
                <div className="form-group">
                    {/* <label>Email:</label> */}
                    <input type="email" className="form-control" placeholder="Email" onChange={onChangeEmail} required/>
                </div>
                <div className="form-group">
                    {/* <label>Password:</label> */}
                    <input type="password" className="form-control" placeholder="Password" onChange={onChangePassword} required/>
                </div>
                <div className="form-group">
                    {/* <label>First name:</label> */}
                    <input type="text" className="form-control" placeholder="First name" onChange={onChangeFirstName} required/>
                </div>
                <div className="form-group">
                    {/* <label>Last name:</label> */}
                    <input type="text" className="form-control" placeholder="Last name" onChange={onChangeLastName} required/>
                </div>
                <div className="form-group">
                    {/* <label>Mobile number:</label> */}
                    <input type="text" className="form-control" placeholder="Mobile number" onChange={onChangeMobileNumber} required/>
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
