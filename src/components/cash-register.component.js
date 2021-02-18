import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

const username = localStorage.getItem('user');
const userid = localStorage.getItem('userid');



// View transactions / statement
export default function CashRegister(){
    const [transactions, setTransactions] =  useState("");
    const [details, setDetails]= useState("");
    const [cashIn, setCashIn] =  useState(0);
    const [cashOut, setCashOut] = useState(0);
    const [authorizedBy, setAuthorizedBy] = useState("");
    const [carriedOutBy, setCarriedOutBy] = useState("");
    const date = new Date().toString().substring(0,16);
    const [totalBalance, setTotalBalance] = useState(0);
   
   
    function onChangeDetails(e){
        setDetails(e.target.value);
    }
    function onChangeCashIn(e){
        if(e.target.value>=0){
            setCashIn(e.target.value)
        }
    }
    function onChangeCashOut(e){
        if(e.target.value>=0){
            setCashOut(e.target.value);
        }
    }
    function onChangeAuthorizedBy(e){
        setAuthorizedBy(e.target.value);
    }
    function onChangeCarriedOutBy(e){
        setCarriedOutBy(e.target.value);
    }

    function onSubmitRecordTrx(e){
        e.preventDefault();
        const trxData = {
            date:new Date(),                        
            details,
            cashIn,
            cashOut,
            authorizedBy,
            carriedOutBy,
            balance:(cashIn-cashOut)
        }

        if(cashIn>0 || cashOut>0 ){
        axios.post(`http://localhost:5000/mongo-office/cash-register/record-trx/${username}/${userid}`, trxData)
        .then(data=>window.alert(data.data))
        .then(()=>{
            setDetails("");
            setCashIn(0);
            setCashOut(0);
            setAuthorizedBy("");
            setCarriedOutBy("");
            window.location.assign('/mongo-office/cash-register/');            
        })
        .catch(err=>window.alert(err))
    } else{window.alert("Please input valid info!")}
}

    useEffect(()=>{

        axios.get(`http://localhost:5000/mongo-office/cash-register/view/${username}/${userid}`)
        .then(data=>{
            let balArr = [];
            data.data.map(e=>balArr.push(e.balance));
            setTotalBalance(balArr.reduce((a,b)=>a+b));
            console.log(balArr);
                         
            setTransactions(data.data.map(e=>{
                
                return (
                    <tr>
                        <td>{e.date.substring(0,10)}</td>
                        <td>{e.details}</td>
                        <td>{e.authorizedBy}</td>
                        <td>{e.carriedOutBy}</td>                     
                        <td>{e.cashIn}</td>
                        <td>{e.cashOut}</td>                        
                    </tr>
                );
            }))
        })
        .catch(err=>err);

    }, []);





    return(
        <div className="body-part"> 
            <div className="p-4 d-flex justify-content-between flex-wrap">
                <button className="btn btn-info" data-toggle="collapse" data-target="#record">Make an Entry</button>
                <span><strong>Date:</strong> {date}</span>
            </div>        
            <div id="record" className="collapse pb-4 form-light p-3">
                <form onSubmit={onSubmitRecordTrx}>
                    
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" placeholder="Transaction details" value={details} className="form-control" onChange={onChangeDetails} required/>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                    <div className="form-group">
                        <label>Cash Received: </label>
                        <input type="Number" min="0" placeholder="Cash received" className="form-control" onChange={onChangeCashIn} />
                    </div>
                    <div className="form-group">
                        <label>Expense Amount: </label>
                        <input type="Number" min="0" placeholder="Expense amount" className="form-control"  onChange={onChangeCashOut} />
                    </div>
                    <div className="form-group">
                        <label>Authoriszed By: </label>
                        <input type="text" placeholder="Authorized by" value={authorizedBy} className="form-control" onChange={onChangeAuthorizedBy} required/>
                    </div>
                    <div className="form-group">
                        <label>Carried out by: </label>
                        <input type="text" placeholder="Carried out by" value={carriedOutBy} className="form-control" onChange={onChangeCarriedOutBy} required/>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               
            </div>

            {/* view data / statement */}

             <div id="view" className="pt-4">
                <div >Total Balance as on {date}: <span className={totalBalance>0?"text-success":"text-danger"}> Tk {totalBalance} </span></div>
                <table className="table table-striped">
                    <tr>
                        <th className="w-10">Date</th>
                        <th className="w-50">Details</th> 
                        <th>Authorized by</th>
                        <th>Carriedout by</th>                      
                        <th>Received</th>
                        <th>Expense</th>                        
                    </tr>
                    {transactions}
                </table>
            </div>

        </div>
    );
}