import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const username = localStorage.getItem('user');
const userid = localStorage.getItem('userid');



// View transactions / statement
export default function CashRegister(){
    const [transactions, setTransactions] =  useState("");
    const date = new Date().toLocaleString();
    const [details, setDetails]= useState("");
    const [cashIn, setCashIn] =  useState(0);
    const [cashOut, setCashOut] = useState(0);
    const [reference, setReference] = useState("");
   
    function onChangeDetails(e){
        setDetails(e.target.value);
    }
    function onChangeCashIn(e){
        if(e.target.value>0){
            setCashIn(e.target.value)
        }
    }
    function onChangeCashOut(e){
        if(e.target.value>0){
            setCashOut(e.target.value);
        }
    }
    function onChangeReference(e){
        setReference(e.target.value)
    }

    function onSubmitRecordTrx(e){
        e.preventDefault();
        const trxData = {
            date:new Date(),                        
            details,
            cashIn,
            cashOut,
            reference,
            balance:(cashIn-cashOut)
        }

        if(cashIn>0 || cashOut>0 ){
        axios.post(`http://localhost:5000/mongo-office/cash-register/record-trx/${username}/${userid}`, trxData)
        .then(data=>window.alert(data.data))
        .then(()=>{
            setDetails("");
            setCashIn(0);
            setCashOut(0);
            setReference("");
            window.location.assign('/mongo-office/cash-register/')                
        })
        .catch(err=>window.alert(err))
    } else{window.alert("Please input valid info!")}
}

    useEffect(()=>{

        axios.get(`http://localhost:5000/mongo-office/cash-register/view/${username}/${userid}`)
        .then(data=>{
            setTransactions(data.data.reverse().map(e=>{
                return (
                    <tr>
                        <td>{e.date.substring(0,10)}</td>
                        <td>{e.details}</td>
                        <td>{e.reference}</td>
                        <td>{e.cashIn}</td>
                        <td>{e.cashOut}</td>
                        <td>{e.balance}</td>
                    </tr>
                );
            }))
        })
        .catch(err=>err);

    }, []);





    return(
        <div className="body-part">           
            <div id="record">
                <form onSubmit={onSubmitRecordTrx}>
                    <p className="btn btn-warning disabled">Date: {date}</p>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" placeholder="Transaction details" value={details} className="form-control" onChange={onChangeDetails} required/>
                    </div>
                    <div className="form-group">
                        <label>Cash Received: </label>
                        <input type="Number" min="0" placeholder="Cash received" className="form-control" onChange={onChangeCashIn} />
                    </div>
                    <div className="form-group">
                        <label>Expense Amount: </label>
                        <input type="Number" min="0" placeholder="Expense amount" className="form-control"  onChange={onChangeCashOut} />
                    </div>
                    <div className="form-group">
                        <label>Reference: </label>
                        <input type="text" placeholder="Reference name" value={reference} className="form-control" onChange={onChangeReference} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               
            </div>

             <div id="view">
                <table className="table table-striped">
                    <tr>
                        <th>Date</th>
                        <th>Details</th>
                        <th>Reference</th>
                        <th>Received</th>
                        <th>Expense</th>
                        <th>Balance</th>
                    </tr>
                    {transactions}
                </table>
            </div>

        </div>
    );
}