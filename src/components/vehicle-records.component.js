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
        owner:"",
        color:"",
        engineNumber:"",
        chasisNumber:"",
        modelNumber:"",
        taxTokentValidity:"",
        routePermitValidity:"",
        insuranceValidity:"",
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
    function onSubmitCarRegistration(e){
        e.preventDefault();
    }
    
    return(
        <div className="body-part pt-3">
            <h3 className="text-center">Vehicle Records</h3>
            <div id="register">
                <div>
                    <form onSubmit={onSubmitCarRegistration}>
                        <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-group">
                            <label>Car Number</label>
                            <input type="text" placeholder="Car number" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Car Color: </label>
                            <input type="text" placeholder="Car color" className="form-control" required/>
                        </div>            
                        <div className="form-group">
                            <label>Engine Number:</label>
                            <input type="text" placeholder="Engine number" className="form-control" required/>
                        </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">                   
                        <div className="form-group">
                            <label>Chasis Number</label>
                            <input type="text" placeholder="Chasis number" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Model Number</label>
                            <input type="text" placeholder="Model number" className="form-control" required/>
                        </div>
                  
                        <div className="form-group">
                            <label>Registration Name / owner</label>
                            <input type="text" placeholder="Registration name/owner" className="form-control" required/>
                        </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">                                      
                        <div className="form-group">
                            <label>Tax Token Validity</label>
                            <input type="text" placeholder="Tax token validity" className="form-control" required/>
                        </div>                        
                        <div className="form-group">
                            <label>Route permit validity</label>
                            <input type="text" placeholder="Route permit validity" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Insurance Validity</label>
                            <input type="text" placeholder="Insurance validity" className="form-control" required/>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>

        </div>
    );
}