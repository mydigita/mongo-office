import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.js';

export default function UserForm(){
    return(
        <div>
            <form>
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
                    <button type="submit">Signup</button>
                </div>
                

            </form>
        </div>
    );
}
