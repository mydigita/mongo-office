import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery';

export default function Logout(){
    const userid = localStorage.getItem('userid');
    const user = localStorage.getItem('user');

    function onSubmitLogoutTrue(e){
        e.preventDefault();
        localStorage.setItem('user', "");
        localStorage.setItem('userid', "");
        window.location = '/mongo-office/';
    }

    return(
        <div className="body-part">
            <form onSubmit={onSubmitLogoutTrue}>
                <h4>Are you sure to logout?</h4>
                <p> {user} . {userid}</p> <br/>
                <button type="submit" className="btn btn-warning">Yes</button>            
            </form>

        </div>

    );
}