import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const username = localStorage.getItem('username');
const userid = localStorage.getItem('userid');



// View transactions / statement
export default function CashRegister(){
    const [transactions, setTransactions] =  useState("");
    const date = new Date().toLocaleDateString();
    const [details, setDetails]= useState("");
    const [cashIn, setCashIn] =  useState(0);
    const [cashOut, setCashOut] = useState(0);
    function onChangeDetails(e){
        setDetails(e.target.value);
    }
    function onChangeCashIn(e){
        if(e>0){
            setCashIn(e.target.value)
        }
    }
    function onChangeCashOut(e){
        if(e>0){
            setCashOut(e.target.value);
        }
    }

    function onSubmitRecordTrx(e){
        e.preventDefault();
    }

    // useEffect(()=>{

    //     axios.get(`http://localhost:5000/mongo-office/cash-register/view/${username}/${userid}`)
    //     .then(data=>{
    //         setTransactions(data.data.reverse().map(e=>{
    //             return (
    //                 <tr>
    //                     <td>{e.date}</td>
    //                     <td>{e.details}</td>
    //                     <td>{e.cashIn}</td>
    //                     <td>{e.cashOut}</td>
    //                     <td>{e.balance}</td>
    //                 </tr>
    //             );
    //         }))
    //     })

    // }, []);





    return(
        <div className="body-part">
            {/* <div id="view">
                <table>
                    {transactions}
                </table>
            </div> */}
            <div id="record">
                <form onSubmit={onSubmitRecordTrx}>
                    <p className="btn btn-warning disabled">Date: {date}</p>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" placeholder="Trx details" className="form-control" onChange={onChangeDetails} required/>
                    </div>
                    <div className="form-group">
                        <label>Cash Received: </label>
                        <input type="text" placeholder="Cash received" className="form-control" onChange={onChangeCashIn} required/>
                    </div>
                    <div className="form-group">
                        <label>Expense Amount: </label>
                        <input type="text" placeholder="Expense amount" className="form-control" onChange={onChangeCashOut} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               
            </div>

        </div>
    );
}