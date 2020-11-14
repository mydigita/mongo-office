import React from 'react';
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
                <div className="body-part">
                    <form onSubmit={onSubmitLogoutTrue}>
                        <h2>Hey {user} !</h2>
                        <p className="text-danger">Are you sure to logout?</p>
                        <button type="submit" className="btn btn-warning">Yes</button>            
                    </form>
                </div>
            );
        } else {
            return (
                <div className="body-part">
                    <p className="text-danger">You are not logged in!</p>
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