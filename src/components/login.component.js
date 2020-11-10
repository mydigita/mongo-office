import React, {useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";

export default function UserLogin(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    function onChangeUsername(e){
        setUsername(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }


    function onSubmitUserLogin(e){
        e.preventDefault();
        const userData = {username, password};
        axios.get(`http://localhost:5000/${username}/${password}`)
        .then(()=>window.location="/mongo-office/home")
        .catch(err=>window.alert(err))
                
    }

    return(
        <div>
            <form onSubmit={onSubmitUserLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={onChangeUsername} placeholder="username" requireed/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={onChangePassword} placeholder="password" required/>
                </div>

            </form>

        </div>
    );
}