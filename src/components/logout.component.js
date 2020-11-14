import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';

export default function Logout(){    
    const user = localStorage.getItem('user');

    function onSubmitLogoutTrue(e){
        e.preventDefault();
        localStorage.clear();
        window.location = '/mongo-office/';
    }
    function renderLogout(){
        if(user){
            return(
                <div className="body-part logout shadow">
                    <form onSubmit={onSubmitLogoutTrue}>
                        <h2>Hey {user} !</h2>
                        <p className="text-danger">Are you sure to logout?</p>
                        <button type="submit" className="btn btn-warning form-control">Yes</button>            
                    </form>
                </div>
            );
        } else {
            return (
                <div className="body-part logout">
                    <Link to="/mongo-office/accounts/login/" className="form-control nav-link bg-warning">You are not logged in. To login, click here</Link>
                </div>
            );
        }
    }


    return(
        <div>
            {renderLogout()}
        </div>
        
    );
}