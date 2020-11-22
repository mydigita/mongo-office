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
    const [cashOut, setCashOut] = useState("");
    const [trxDate, setTrxDate] = useState(new Date());    
    const [trxDetails, setTrxDetails] = useState("");
    const username = localStorage.getItem('username');
    const userid = localStorage.getItem('userid');


    function viewTransaction(){
        axios.get(`http://localhost:5000/mongo-office/cash-register/statement/${username}/${userid}`)
        .then(data=>{
            setTransactions(data.data.reverse().map(e=>{
                return (
                    <tr>
                        <td>{e.trxDate}</td>
                        <td>{e.trxDetails}</td>
                        <td>{e.trxAmountIn}</td>
                        <td>{e.trxAmountOut}</td>
                        <td>{e.cashBalance}</td>
                    </tr>
                );
            }))
        })
    }



    return(
        <div>

        </div>
    );
}