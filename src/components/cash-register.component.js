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
    const [balance, setBalance] = useState("");
    const [cashIn, setCashIn] = useState("");    
    const [cashOut, setCashOut] = useState("");
    const [date, setDate] = useState(new Date());    
    const [details, setDetails] = useState("");
    const username = localStorage.getItem('username');
    const userid = localStorage.getItem('userid');


    function viewTransaction(){
        axios.get(`http://localhost:5000/mongo-office/cash-register/view/${username}/${userid}`)
        .then(data=>{
            setTransactions(data.data.reverse().map(e=>{
                return (
                    <tr>
                        <td>{e.date}</td>
                        <td>{e.details}</td>
                        <td>{e.cashIn}</td>
                        <td>{e.cashOut}</td>
                        <td>{e.balance}</td>
                    </tr>
                );
            }))
        })
    }



    return(
        <div>
            <table>
                {transactions}
            </table>

        </div>
    );
}