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
    
    return(
        <div className="body-part pt-3">
            <h3 className="text-center">Vehicle Records</h3>

        </div>
    );
}