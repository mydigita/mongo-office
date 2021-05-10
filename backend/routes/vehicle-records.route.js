const router = require("express").Router();
const VehicleRecords = require("../models/vehicle-records.model");

router.route('/register/:username/:userid')
.post((req, res)=>{
    const {username, userid}= req.params;
    const {
        carNumber,   
        carDetails,
        lastMovement,
        movementHistory,
        repairHistory,
        caseHistory,
        accidentHistory
    } = req.body;
    const carRegistration = new VehicleRecords({
        carNumber,
        carDetails,
        lastMovement,
        movementHistory,
        repairHistory,
        caseHistory,
        accidentHistory,
        username,
        userid
    });
    carRegistration.save()
    .then(()=>res.send("Registration successful!"))
    .catch(err=>res.send("Registration failed! Try again later."))

});

router.route("/displaylist/:username/:userid/")
.get((req, res)=>{
    const {username, userid} = req.params;
    VehicleRecords.find({username, userid}, {carNumber:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
})


module.exports = router;