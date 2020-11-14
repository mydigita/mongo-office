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

    return(
        <div className="body-part">
            <form onSubmit={onSubmitLogoutTrue}>
                <h2>Hey {user} !</h2>
                <p><strong>Are you sure to logout?</strong></p>
                <button type="submit" className="btn btn-warning">Yes</button>            
            </form>
        </div>

    );
}