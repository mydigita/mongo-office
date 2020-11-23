import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Keep record / data entry
function RecordTransactions(){


    return (
        <div>
            <form>
                <div>
                    <p>Date:</p>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control"/>
                </div>

            </form>
        </div>

    );
}

export default function CashRegister(){
    const [transactions, setTransactions] =  useState("");
    const [balance, setBalance] = useState("");
    const [cashIn, setCashIn] = useState("");    
    const [cashOut, setCashOut] = useState("");
    const [date] = useState(new Date());    
    const [details, setDetails] = useState("");
    const username = localStorage.getItem('username');
    const userid = localStorage.getItem('userid');




// View transactions / statement

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
        <div className="body-part">
            <div id="view">
                <table>
                    {transactions}
                </table>
            </div>
            <div id="record">
               <RecordTransactions/>
            </div>

        </div>
    );
}