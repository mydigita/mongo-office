import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import  "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const username = localStorage.getItem('user');
const userid = localStorage.getItem('userid');

export default function VehicleRecords(){
    const [carList, setCarList] =  useState();
    const [buyDate, setBuyDate] = useState(new Date());
    const [taxTokenValidity, setTaxTokenValidity]  = useState(new Date());
    const [insuranceValidity, setInsuranceValidity] =  useState(new Date());
    const [fitnessValidity, setFitnessValidity] =  useState(new Date());
    const [carNumber, setCarNumber]= useState("");
    const [carDetails, setCarDetails]= useState({
        carNumber:carNumber,
        carOwner:"",
        carColor:"",
        engineNumber:"",
        chasisNumber:"",
        modelNumber:"",
        taxTokentValidity: new Date(),
        routePermitValidity: new Date(),
        insuranceValidity: new Date(),
        fitnessValidity: new Date(),
        buyDate:"",
        buyFrom:"",
        buyAtCost:"",
    });
        function onChangeCarNumber(e){
        setCarNumber(e.target.value)
    }
   
    function onChangeBuyDate(e){
        setBuyDate(e);
        setCarDetails({...carDetails, buyDate:e});        
    }
    function onChangeTaxTokenValidity(e){
        setTaxTokenValidity(e);
        setCarDetails({...carDetails, taxTokentValidity:e}); 
    }
    function onChangeInsuranceValidity(e){
        setInsuranceValidity(e);
        setCarDetails({...carDetails, insuranceValidity:e});
    }
    
    function onChangeFitnessValidity(e){
        setFitnessValidity(e);
        setCarDetails({...carDetails, fitnessValidity:e});
    }
   

    function onChangeCarDetails(e){
        setCarDetails({...carDetails, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/mongo-office/vehicle-records/displaylist/${username}/${userid}`)
        .then(res=>{  
            console.log(res.data);
            setCarList(res.data.map((e, i)=>{
                return (
                <tr>
                        <td>{i+1}</td>
                        <td>{e.carDetails.carNumber}</td>                
                        <td>{e.carDetails.taxTokenValidity}</td>
                        <td>{e.carDetails.fitnessValidity}</td>
                        <td>{e.carDetails.insuranceValidity}</td>
                </tr>)
            }))
        })
        .catch(err=>console.log(err))
    }, [])


    function onSubmitCarRegistration(e){
        e.preventDefault();
        const registrationData={
            carNumber,
            carDetails
        }
        axios.post(`http://localhost:5000/mongo-office/vehicle-records/register/${username}/${userid}`, registrationData)
        .then(data=>window.alert(data.data))
        .catch(err=>window.alert(err))
    }
    
    return(
        <div className="body-part pt-3">
            <h3 className="text-center">Vehicle Records</h3>
            <div>
                <button>Register a Car</button>
                <button>Show a car details</button>
            </div>
            <div id="carlist" className="table-responsive">
                <table className="table">
                   <thead>
                       <tr>
                           <th>Serial</th>
                           <th>Car Number</th>                                         
                           <th>Tax Token</th>
                           <th>Fitness</th>
                           <th>Insurance</th>
                       </tr>
                   </thead>
                   <tbody>
                       {carList}
                    </tbody>
                    
                </table>

            </div>
            <div id="register">
                <div>
                    <form onSubmit={onSubmitCarRegistration} className="form-light p-3">
                        <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-group">
                            <label>Car number:</label>
                            <input name="carNumber" type="text" onChange={onChangeCarNumber} placeholder="Car number" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Car color: </label>
                            <input name="carColor" type="text" onChange={onChangeCarDetails} placeholder="Car color" className="form-control" required/>
                        </div>            
                        <div className="form-group">
                            <label>Engine number:</label>
                            <input name="engineNumber" type="text" onChange={onChangeCarDetails} placeholder="Engine number" className="form-control" required/>
                        </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">                   
                        <div className="form-group">
                            <label>Chasis number:</label>
                            <input name="chasisNumber" type="text" onChange={onChangeCarDetails} placeholder="Chasis number" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Model number:</label>
                            <input name="modelNumber" type="text" onChange={onChangeCarDetails} placeholder="Model number" className="form-control" required/>
                        </div>
                  
                        <div className="form-group">
                            <label>Registration name / owner:</label>
                            <input name="carOwner" type="text" onChange={onChangeCarDetails} placeholder="Registration name/owner" className="form-control" required/>
                        </div>
                        </div>
                       
                        <div className="d-flex flex-wrap justify-content-between">                                      
                        <div className="form-group">
                            <label>Buy date:</label> <br/>
                            <DatePicker selected={buyDate} onChange={onChangeBuyDate} className="form-control" required/>
                        </div>
                                             
                        <div className="form-group">
                            <label>Buy from:</label>
                            <input name="buyFrom" type="text" onChange={onChangeCarDetails} placeholder="Bought from" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Buy at cost:</label>
                            <input name="buyAtCost" type="text" onChange={onChangeCarDetails} placeholder="Bought at cost" className="form-control" required/>
                        </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">                                      
                        <div className="form-group">
                            <label>Tax token validity:</label><br/>
                            <DatePicker selected={taxTokenValidity} onChange={onChangeTaxTokenValidity} className="form-control" required/>
                        </div>                        
                        <div className="form-group">
                            <label>Fitness Validity:</label> <br/>
                            <DatePicker selected={fitnessValidity} onChange={onChangeFitnessValidity} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Insurance validity:</label> <br/>
                            <DatePicker selected={insuranceValidity} onChange={onChangeInsuranceValidity} className="form-control" required/>
                        </div>                        
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">Confirm registration</button>
                    </form>
                </div>

            </div>

        </div>
    );
}