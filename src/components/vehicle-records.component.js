import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import  "../App.css";
import DateFnsUtils from "@date-io/date-fns";
import {
    DateTimePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

const username = localStorage.getItem('user');
const userid = localStorage.getItem('userid');

export default function VehicleRecords(){
    const [carNumber, setCarNumber]= useState("");
    const [carDetails, setCarDetails]= useState({
        carOwner:"",
        carColor:"",
        engineNumber:"",
        chasisNumber:"",
        modelNumber:"",
        taxTokentValidity:"",
        routePermitValidity:"",
        insuranceValidity:"",
        buyDate:"",
        buyFrom:"",
        buyAtCost:"",
    });
    const [lastMovement, setLastMovement] = useState({
        tripDate:new Date(),
        driver:"",
        moveFrom:"",
        moveTo:"",
        orderBy:"",
        tripDetails:""
    });
    const [movementHistory, setMovementHistory] = useState({
        tripDate:new Date(),
        driver:"",
        moveFrom:"",
        moveTo:"",
        orderBy:"",
        tripDetails:""      
    });
    const [repairHistory, setReapirHistory] = useState({
        repairDate: new Date(),
        problemDetails:"",
        repairBy:"",
        confirmBy:"",
        workDetails:"",
        cost:0
    });
    const [caseHistory, setCaseHistory] = useState({
        driver:"",
        caseDate: new Date(),
        caseReason:"",
        caseStatus:"open",
        caseDetails:""
    });
    const [accidentHistory, setAccidentHistory] = useState({
        driver:"",
        accidentDate: new Date(),
        accidentDetails:""
    });
    function onChangeCarNumber(e){
        setCarNumber(e.target.value)
    }

    function onChangeCarDetails(e){
        setCarDetails({...carDetails, [e.target.id]:e.target.value})
    }

    // function onChangeCarColor(e){
    //     setCarDetails({carColor:e.target.value})
    // }
    // function onChangeEngineNumber(e){
    //     setCarDetails({engineNumber:e.target.value})
    // }
    // function onChangeChasisNumber(e){
    //     setCarDetails({chasisNumber:e.target.value})
    // }
    // function onChangeModelNumber(e){
    //     setCarDetails({modelNumber:e.target.value})
    // }
    // function onChangeCarOwner(e){
    //     setCarDetails({carOwner:e.target.value})
    // }
    // function onChangeTaxTokenValidity(e){
    //     setCarDetails({taxTokentValidity:e})
    // }
    // function onChangeRoutePermitValidity(e){
    //     setCarDetails({routePermitValidity:e})
    // }
    // function onChangeInsuranceValidity(e){
    //     setCarDetails({insuranceValidity:e})
    // }
    // function onChangeBuyDate(e){
    //     setCarDetails({buyDate:e})
    // }
    // function onChangeBuyFrom(e){
    //     setCarDetails({buyFrom:e.target.value})
    // }
    // function onChangeBuyAtCost(e){
    //     setCarDetails({buyAtCost:e.target.value})
    // }
    
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
            <div id="register">
                <div>
                    <form onSubmit={onSubmitCarRegistration} className="form-light p-3">
                        <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-group">
                            <label>Car number:</label>
                            <input id="car-number" type="text" onChange={onChangeCarNumber} placeholder="Car number" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Car color: </label>
                            <input id="car-color" type="text" onChange={onChangeCarDetails} placeholder="Car color" className="form-control" required/>
                        </div>            
                        <div className="form-group">
                            <label>Engine number:</label>
                            <input id="engine-number" type="text" onChange={onChangeCarDetails} placeholder="Engine number" className="form-control" required/>
                        </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">                   
                        <div className="form-group">
                            <label>Chasis number:</label>
                            <input id="chasis-number" type="text" onChange={onChangeCarDetails} placeholder="Chasis number" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Model number:</label>
                            <input id="model-number" type="text" onChange={onChangeCarDetails} placeholder="Model number" className="form-control" required/>
                        </div>
                  
                        <div className="form-group">
                            <label>Registration name / owner:</label>
                            <input id="regi-name" type="text" onChange={onChangeCarDetails} placeholder="Registration name/owner" className="form-control" required/>
                        </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">                                      
                        <div className="form-group">
                            <label>Tax token validity:</label>
                            <input id="tax-token" type="text" onChange={onChangeCarDetails} placeholder="Tax token validity" className="form-control" required/>
                        </div>                        
                        <div className="form-group">
                            <label>Route permit validity:</label>
                            <input id="route-permit" type="text" onChange={onChangeCarDetails} placeholder="Route permit validity" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Insurance validity:</label>
                            <input id="insurance-validity" type="text" onChange={onChangeCarDetails} placeholder="Insurance validity" className="form-control" required/>
                        </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">                                      
                        <div className="form-group">
                            <label>Buy date:</label>
                            <input id="buy-date" type="text" onChange={onChangeCarDetails} placeholder="Buying date" className="form-control" required/>
                        </div>                        
                        <div className="form-group">
                            <label>Buy from:</label>
                            <input type="text" onChange={onChangeCarDetails} placeholder="Bought from" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Buy at cost:</label>
                            <input id="buy-cost" type="text" onChange={onChangeCarDetails} placeholder="Bought at cost" className="form-control" required/>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">Confirm registration</button>
                    </form>
                </div>

            </div>

        </div>
    );
}