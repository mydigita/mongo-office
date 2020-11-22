import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function CashRegister(){
    const [transactions, setTransactions] =  useState("");
    const [cashBalance, setCashBalance] = useState("");
    const [cashIn, setCashIn] = useState("");    
    const [cashInDate, setCashInDate] = useState(new Date());
    const [cashInDetails, setCashInDetails] = useState("");
    const [cashOut, setCashOut] = useState("");
    const [cashOutDate, setCashOutDate] = useState(new Date());
    const [cashOutDetails, setCashOutDetails] = useState("");
    const username = localStorage.getItem('username');
    const userid = localStorage.getItem('userid');


    function viewTransaction(){
        axios.get(`http://localhost:5000/mongo-office/cash-register/statement/${username}/${userid}`)
        .then(data=>{
            setTransactions(data.data.reverse().map(e=>{
                return (
                    <tr></tr>
                );
            }))
        })
    }



    return(
        <div>

        </div>
    );
}